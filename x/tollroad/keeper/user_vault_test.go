package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/b9lab/toll-road/testutil/keeper"
	"github.com/b9lab/toll-road/testutil/nullify"
	"github.com/b9lab/toll-road/x/tollroad/keeper"
	"github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNUserVault(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.UserVault {
	items := make([]types.UserVault, n)
	for i := range items {
		items[i].Owner = strconv.Itoa(i)
		items[i].RoadOperatorIndex = strconv.Itoa(i)
		items[i].Token = strconv.Itoa(i)

		keeper.SetUserVault(ctx, items[i])
	}
	return items
}

func TestUserVaultGet(t *testing.T) {
	keeper, ctx := keepertest.TollroadKeeper(t)
	items := createNUserVault(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetUserVault(ctx,
			item.Owner,
			item.RoadOperatorIndex,
			item.Token,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestUserVaultRemove(t *testing.T) {
	keeper, ctx := keepertest.TollroadKeeper(t)
	items := createNUserVault(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUserVault(ctx,
			item.Owner,
			item.RoadOperatorIndex,
			item.Token,
		)
		_, found := keeper.GetUserVault(ctx,
			item.Owner,
			item.RoadOperatorIndex,
			item.Token,
		)
		require.False(t, found)
	}
}

func TestUserVaultGetAll(t *testing.T) {
	keeper, ctx := keepertest.TollroadKeeper(t)
	items := createNUserVault(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllUserVault(ctx)),
	)
}
