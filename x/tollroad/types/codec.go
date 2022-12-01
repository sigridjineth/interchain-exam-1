package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateRoadOperator{}, "tollroad/CreateRoadOperator", nil)
	cdc.RegisterConcrete(&MsgUpdateRoadOperator{}, "tollroad/UpdateRoadOperator", nil)
	cdc.RegisterConcrete(&MsgDeleteRoadOperator{}, "tollroad/DeleteRoadOperator", nil)
	cdc.RegisterConcrete(&MsgCreateUserVault{}, "tollroad/CreateUserVault", nil)
	cdc.RegisterConcrete(&MsgUpdateUserVault{}, "tollroad/UpdateUserVault", nil)
	cdc.RegisterConcrete(&MsgDeleteUserVault{}, "tollroad/DeleteUserVault", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRoadOperator{},
		&MsgUpdateRoadOperator{},
		&MsgDeleteRoadOperator{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUserVault{},
		&MsgUpdateUserVault{},
		&MsgDeleteUserVault{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
