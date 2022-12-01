package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/b9lab/toll-road/testutil/keeper"
	"github.com/b9lab/toll-road/x/tollroad/keeper"
	"github.com/b9lab/toll-road/x/tollroad/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestUserVaultMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.TollroadKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateUserVault{Creator: creator,
			Owner:             strconv.Itoa(i),
			RoadOperatorIndex: strconv.Itoa(i),
			Token:             strconv.Itoa(i),
		}
		_, err := srv.CreateUserVault(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetUserVault(ctx,
			expected.Owner,
			expected.RoadOperatorIndex,
			expected.Token,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestUserVaultMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateUserVault
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateUserVault{Creator: creator,
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateUserVault{Creator: "B",
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateUserVault{Creator: creator,
				Owner:             strconv.Itoa(100000),
				RoadOperatorIndex: strconv.Itoa(100000),
				Token:             strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.TollroadKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateUserVault{Creator: creator,
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			}
			_, err := srv.CreateUserVault(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateUserVault(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetUserVault(ctx,
					expected.Owner,
					expected.RoadOperatorIndex,
					expected.Token,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestUserVaultMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteUserVault
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteUserVault{Creator: creator,
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteUserVault{Creator: "B",
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteUserVault{Creator: creator,
				Owner:             strconv.Itoa(100000),
				RoadOperatorIndex: strconv.Itoa(100000),
				Token:             strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.TollroadKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateUserVault(wctx, &types.MsgCreateUserVault{Creator: creator,
				Owner:             strconv.Itoa(0),
				RoadOperatorIndex: strconv.Itoa(0),
				Token:             strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteUserVault(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetUserVault(ctx,
					tc.request.Owner,
					tc.request.RoadOperatorIndex,
					tc.request.Token,
				)
				require.False(t, found)
			}
		})
	}
}
