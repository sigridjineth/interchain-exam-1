import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteRoadOperator } from "./types/tollroad/tx";
import { MsgCreateUserVault } from "./types/tollroad/tx";
import { MsgUpdateUserVault } from "./types/tollroad/tx";
import { MsgCreateRoadOperator } from "./types/tollroad/tx";
import { MsgUpdateRoadOperator } from "./types/tollroad/tx";
import { MsgDeleteUserVault } from "./types/tollroad/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/b9lab.tollroad.tollroad.MsgDeleteRoadOperator", MsgDeleteRoadOperator],
    ["/b9lab.tollroad.tollroad.MsgCreateUserVault", MsgCreateUserVault],
    ["/b9lab.tollroad.tollroad.MsgUpdateUserVault", MsgUpdateUserVault],
    ["/b9lab.tollroad.tollroad.MsgCreateRoadOperator", MsgCreateRoadOperator],
    ["/b9lab.tollroad.tollroad.MsgUpdateRoadOperator", MsgUpdateRoadOperator],
    ["/b9lab.tollroad.tollroad.MsgDeleteUserVault", MsgDeleteUserVault],
    
];

export { msgTypes }