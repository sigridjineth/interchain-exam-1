import Long from "long"
import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate"
import { PageResponse } from "../../types/generated/cosmos/base/query/v1beta1/pagination"
import { RoadOperator } from "../../types/generated/tollroad/road_operator"
import { SystemInfo } from "../../types/generated/tollroad/system_info"
import { UserVault } from "../../types/generated/tollroad/user_vault"
import {
    QueryAllRoadOperatorResponse, QueryAllUserVaultResponse,
    QueryClientImpl,
    QueryGetRoadOperatorResponse, QueryGetUserVaultResponse
} from "../../types/generated/tollroad/query";
import {assert} from "chai";

export interface AllRoadOperatorResponse {
    roadOperators: RoadOperator[]
    pagination?: PageResponse
}

export interface AllUserVaultResponse {
    userVaults: UserVault[]
    pagination?: PageResponse
}

export interface TollroadExtension {
    readonly tollroad: {
        readonly getSystemInfo: () => Promise<SystemInfo>

        readonly getRoadOperator: (
            index: string,
        ) => Promise<RoadOperator | undefined>
        readonly getAllRoadOperators: (
            key: Uint8Array,
            offset: Long,
            limit: Long,
            countTotal: boolean,
        ) => Promise<AllRoadOperatorResponse>

        readonly getUserVault: (
            owner: string,
            roadOperatorIndex: string,
            token: string,
        ) => Promise<UserVault | undefined>
        readonly getAllUserVaults: (
            key: Uint8Array,
            offset: Long,
            limit: Long,
            countTotal: boolean,
        ) => Promise<AllUserVaultResponse>
    }
}

// export function setupCheckersExtension(base: QueryClient): CheckersExtension {
//     const rpc = createProtobufRpcClient(base)
//     // Use this service to get easy typed access to query methods
//     // This cannot be used for proof verification
//     const queryService = new QueryClientImpl(rpc)
//
//     return {
//         checkers: {
//             getSystemInfo: async (): Promise<SystemInfo> => {
//                 const { SystemInfo } = await queryService.SystemInfo({})
//                 assert(SystemInfo)
//                 return SystemInfo
//             },
//             getStoredGame: async (index: string): Promise<StoredGame | undefined> => {
//                 const response: QueryGetStoredGameResponse = await queryService.StoredGame({
//                     index: index,
//                 })
//                 return response.storedGame
//             },
//             getAllStoredGames: async (
//                 key: Uint8Array,
//                 offset: Long,
//                 limit: Long,
//                 countTotal: boolean,
//             ): Promise<AllStoredGameResponse> => {
//                 const response: QueryAllStoredGameResponse = await queryService.StoredGameAll({
//                     pagination: {
//                         key: key,
//                         offset: offset,
//                         limit: limit,
//                         countTotal: countTotal,
//                         reverse: false,
//                     },
//                 })
//                 return {
//                     storedGames: response.storedGame,
//                     pagination: response.pagination,
//                 }
//             },
//             canPlayMove: async (
//                 index: string,
//                 player: Player,
//                 from: Pos,
//                 to: Pos,
//             ): Promise<QueryCanPlayMoveResponse> => {
//                 return queryService.CanPlayMove({
//                     gameIndex: index,
//                     player: player,
//                     fromX: Long.fromNumber(from.x),
//                     fromY: Long.fromNumber(from.y),
//                     toX: Long.fromNumber(to.x),
//                     toY: Long.fromNumber(to.y),
//                 })
//             },
//         },
//     }
// }
export function setupTollroadExtension(base: QueryClient): TollroadExtension {
    const rpc = createProtobufRpcClient(base)
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc)

    return {
        tollroad: {
            getSystemInfo: async (): Promise<SystemInfo> => {
                const { SystemInfo } = await queryService.SystemInfo({})
                assert(SystemInfo)
                return SystemInfo
            },
            getRoadOperator: async (
                index: string,
            ): Promise<RoadOperator | undefined> => {
                const response: QueryGetRoadOperatorResponse = await queryService.RoadOperator({
                    index: index,
                })
                return response.roadOperator
            },
            getAllRoadOperators: async (
                key: Uint8Array,
                offset: Long,
                limit: Long,
                countTotal: boolean,
            ): Promise<AllRoadOperatorResponse> => {
                const response: QueryAllRoadOperatorResponse = await queryService.RoadOperatorAll({
                    pagination: {
                        key: key,
                        offset: offset,
                        limit: limit,
                        countTotal: countTotal,
                        reverse: false,
                    },
                })
                return {
                    roadOperators: response.roadOperator,
                    pagination: response.pagination,
                }
            },
            getUserVault: async (
                owner: string,
                roadOperatorIndex: string,
                token: string,
            ): Promise<UserVault | undefined> => {
                const response: QueryGetUserVaultResponse = await queryService.UserVault({
                    owner: owner,
                    roadOperatorIndex: roadOperatorIndex,
                    token: token,
                })
                return response.userVault
            },
            getAllUserVaults: async (
                key: Uint8Array,
                offset: Long,
                limit: Long,
                countTotal: boolean,
            ): Promise<AllUserVaultResponse> => {
                const response: QueryAllUserVaultResponse = await queryService.UserVaultAll({
                    pagination: {
                        key: key,
                        offset: offset,
                        limit: limit,
                        countTotal: countTotal,
                        reverse: false,
                    },
                })
                return {
                    userVaults: response.userVault,
                    pagination: response.pagination,
                }
            },
        },
    }
}
