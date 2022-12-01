package cli

import (
	"context"

	"github.com/b9lab/toll-road/x/tollroad/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListUserVault() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-user-vault",
		Short: "list all UserVault",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllUserVaultRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.UserVaultAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowUserVault() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-user-vault [owner] [road-operator-index] [token]",
		Short: "shows a UserVault",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argOwner := args[0]
			argRoadOperatorIndex := args[1]
			argToken := args[2]

			params := &types.QueryGetUserVaultRequest{
				Owner:             argOwner,
				RoadOperatorIndex: argRoadOperatorIndex,
				Token:             argToken,
			}

			res, err := queryClient.UserVault(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
