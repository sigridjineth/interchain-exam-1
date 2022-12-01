package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SystemInfo: SystemInfo{
			NextOperatorId: 1,
		},
		RoadOperatorList: []RoadOperator{},
		UserVaultList:    []UserVault{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in roadOperator
	roadOperatorIndexMap := make(map[string]struct{})

	for _, elem := range gs.RoadOperatorList {
		index := string(RoadOperatorKey(elem.Index))
		if _, ok := roadOperatorIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for roadOperator")
		}
		roadOperatorIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in userVault
	userVaultIndexMap := make(map[string]struct{})

	for _, elem := range gs.UserVaultList {
		index := string(UserVaultKey(elem.Owner, elem.RoadOperatorIndex, elem.Token))
		if _, ok := userVaultIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for userVault")
		}
		userVaultIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
