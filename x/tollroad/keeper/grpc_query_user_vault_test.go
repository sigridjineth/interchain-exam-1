package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/b9lab/toll-road/testutil/keeper"
	"github.com/b9lab/toll-road/testutil/nullify"
	"github.com/b9lab/toll-road/x/tollroad/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestUserVaultQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TollroadKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUserVault(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetUserVaultRequest
		response *types.QueryGetUserVaultResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetUserVaultRequest{
				Owner:             msgs[0].Owner,
				RoadOperatorIndex: msgs[0].RoadOperatorIndex,
				Token:             msgs[0].Token,
			},
			response: &types.QueryGetUserVaultResponse{UserVault: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetUserVaultRequest{
				Owner:             msgs[1].Owner,
				RoadOperatorIndex: msgs[1].RoadOperatorIndex,
				Token:             msgs[1].Token,
			},
			response: &types.QueryGetUserVaultResponse{UserVault: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetUserVaultRequest{
				Owner:             strconv.Itoa(100000),
				RoadOperatorIndex: strconv.Itoa(100000),
				Token:             strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.UserVault(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestUserVaultQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TollroadKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUserVault(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllUserVaultRequest {
		return &types.QueryAllUserVaultRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UserVaultAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.UserVault), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.UserVault),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UserVaultAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.UserVault), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.UserVault),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.UserVaultAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.UserVault),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.UserVaultAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
