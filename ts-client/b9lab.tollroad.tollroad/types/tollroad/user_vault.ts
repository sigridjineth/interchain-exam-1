/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "b9lab.tollroad.tollroad";

export interface UserVault {
  owner: string;
  roadOperatorIndex: string;
  token: string;
  balance: number;
  creator: string;
}

const baseUserVault: object = {
  owner: "",
  roadOperatorIndex: "",
  token: "",
  balance: 0,
  creator: "",
};

export const UserVault = {
  encode(message: UserVault, writer: Writer = Writer.create()): Writer {
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserVault {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserVault } as UserVault;
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
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVault {
    const message = { ...baseUserVault } as UserVault;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: UserVault): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.roadOperatorIndex !== undefined &&
      (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = message.balance);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<UserVault>): UserVault {
    const message = { ...baseUserVault } as UserVault;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
