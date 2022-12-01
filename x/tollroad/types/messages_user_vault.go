package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateUserVault = "create_user_vault"
	TypeMsgUpdateUserVault = "update_user_vault"
	TypeMsgDeleteUserVault = "delete_user_vault"
)

var _ sdk.Msg = &MsgCreateUserVault{}

func NewMsgCreateUserVault(
	creator string,
	owner string,
	roadOperatorIndex string,
	token string,
	balance uint64,

) *MsgCreateUserVault {
	return &MsgCreateUserVault{
		Creator:           creator,
		Owner:             owner,
		RoadOperatorIndex: roadOperatorIndex,
		Token:             token,
		Balance:           balance,
	}
}

func (msg *MsgCreateUserVault) Route() string {
	return RouterKey
}

func (msg *MsgCreateUserVault) Type() string {
	return TypeMsgCreateUserVault
}

func (msg *MsgCreateUserVault) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUserVault) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUserVault) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateUserVault{}

func NewMsgUpdateUserVault(
	creator string,
	owner string,
	roadOperatorIndex string,
	token string,
	balance uint64,

) *MsgUpdateUserVault {
	return &MsgUpdateUserVault{
		Creator:           creator,
		Owner:             owner,
		RoadOperatorIndex: roadOperatorIndex,
		Token:             token,
		Balance:           balance,
	}
}

func (msg *MsgUpdateUserVault) Route() string {
	return RouterKey
}

func (msg *MsgUpdateUserVault) Type() string {
	return TypeMsgUpdateUserVault
}

func (msg *MsgUpdateUserVault) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateUserVault) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateUserVault) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteUserVault{}

func NewMsgDeleteUserVault(
	creator string,
	owner string,
	roadOperatorIndex string,
	token string,

) *MsgDeleteUserVault {
	return &MsgDeleteUserVault{
		Creator:           creator,
		Owner:             owner,
		RoadOperatorIndex: roadOperatorIndex,
		Token:             token,
	}
}
func (msg *MsgDeleteUserVault) Route() string {
	return RouterKey
}

func (msg *MsgDeleteUserVault) Type() string {
	return TypeMsgDeleteUserVault
}

func (msg *MsgDeleteUserVault) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteUserVault) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteUserVault) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
