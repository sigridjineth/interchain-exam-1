package tollroad_test

import (
	"testing"

	keepertest "github.com/b9lab/toll-road/testutil/keeper"
	"github.com/b9lab/toll-road/testutil/nullify"
	"github.com/b9lab/toll-road/x/tollroad"
	"github.com/b9lab/toll-road/x/tollroad/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TollroadKeeper(t)
	tollroad.InitGenesis(ctx, *k, genesisState)
	got := tollroad.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
