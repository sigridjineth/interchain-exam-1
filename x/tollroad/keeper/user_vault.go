package keeper

import (
	"github.com/b9lab/toll-road/x/tollroad/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetUserVault set a specific userVault in the store from its index
func (k Keeper) SetUserVault(ctx sdk.Context, userVault types.UserVault) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserVaultKeyPrefix))
	b := k.cdc.MustMarshal(&userVault)
	store.Set(types.UserVaultKey(
		userVault.Owner,
		userVault.RoadOperatorIndex,
		userVault.Token,
	), b)
}

// GetUserVault returns a userVault from its index
func (k Keeper) GetUserVault(
	ctx sdk.Context,
	owner string,
	roadOperatorIndex string,
	token string,

) (val types.UserVault, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserVaultKeyPrefix))

	b := store.Get(types.UserVaultKey(
		owner,
		roadOperatorIndex,
		token,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUserVault removes a userVault from the store
func (k Keeper) RemoveUserVault(
	ctx sdk.Context,
	owner string,
	roadOperatorIndex string,
	token string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserVaultKeyPrefix))
	store.Delete(types.UserVaultKey(
		owner,
		roadOperatorIndex,
		token,
	))
}

// GetAllUserVault returns all userVault
func (k Keeper) GetAllUserVault(ctx sdk.Context) (list []types.UserVault) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserVaultKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.UserVault
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
