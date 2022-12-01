package cli

import (
	"github.com/b9lab/toll-road/x/tollroad/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateUserVault() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-user-vault [road-operator-index] [token] [balance] [owner]",
		Short: "Create a new UserVault",
		//Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexRoadOperatorIndex := args[0]
			indexToken := args[1]
			argBalance, err := cast.ToUint64E(args[2])
			clientCtx, err := client.GetClientTxContext(cmd)
			indexOwner := clientCtx.GetFromAddress().String()
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateUserVault(
				indexOwner,
				indexRoadOperatorIndex,
				indexToken,
				argBalance,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateUserVault() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-user-vault [owner] [road-operator-index] [token] [balance]",
		Short: "Update a UserVault",
		//Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexRoadOperatorIndex := args[0]
			indexToken := args[1]
			argBalance, err := cast.ToUint64E(args[2])
			clientCtx, err := client.GetClientTxContext(cmd)
			indexOwner := clientCtx.GetFromAddress().String()

			// func NewMsgUpdateUserVault(
			//	creator string,
			//	roadOperatorIndex string,
			//	token string,
			//	balance uint64,
			msg := types.NewMsgUpdateUserVault(
				indexOwner,
				indexRoadOperatorIndex,
				indexToken,
				argBalance,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteUserVault() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-user-vault [owner] [road-operator-index] [token]",
		Short: "Delete a UserVault",
		//Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			//indexOwner := args[0]
			indexRoadOperatorIndex := args[1]
			indexToken := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteUserVault(
				clientCtx.GetFromAddress().String(),
				indexRoadOperatorIndex,
				indexToken,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
