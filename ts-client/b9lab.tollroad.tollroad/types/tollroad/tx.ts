/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

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

export interface MsgUpdateRoadOperatorResponse {}

export interface MsgDeleteRoadOperator {
  creator: string;
  index: string;
}

export interface MsgDeleteRoadOperatorResponse {}

export interface MsgCreateUserVault {
  owner: string;
  roadOperatorIndex: string;
  token: string;
  balance: number;
}

export interface MsgCreateUserVaultResponse {}

export interface MsgUpdateUserVault {
  creator: string;
  roadOperatorIndex: string;
  token: string;
  balance: number;
}

export interface MsgUpdateUserVaultResponse {}

export interface MsgDeleteUserVault {
  creator: string;
  roadOperatorIndex: string;
  token: string;
}

export interface MsgDeleteUserVaultResponse {}

const baseMsgCreateRoadOperator: object = {
  creator: "",
  name: "",
  token: "",
  active: false,
};

export const MsgCreateRoadOperator = {
  encode(
    message: MsgCreateRoadOperator,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRoadOperator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRoadOperator } as MsgCreateRoadOperator;
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
    const message = { ...baseMsgCreateRoadOperator } as MsgCreateRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    return message;
  },

  toJSON(message: MsgCreateRoadOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.token !== undefined && (obj.token = message.token);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRoadOperator>
  ): MsgCreateRoadOperator {
    const message = { ...baseMsgCreateRoadOperator } as MsgCreateRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    return message;
  },
};

const baseMsgCreateRoadOperatorResponse: object = { index: "" };

export const MsgCreateRoadOperatorResponse = {
  encode(
    message: MsgCreateRoadOperatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRoadOperatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRoadOperatorResponse,
    } as MsgCreateRoadOperatorResponse;
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
    const message = {
      ...baseMsgCreateRoadOperatorResponse,
    } as MsgCreateRoadOperatorResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRoadOperatorResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRoadOperatorResponse>
  ): MsgCreateRoadOperatorResponse {
    const message = {
      ...baseMsgCreateRoadOperatorResponse,
    } as MsgCreateRoadOperatorResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgUpdateRoadOperator: object = {
  creator: "",
  index: "",
  name: "",
  token: "",
  active: false,
};

export const MsgUpdateRoadOperator = {
  encode(
    message: MsgUpdateRoadOperator,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRoadOperator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRoadOperator } as MsgUpdateRoadOperator;
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
    const message = { ...baseMsgUpdateRoadOperator } as MsgUpdateRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<MsgUpdateRoadOperator>
  ): MsgUpdateRoadOperator {
    const message = { ...baseMsgUpdateRoadOperator } as MsgUpdateRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    return message;
  },
};

const baseMsgUpdateRoadOperatorResponse: object = {};

export const MsgUpdateRoadOperatorResponse = {
  encode(
    _: MsgUpdateRoadOperatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRoadOperatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRoadOperatorResponse,
    } as MsgUpdateRoadOperatorResponse;
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
    const message = {
      ...baseMsgUpdateRoadOperatorResponse,
    } as MsgUpdateRoadOperatorResponse;
    return message;
  },

  toJSON(_: MsgUpdateRoadOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRoadOperatorResponse>
  ): MsgUpdateRoadOperatorResponse {
    const message = {
      ...baseMsgUpdateRoadOperatorResponse,
    } as MsgUpdateRoadOperatorResponse;
    return message;
  },
};

const baseMsgDeleteRoadOperator: object = { creator: "", index: "" };

export const MsgDeleteRoadOperator = {
  encode(
    message: MsgDeleteRoadOperator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRoadOperator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRoadOperator } as MsgDeleteRoadOperator;
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
    const message = { ...baseMsgDeleteRoadOperator } as MsgDeleteRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteRoadOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteRoadOperator>
  ): MsgDeleteRoadOperator {
    const message = { ...baseMsgDeleteRoadOperator } as MsgDeleteRoadOperator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteRoadOperatorResponse: object = {};

export const MsgDeleteRoadOperatorResponse = {
  encode(
    _: MsgDeleteRoadOperatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRoadOperatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRoadOperatorResponse,
    } as MsgDeleteRoadOperatorResponse;
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
    const message = {
      ...baseMsgDeleteRoadOperatorResponse,
    } as MsgDeleteRoadOperatorResponse;
    return message;
  },

  toJSON(_: MsgDeleteRoadOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRoadOperatorResponse>
  ): MsgDeleteRoadOperatorResponse {
    const message = {
      ...baseMsgDeleteRoadOperatorResponse,
    } as MsgDeleteRoadOperatorResponse;
    return message;
  },
};

const baseMsgCreateUserVault: object = {
  owner: "",
  roadOperatorIndex: "",
  token: "",
  balance: 0,
};

export const MsgCreateUserVault = {
  encode(
    message: MsgCreateUserVault,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.balance !== 0) {
      writer.uint32(32).uint64(message.balance);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserVault {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
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
          message.balance = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVault {
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = String(object.roadOperatorIndex);
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Number(object.balance);
    } else {
      message.balance = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateUserVault): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.roadOperatorIndex !== undefined &&
      (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUserVault>): MsgCreateUserVault {
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = object.roadOperatorIndex;
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = 0;
    }
    return message;
  },
};

const baseMsgCreateUserVaultResponse: object = {};

export const MsgCreateUserVaultResponse = {
  encode(
    _: MsgCreateUserVaultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateUserVaultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
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
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
    return message;
  },

  toJSON(_: MsgCreateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateUserVaultResponse>
  ): MsgCreateUserVaultResponse {
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
    return message;
  },
};

const baseMsgUpdateUserVault: object = {
  creator: "",
  roadOperatorIndex: "",
  token: "",
  balance: 0,
};

export const MsgUpdateUserVault = {
  encode(
    message: MsgUpdateUserVault,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.balance !== 0) {
      writer.uint32(32).uint64(message.balance);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserVault {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
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
          message.balance = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUserVault {
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = String(object.roadOperatorIndex);
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Number(object.balance);
    } else {
      message.balance = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.roadOperatorIndex !== undefined &&
      (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateUserVault>): MsgUpdateUserVault {
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = object.roadOperatorIndex;
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = 0;
    }
    return message;
  },
};

const baseMsgUpdateUserVaultResponse: object = {};

export const MsgUpdateUserVaultResponse = {
  encode(
    _: MsgUpdateUserVaultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateUserVaultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
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
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
    return message;
  },

  toJSON(_: MsgUpdateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateUserVaultResponse>
  ): MsgUpdateUserVaultResponse {
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
    return message;
  },
};

const baseMsgDeleteUserVault: object = {
  creator: "",
  roadOperatorIndex: "",
  token: "",
};

export const MsgDeleteUserVault = {
  encode(
    message: MsgDeleteUserVault,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserVault {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteUserVault } as MsgDeleteUserVault;
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
    const message = { ...baseMsgDeleteUserVault } as MsgDeleteUserVault;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = String(object.roadOperatorIndex);
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.roadOperatorIndex !== undefined &&
      (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteUserVault>): MsgDeleteUserVault {
    const message = { ...baseMsgDeleteUserVault } as MsgDeleteUserVault;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.roadOperatorIndex !== undefined &&
      object.roadOperatorIndex !== null
    ) {
      message.roadOperatorIndex = object.roadOperatorIndex;
    } else {
      message.roadOperatorIndex = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseMsgDeleteUserVaultResponse: object = {};

export const MsgDeleteUserVaultResponse = {
  encode(
    _: MsgDeleteUserVaultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteUserVaultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteUserVaultResponse,
    } as MsgDeleteUserVaultResponse;
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
    const message = {
      ...baseMsgDeleteUserVaultResponse,
    } as MsgDeleteUserVaultResponse;
    return message;
  },

  toJSON(_: MsgDeleteUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteUserVaultResponse>
  ): MsgDeleteUserVaultResponse {
    const message = {
      ...baseMsgDeleteUserVaultResponse,
    } as MsgDeleteUserVaultResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRoadOperator(
    request: MsgCreateRoadOperator
  ): Promise<MsgCreateRoadOperatorResponse>;
  UpdateRoadOperator(
    request: MsgUpdateRoadOperator
  ): Promise<MsgUpdateRoadOperatorResponse>;
  DeleteRoadOperator(
    request: MsgDeleteRoadOperator
  ): Promise<MsgDeleteRoadOperatorResponse>;
  CreateUserVault(
    request: MsgCreateUserVault
  ): Promise<MsgCreateUserVaultResponse>;
  UpdateUserVault(
    request: MsgUpdateUserVault
  ): Promise<MsgUpdateUserVaultResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteUserVault(
    request: MsgDeleteUserVault
  ): Promise<MsgDeleteUserVaultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateRoadOperator(
    request: MsgCreateRoadOperator
  ): Promise<MsgCreateRoadOperatorResponse> {
    const data = MsgCreateRoadOperator.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "CreateRoadOperator",
      data
    );
    return promise.then((data) =>
      MsgCreateRoadOperatorResponse.decode(new Reader(data))
    );
  }

  UpdateRoadOperator(
    request: MsgUpdateRoadOperator
  ): Promise<MsgUpdateRoadOperatorResponse> {
    const data = MsgUpdateRoadOperator.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "UpdateRoadOperator",
      data
    );
    return promise.then((data) =>
      MsgUpdateRoadOperatorResponse.decode(new Reader(data))
    );
  }

  DeleteRoadOperator(
    request: MsgDeleteRoadOperator
  ): Promise<MsgDeleteRoadOperatorResponse> {
    const data = MsgDeleteRoadOperator.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "DeleteRoadOperator",
      data
    );
    return promise.then((data) =>
      MsgDeleteRoadOperatorResponse.decode(new Reader(data))
    );
  }

  CreateUserVault(
    request: MsgCreateUserVault
  ): Promise<MsgCreateUserVaultResponse> {
    const data = MsgCreateUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "CreateUserVault",
      data
    );
    return promise.then((data) =>
      MsgCreateUserVaultResponse.decode(new Reader(data))
    );
  }

  UpdateUserVault(
    request: MsgUpdateUserVault
  ): Promise<MsgUpdateUserVaultResponse> {
    const data = MsgUpdateUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "UpdateUserVault",
      data
    );
    return promise.then((data) =>
      MsgUpdateUserVaultResponse.decode(new Reader(data))
    );
  }

  DeleteUserVault(
    request: MsgDeleteUserVault
  ): Promise<MsgDeleteUserVaultResponse> {
    const data = MsgDeleteUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "b9lab.tollroad.tollroad.Msg",
      "DeleteUserVault",
      data
    );
    return promise.then((data) =>
      MsgDeleteUserVaultResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
