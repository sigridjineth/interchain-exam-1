package keeper

import (
	"context"

	"github.com/b9lab/toll-road/x/tollroad/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UserVaultAll(c context.Context, req *types.QueryAllUserVaultRequest) (*types.QueryAllUserVaultResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var userVaults []types.UserVault
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	userVaultStore := prefix.NewStore(store, types.KeyPrefix(types.UserVaultKeyPrefix))

	pageRes, err := query.Paginate(userVaultStore, req.Pagination, func(key []byte, value []byte) error {
		var userVault types.UserVault
		if err := k.cdc.Unmarshal(value, &userVault); err != nil {
			return err
		}

		userVaults = append(userVaults, userVault)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllUserVaultResponse{UserVault: userVaults, Pagination: pageRes}, nil
}

func (k Keeper) UserVault(c context.Context, req *types.QueryGetUserVaultRequest) (*types.QueryGetUserVaultResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetUserVault(
		ctx,
		req.Owner,
		req.RoadOperatorIndex,
		req.Token,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetUserVaultResponse{UserVault: val}, nil
}
