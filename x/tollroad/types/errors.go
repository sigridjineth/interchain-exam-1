package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/tollroad module sentinel errors
var (
	ErrSample            = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrZeroTokens        = sdkerrors.Register(ModuleName, 1101, "zero tokens")
	ErrIndexSet          = sdkerrors.Register(ModuleName, 1102, "index already set")
	ErrBlackCannotPay    = sdkerrors.Register(ModuleName, 1112, "black cannot pay the wager")
	ErrRedCannotPay      = sdkerrors.Register(ModuleName, 1113, "red cannot pay the wager")
	ErrNothingToPay      = sdkerrors.Register(ModuleName, 1114, "there is nothing to pay, should not have been called")
	ErrCannotRefundWager = sdkerrors.Register(ModuleName, 1115, "cannot refund wager to: %s")
	ErrCannotPayWinnings = sdkerrors.Register(ModuleName, 1116, "cannot pay winnings to winner: %s")
	ErrNotInRefundState  = sdkerrors.Register(ModuleName, 1117, "game is not in a state to refund, move count: %d")
)
