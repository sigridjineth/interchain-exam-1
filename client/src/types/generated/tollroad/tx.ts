/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "b9lab.tollroad.tollroad";

export interface MsgCreateRoadOperator {
  creator: string;
  name: string;
  token: string;
  active: boolean;
}

export interface MsgCreateRoadOperatorResponse {
  index: string;
}

export interface MsgUpdateRoadOperator {
  creator: string;
  index: string;
  name: string;
  token: string;
  active: boolean;
}

export interface MsgUpdateRoadOperatorResponse {
}

export interface MsgDeleteRoadOperator {
  creator: string;
  index: string;
}

export interface MsgDeleteRoadOperatorResponse {
}

export interface MsgCreateUserVault {
  owner: string;
  roadOperatorIndex: string;
  token: string;
  balance: Long;
}

export interface MsgCreateUserVaultResponse {
}

export interface MsgUpdateUserVault {
  creator: string;
  roadOperatorIndex: string;
  token: string;
  balance: Long;
}

export interface MsgUpdateUserVaultResponse {
}

export interface MsgDeleteUserVault {
  creator: string;
  roadOperatorIndex: string;
  token: string;
}

export interface MsgDeleteUserVaultResponse {
}

function createBaseMsgCreateRoadOperator(): MsgCreateRoadOperator {
  return { creator: "", name: "", token: "", active: false };
}

export const MsgCreateRoadOperator = {
  encode(message: MsgCreateRoadOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoadOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoadOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRoadOperator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      token: isSet(object.token) ? String(object.token) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: MsgCreateRoadOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.token !== undefined && (obj.token = message.token);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRoadOperator>, I>>(object: I): MsgCreateRoadOperator {
    const message = createBaseMsgCreateRoadOperator();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.token = object.token ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseMsgCreateRoadOperatorResponse(): MsgCreateRoadOperatorResponse {
  return { index: "" };
}

export const MsgCreateRoadOperatorResponse = {
  encode(message: MsgCreateRoadOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoadOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoadOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRoadOperatorResponse {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: MsgCreateRoadOperatorResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRoadOperatorResponse>, I>>(
    object: I,
  ): MsgCreateRoadOperatorResponse {
    const message = createBaseMsgCreateRoadOperatorResponse();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgUpdateRoadOperator(): MsgUpdateRoadOperator {
  return { creator: "", index: "", name: "", token: "", active: false };
}

export const MsgUpdateRoadOperator = {
  encode(message: MsgUpdateRoadOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.token !== "") {
      writer.uint32(34).string(message.token);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoadOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoadOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.token = reader.string();
          break;
        case 5:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRoadOperator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      name: isSet(object.name) ? String(object.name) : "",
      token: isSet(object.token) ? String(object.token) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: MsgUpdateRoadOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.token !== undefined && (obj.token = message.token);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRoadOperator>, I>>(object: I): MsgUpdateRoadOperator {
    const message = createBaseMsgUpdateRoadOperator();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.token = object.token ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseMsgUpdateRoadOperatorResponse(): MsgUpdateRoadOperatorResponse {
  return {};
}

export const MsgUpdateRoadOperatorResponse = {
  encode(_: MsgUpdateRoadOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoadOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoadOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRoadOperatorResponse {
    return {};
  },

  toJSON(_: MsgUpdateRoadOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRoadOperatorResponse>, I>>(_: I): MsgUpdateRoadOperatorResponse {
    const message = createBaseMsgUpdateRoadOperatorResponse();
    return message;
  },
};

function createBaseMsgDeleteRoadOperator(): MsgDeleteRoadOperator {
  return { creator: "", index: "" };
}

export const MsgDeleteRoadOperator = {
  encode(message: MsgDeleteRoadOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoadOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRoadOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRoadOperator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: MsgDeleteRoadOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRoadOperator>, I>>(object: I): MsgDeleteRoadOperator {
    const message = createBaseMsgDeleteRoadOperator();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgDeleteRoadOperatorResponse(): MsgDeleteRoadOperatorResponse {
  return {};
}

export const MsgDeleteRoadOperatorResponse = {
  encode(_: MsgDeleteRoadOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoadOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRoadOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteRoadOperatorResponse {
    return {};
  },

  toJSON(_: MsgDeleteRoadOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRoadOperatorResponse>, I>>(_: I): MsgDeleteRoadOperatorResponse {
    const message = createBaseMsgDeleteRoadOperatorResponse();
    return message;
  },
};

function createBaseMsgCreateUserVault(): MsgCreateUserVault {
  return { owner: "", roadOperatorIndex: "", token: "", balance: Long.UZERO };
}

export const MsgCreateUserVault = {
  encode(message: MsgCreateUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (!message.balance.isZero()) {
      writer.uint32(32).uint64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.roadOperatorIndex = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.balance = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVault {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
      token: isSet(object.token) ? String(object.token) : "",
      balance: isSet(object.balance) ? Long.fromValue(object.balance) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateUserVault): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = (message.balance || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserVault>, I>>(object: I): MsgCreateUserVault {
    const message = createBaseMsgCreateUserVault();
    message.owner = object.owner ?? "";
    message.roadOperatorIndex = object.roadOperatorIndex ?? "";
    message.token = object.token ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Long.fromValue(object.balance)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateUserVaultResponse(): MsgCreateUserVaultResponse {
  return {};
}

export const MsgCreateUserVaultResponse = {
  encode(_: MsgCreateUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateUserVaultResponse {
    return {};
  },

  toJSON(_: MsgCreateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserVaultResponse>, I>>(_: I): MsgCreateUserVaultResponse {
    const message = createBaseMsgCreateUserVaultResponse();
    return message;
  },
};

function createBaseMsgUpdateUserVault(): MsgUpdateUserVault {
  return { creator: "", roadOperatorIndex: "", token: "", balance: Long.UZERO };
}

export const MsgUpdateUserVault = {
  encode(message: MsgUpdateUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (!message.balance.isZero()) {
      writer.uint32(32).uint64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.roadOperatorIndex = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.balance = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUserVault {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
      token: isSet(object.token) ? String(object.token) : "",
      balance: isSet(object.balance) ? Long.fromValue(object.balance) : Long.UZERO,
    };
  },

  toJSON(message: MsgUpdateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = (message.balance || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserVault>, I>>(object: I): MsgUpdateUserVault {
    const message = createBaseMsgUpdateUserVault();
    message.creator = object.creator ?? "";
    message.roadOperatorIndex = object.roadOperatorIndex ?? "";
    message.token = object.token ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Long.fromValue(object.balance)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateUserVaultResponse(): MsgUpdateUserVaultResponse {
  return {};
}

export const MsgUpdateUserVaultResponse = {
  encode(_: MsgUpdateUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateUserVaultResponse {
    return {};
  },

  toJSON(_: MsgUpdateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserVaultResponse>, I>>(_: I): MsgUpdateUserVaultResponse {
    const message = createBaseMsgUpdateUserVaultResponse();
    return message;
  },
};

function createBaseMsgDeleteUserVault(): MsgDeleteUserVault {
  return { creator: "", roadOperatorIndex: "", token: "" };
}

export const MsgDeleteUserVault = {
  encode(message: MsgDeleteUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.roadOperatorIndex = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUserVault {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: MsgDeleteUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserVault>, I>>(object: I): MsgDeleteUserVault {
    const message = createBaseMsgDeleteUserVault();
    message.creator = object.creator ?? "";
    message.roadOperatorIndex = object.roadOperatorIndex ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseMsgDeleteUserVaultResponse(): MsgDeleteUserVaultResponse {
  return {};
}

export const MsgDeleteUserVaultResponse = {
  encode(_: MsgDeleteUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteUserVaultResponse {
    return {};
  },

  toJSON(_: MsgDeleteUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserVaultResponse>, I>>(_: I): MsgDeleteUserVaultResponse {
    const message = createBaseMsgDeleteUserVaultResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRoadOperator(request: MsgCreateRoadOperator): Promise<MsgCreateRoadOperatorResponse>;
  UpdateRoadOperator(request: MsgUpdateRoadOperator): Promise<MsgUpdateRoadOperatorResponse>;
  DeleteRoadOperator(request: MsgDeleteRoadOperator): Promise<MsgDeleteRoadOperatorResponse>;
  CreateUserVault(request: MsgCreateUserVault): Promise<MsgCreateUserVaultResponse>;
  UpdateUserVault(request: MsgUpdateUserVault): Promise<MsgUpdateUserVaultResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteUserVault(request: MsgDeleteUserVault): Promise<MsgDeleteUserVaultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoadOperator = this.CreateRoadOperator.bind(this);
    this.UpdateRoadOperator = this.UpdateRoadOperator.bind(this);
    this.DeleteRoadOperator = this.DeleteRoadOperator.bind(this);
    this.CreateUserVault = this.CreateUserVault.bind(this);
    this.UpdateUserVault = this.UpdateUserVault.bind(this);
    this.DeleteUserVault = this.DeleteUserVault.bind(this);
  }
  CreateRoadOperator(request: MsgCreateRoadOperator): Promise<MsgCreateRoadOperatorResponse> {
    const data = MsgCreateRoadOperator.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "CreateRoadOperator", data);
    return promise.then((data) => MsgCreateRoadOperatorResponse.decode(new _m0.Reader(data)));
  }

  UpdateRoadOperator(request: MsgUpdateRoadOperator): Promise<MsgUpdateRoadOperatorResponse> {
    const data = MsgUpdateRoadOperator.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "UpdateRoadOperator", data);
    return promise.then((data) => MsgUpdateRoadOperatorResponse.decode(new _m0.Reader(data)));
  }

  DeleteRoadOperator(request: MsgDeleteRoadOperator): Promise<MsgDeleteRoadOperatorResponse> {
    const data = MsgDeleteRoadOperator.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "DeleteRoadOperator", data);
    return promise.then((data) => MsgDeleteRoadOperatorResponse.decode(new _m0.Reader(data)));
  }

  CreateUserVault(request: MsgCreateUserVault): Promise<MsgCreateUserVaultResponse> {
    const data = MsgCreateUserVault.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "CreateUserVault", data);
    return promise.then((data) => MsgCreateUserVaultResponse.decode(new _m0.Reader(data)));
  }

  UpdateUserVault(request: MsgUpdateUserVault): Promise<MsgUpdateUserVaultResponse> {
    const data = MsgUpdateUserVault.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "UpdateUserVault", data);
    return promise.then((data) => MsgUpdateUserVaultResponse.decode(new _m0.Reader(data)));
  }

  DeleteUserVault(request: MsgDeleteUserVault): Promise<MsgDeleteUserVaultResponse> {
    const data = MsgDeleteUserVault.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Msg", "DeleteUserVault", data);
    return promise.then((data) => MsgDeleteUserVaultResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
