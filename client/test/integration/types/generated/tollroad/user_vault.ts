/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "b9lab.tollroad.tollroad";

export interface UserVault {
  owner: string;
  roadOperatorIndex: string;
  token: string;
  balance: Long;
  creator: string;
}

function createBaseUserVault(): UserVault {
  return { owner: "", roadOperatorIndex: "", token: "", balance: Long.UZERO, creator: "" };
}

export const UserVault = {
  encode(message: UserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVault();
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
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
      token: isSet(object.token) ? String(object.token) : "",
      balance: isSet(object.balance) ? Long.fromValue(object.balance) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: UserVault): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    message.balance !== undefined && (obj.balance = (message.balance || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserVault>, I>>(object: I): UserVault {
    const message = createBaseUserVault();
    message.owner = object.owner ?? "";
    message.roadOperatorIndex = object.roadOperatorIndex ?? "";
    message.token = object.token ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Long.fromValue(object.balance)
      : Long.UZERO;
    message.creator = object.creator ?? "";
    return message;
  },
};

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
