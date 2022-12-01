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
		Use:   "create-user-vault [owner] [road-operator-index] [token] [balance]",
		Short: "Create a new UserVault",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexOwner := args[0]
			indexRoadOperatorIndex := args[1]
			indexToken := args[2]

			// Get value arguments
			argBalance, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateUserVault(
				clientCtx.GetFromAddress().String(),
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
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexOwner := args[0]
			indexRoadOperatorIndex := args[1]
			indexToken := args[2]

			// Get value arguments
			argBalance, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateUserVault(
				clientCtx.GetFromAddress().String(),
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
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexOwner := args[0]
			indexRoadOperatorIndex := args[1]
			indexToken := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteUserVault(
				clientCtx.GetFromAddress().String(),
				indexOwner,
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
