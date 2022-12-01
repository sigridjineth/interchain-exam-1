package keeper

import (
	"context"
	"github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateUserVault(goCtx context.Context, msg *types.MsgCreateUserVault) (*types.MsgCreateUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetUserVault(
		ctx,
		msg.Owner,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var userVault = types.UserVault{
		//Creator:           msg.Creator,
		Owner:             msg.Owner,
		RoadOperatorIndex: msg.RoadOperatorIndex,
		Token:             msg.Token,
		Balance:           msg.Balance,
	}

	k.SetUserVault(
		ctx,
		userVault,
	)

	AccAddressFromBech32, _ := sdk.AccAddressFromBech32(msg.Owner)
	err := k.escrow.SendCoinsFromAccountToModule(ctx,
		AccAddressFromBech32,
		types.ModuleName, sdk.NewCoins(sdk.NewCoin(msg.Token, sdk.NewInt(int64(msg.Balance)))))
	if err != nil {
		return nil, err
	}

	return &types.MsgCreateUserVaultResponse{}, nil
}

func (k msgServer) UpdateUserVault(goCtx context.Context, msg *types.MsgUpdateUserVault) (*types.MsgUpdateUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var userVault = types.UserVault{
		Owner: msg.Creator,
		//Owner:             msg.Owner,
		RoadOperatorIndex: msg.RoadOperatorIndex,
		Token:             msg.Token,
		Balance:           msg.Balance,
	}

	k.SetUserVault(ctx, userVault)

	return &types.MsgUpdateUserVaultResponse{}, nil
}

func (k msgServer) DeleteUserVault(goCtx context.Context, msg *types.MsgDeleteUserVault) (*types.MsgDeleteUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)

	return &types.MsgDeleteUserVaultResponse{}, nil
}
