/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { RoadOperator } from "./road_operator";
import { SystemInfo } from "./system_info";
import { UserVault } from "./user_vault";

export const protobufPackage = "b9lab.tollroad.tollroad";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetSystemInfoRequest {
}

export interface QueryGetSystemInfoResponse {
  SystemInfo?: SystemInfo;
}

export interface QueryGetRoadOperatorRequest {
  index: string;
}

export interface QueryGetRoadOperatorResponse {
  roadOperator?: RoadOperator;
}

export interface QueryAllRoadOperatorRequest {
  pagination?: PageRequest;
}

export interface QueryAllRoadOperatorResponse {
  roadOperator: RoadOperator[];
  pagination?: PageResponse;
}

export interface QueryGetUserVaultRequest {
  owner: string;
  roadOperatorIndex: string;
  token: string;
}

export interface QueryGetUserVaultResponse {
  userVault?: UserVault;
}

export interface QueryAllUserVaultRequest {
  pagination?: PageRequest;
}

export interface QueryAllUserVaultResponse {
  userVault: UserVault[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfoRequest(): QueryGetSystemInfoRequest {
  return {};
}

export const QueryGetSystemInfoRequest = {
  encode(_: QueryGetSystemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoRequest();
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

  fromJSON(_: any): QueryGetSystemInfoRequest {
    return {};
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(_: I): QueryGetSystemInfoRequest {
    const message = createBaseQueryGetSystemInfoRequest();
    return message;
  },
};

function createBaseQueryGetSystemInfoResponse(): QueryGetSystemInfoResponse {
  return { SystemInfo: undefined };
}

export const QueryGetSystemInfoResponse = {
  encode(message: QueryGetSystemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfoResponse {
    return { SystemInfo: isSet(object.SystemInfo) ? SystemInfo.fromJSON(object.SystemInfo) : undefined };
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined &&
      (obj.SystemInfo = message.SystemInfo ? SystemInfo.toJSON(message.SystemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(object: I): QueryGetSystemInfoResponse {
    const message = createBaseQueryGetSystemInfoResponse();
    message.SystemInfo = (object.SystemInfo !== undefined && object.SystemInfo !== null)
      ? SystemInfo.fromPartial(object.SystemInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRoadOperatorRequest(): QueryGetRoadOperatorRequest {
  return { index: "" };
}

export const QueryGetRoadOperatorRequest = {
  encode(message: QueryGetRoadOperatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRoadOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRoadOperatorRequest();
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

  fromJSON(object: any): QueryGetRoadOperatorRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetRoadOperatorRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRoadOperatorRequest>, I>>(object: I): QueryGetRoadOperatorRequest {
    const message = createBaseQueryGetRoadOperatorRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetRoadOperatorResponse(): QueryGetRoadOperatorResponse {
  return { roadOperator: undefined };
}

export const QueryGetRoadOperatorResponse = {
  encode(message: QueryGetRoadOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roadOperator !== undefined) {
      RoadOperator.encode(message.roadOperator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRoadOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRoadOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roadOperator = RoadOperator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRoadOperatorResponse {
    return { roadOperator: isSet(object.roadOperator) ? RoadOperator.fromJSON(object.roadOperator) : undefined };
  },

  toJSON(message: QueryGetRoadOperatorResponse): unknown {
    const obj: any = {};
    message.roadOperator !== undefined &&
      (obj.roadOperator = message.roadOperator ? RoadOperator.toJSON(message.roadOperator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRoadOperatorResponse>, I>>(object: I): QueryGetRoadOperatorResponse {
    const message = createBaseQueryGetRoadOperatorResponse();
    message.roadOperator = (object.roadOperator !== undefined && object.roadOperator !== null)
      ? RoadOperator.fromPartial(object.roadOperator)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRoadOperatorRequest(): QueryAllRoadOperatorRequest {
  return { pagination: undefined };
}

export const QueryAllRoadOperatorRequest = {
  encode(message: QueryAllRoadOperatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRoadOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRoadOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRoadOperatorRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRoadOperatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRoadOperatorRequest>, I>>(object: I): QueryAllRoadOperatorRequest {
    const message = createBaseQueryAllRoadOperatorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRoadOperatorResponse(): QueryAllRoadOperatorResponse {
  return { roadOperator: [], pagination: undefined };
}

export const QueryAllRoadOperatorResponse = {
  encode(message: QueryAllRoadOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roadOperator) {
      RoadOperator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRoadOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRoadOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roadOperator.push(RoadOperator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRoadOperatorResponse {
    return {
      roadOperator: Array.isArray(object?.roadOperator)
        ? object.roadOperator.map((e: any) => RoadOperator.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRoadOperatorResponse): unknown {
    const obj: any = {};
    if (message.roadOperator) {
      obj.roadOperator = message.roadOperator.map((e) => e ? RoadOperator.toJSON(e) : undefined);
    } else {
      obj.roadOperator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRoadOperatorResponse>, I>>(object: I): QueryAllRoadOperatorResponse {
    const message = createBaseQueryAllRoadOperatorResponse();
    message.roadOperator = object.roadOperator?.map((e) => RoadOperator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetUserVaultRequest(): QueryGetUserVaultRequest {
  return { owner: "", roadOperatorIndex: "", token: "" };
}

export const QueryGetUserVaultRequest = {
  encode(message: QueryGetUserVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.roadOperatorIndex !== "") {
      writer.uint32(18).string(message.roadOperatorIndex);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserVaultRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserVaultRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: QueryGetUserVaultRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserVaultRequest>, I>>(object: I): QueryGetUserVaultRequest {
    const message = createBaseQueryGetUserVaultRequest();
    message.owner = object.owner ?? "";
    message.roadOperatorIndex = object.roadOperatorIndex ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseQueryGetUserVaultResponse(): QueryGetUserVaultResponse {
  return { userVault: undefined };
}

export const QueryGetUserVaultResponse = {
  encode(message: QueryGetUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userVault !== undefined) {
      UserVault.encode(message.userVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVault = UserVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserVaultResponse {
    return { userVault: isSet(object.userVault) ? UserVault.fromJSON(object.userVault) : undefined };
  },

  toJSON(message: QueryGetUserVaultResponse): unknown {
    const obj: any = {};
    message.userVault !== undefined &&
      (obj.userVault = message.userVault ? UserVault.toJSON(message.userVault) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserVaultResponse>, I>>(object: I): QueryGetUserVaultResponse {
    const message = createBaseQueryGetUserVaultResponse();
    message.userVault = (object.userVault !== undefined && object.userVault !== null)
      ? UserVault.fromPartial(object.userVault)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultRequest(): QueryAllUserVaultRequest {
  return { pagination: undefined };
}

export const QueryAllUserVaultRequest = {
  encode(message: QueryAllUserVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserVaultRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserVaultRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserVaultRequest>, I>>(object: I): QueryAllUserVaultRequest {
    const message = createBaseQueryAllUserVaultRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultResponse(): QueryAllUserVaultResponse {
  return { userVault: [], pagination: undefined };
}

export const QueryAllUserVaultResponse = {
  encode(message: QueryAllUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userVault) {
      UserVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVault.push(UserVault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserVaultResponse {
    return {
      userVault: Array.isArray(object?.userVault) ? object.userVault.map((e: any) => UserVault.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserVaultResponse): unknown {
    const obj: any = {};
    if (message.userVault) {
      obj.userVault = message.userVault.map((e) => e ? UserVault.toJSON(e) : undefined);
    } else {
      obj.userVault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserVaultResponse>, I>>(object: I): QueryAllUserVaultResponse {
    const message = createBaseQueryAllUserVaultResponse();
    message.userVault = object.userVault?.map((e) => UserVault.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse>;
  /** Queries a RoadOperator by index. */
  RoadOperator(request: QueryGetRoadOperatorRequest): Promise<QueryGetRoadOperatorResponse>;
  /** Queries a list of RoadOperator items. */
  RoadOperatorAll(request: QueryAllRoadOperatorRequest): Promise<QueryAllRoadOperatorResponse>;
  /** Queries a UserVault by index. */
  UserVault(request: QueryGetUserVaultRequest): Promise<QueryGetUserVaultResponse>;
  /** Queries a list of UserVault items. */
  UserVaultAll(request: QueryAllUserVaultRequest): Promise<QueryAllUserVaultResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SystemInfo = this.SystemInfo.bind(this);
    this.RoadOperator = this.RoadOperator.bind(this);
    this.RoadOperatorAll = this.RoadOperatorAll.bind(this);
    this.UserVault = this.UserVault.bind(this);
    this.UserVaultAll = this.UserVaultAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  SystemInfo(request: QueryGetSystemInfoRequest): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "SystemInfo", data);
    return promise.then((data) => QueryGetSystemInfoResponse.decode(new _m0.Reader(data)));
  }

  RoadOperator(request: QueryGetRoadOperatorRequest): Promise<QueryGetRoadOperatorResponse> {
    const data = QueryGetRoadOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "RoadOperator", data);
    return promise.then((data) => QueryGetRoadOperatorResponse.decode(new _m0.Reader(data)));
  }

  RoadOperatorAll(request: QueryAllRoadOperatorRequest): Promise<QueryAllRoadOperatorResponse> {
    const data = QueryAllRoadOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "RoadOperatorAll", data);
    return promise.then((data) => QueryAllRoadOperatorResponse.decode(new _m0.Reader(data)));
  }

  UserVault(request: QueryGetUserVaultRequest): Promise<QueryGetUserVaultResponse> {
    const data = QueryGetUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "UserVault", data);
    return promise.then((data) => QueryGetUserVaultResponse.decode(new _m0.Reader(data)));
  }

  UserVaultAll(request: QueryAllUserVaultRequest): Promise<QueryAllUserVaultResponse> {
    const data = QueryAllUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request("b9lab.tollroad.tollroad.Query", "UserVaultAll", data);
    return promise.then((data) => QueryAllUserVaultResponse.decode(new _m0.Reader(data)));
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
