// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateUserVault } from "./types/tollroad/tx";
import { MsgDeleteRoadOperator } from "./types/tollroad/tx";
import { MsgCreateRoadOperator } from "./types/tollroad/tx";
import { MsgUpdateRoadOperator } from "./types/tollroad/tx";
import { MsgDeleteUserVault } from "./types/tollroad/tx";
import { MsgCreateUserVault } from "./types/tollroad/tx";


export { MsgUpdateUserVault, MsgDeleteRoadOperator, MsgCreateRoadOperator, MsgUpdateRoadOperator, MsgDeleteUserVault, MsgCreateUserVault };

type sendMsgUpdateUserVaultParams = {
  value: MsgUpdateUserVault,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteRoadOperatorParams = {
  value: MsgDeleteRoadOperator,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateRoadOperatorParams = {
  value: MsgCreateRoadOperator,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateRoadOperatorParams = {
  value: MsgUpdateRoadOperator,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteUserVaultParams = {
  value: MsgDeleteUserVault,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateUserVaultParams = {
  value: MsgCreateUserVault,
  fee?: StdFee,
  memo?: string
};


type msgUpdateUserVaultParams = {
  value: MsgUpdateUserVault,
};

type msgDeleteRoadOperatorParams = {
  value: MsgDeleteRoadOperator,
};

type msgCreateRoadOperatorParams = {
  value: MsgCreateRoadOperator,
};

type msgUpdateRoadOperatorParams = {
  value: MsgUpdateRoadOperator,
};

type msgDeleteUserVaultParams = {
  value: MsgDeleteUserVault,
};

type msgCreateUserVaultParams = {
  value: MsgCreateUserVault,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUpdateUserVault({ value, fee, memo }: sendMsgUpdateUserVaultParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateUserVault: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateUserVault({ value: MsgUpdateUserVault.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateUserVault: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteRoadOperator({ value, fee, memo }: sendMsgDeleteRoadOperatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteRoadOperator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteRoadOperator({ value: MsgDeleteRoadOperator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteRoadOperator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateRoadOperator({ value, fee, memo }: sendMsgCreateRoadOperatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateRoadOperator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateRoadOperator({ value: MsgCreateRoadOperator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateRoadOperator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateRoadOperator({ value, fee, memo }: sendMsgUpdateRoadOperatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateRoadOperator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateRoadOperator({ value: MsgUpdateRoadOperator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateRoadOperator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteUserVault({ value, fee, memo }: sendMsgDeleteUserVaultParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteUserVault: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteUserVault({ value: MsgDeleteUserVault.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteUserVault: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateUserVault({ value, fee, memo }: sendMsgCreateUserVaultParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateUserVault: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateUserVault({ value: MsgCreateUserVault.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateUserVault: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateUserVault({ value }: msgUpdateUserVaultParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateUserVault", value: MsgUpdateUserVault.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateUserVault: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteRoadOperator({ value }: msgDeleteRoadOperatorParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteRoadOperator", value: MsgDeleteRoadOperator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteRoadOperator: Could not create message: ' + e.message)
			}
		},
		
		msgCreateRoadOperator({ value }: msgCreateRoadOperatorParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgCreateRoadOperator", value: MsgCreateRoadOperator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateRoadOperator: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateRoadOperator({ value }: msgUpdateRoadOperatorParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateRoadOperator", value: MsgUpdateRoadOperator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateRoadOperator: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteUserVault({ value }: msgDeleteUserVaultParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteUserVault", value: MsgDeleteUserVault.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteUserVault: Could not create message: ' + e.message)
			}
		},
		
		msgCreateUserVault({ value }: msgCreateUserVaultParams): EncodeObject {
			try {
				return { typeUrl: "/b9lab.tollroad.tollroad.MsgCreateUserVault", value: MsgCreateUserVault.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateUserVault: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			B9LabTollroadTollroad: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;