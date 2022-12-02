/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "b9lab.tollroad.tollroad";

export interface RoadOperator {
  index: string;
  name: string;
  token: string;
  active: boolean;
  creator: string;
}

function createBaseRoadOperator(): RoadOperator {
  return { index: "", name: "", token: "", active: false, creator: "" };
}

export const RoadOperator = {
  encode(message: RoadOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoadOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoadOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
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

  fromJSON(object: any): RoadOperator {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      name: isSet(object.name) ? String(object.name) : "",
      token: isSet(object.token) ? String(object.token) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: RoadOperator): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.token !== undefined && (obj.token = message.token);
    message.active !== undefined && (obj.active = message.active);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoadOperator>, I>>(object: I): RoadOperator {
    const message = createBaseRoadOperator();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.token = object.token ?? "";
    message.active = object.active ?? false;
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
