// generated by muta-codegen, please do not edit manually
// @ts-nocheck
/* eslint-disable */

import { Address, Hash, U64, Null } from '@mutajs/types';
import { createBindingClass, query, mutation } from "@mutajs/service";
export type Maybe<T> = T | null;

export const AssetService = createBindingClass(
  'asset',
  {
    get_asset: query<GetAssetPayload, Asset>(),
    get_balance: query<GetBalancePayload, GetBalanceResponse>(),
    get_allowance: query<GetAllowancePayload, GetAllowanceResponse>(),
  },
  {
    create_asset: mutation<CreateAssetPayload, Asset>(),
    transfer: mutation<TransferPayload, null>(),
    approve: mutation<ApprovePayload, null>(),
    transfer_from: mutation<TransferFromPayload, null>(),
  }
);

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: Address;
  Hash: Hash;
  U64: U64;
  Null: Null;
};

export type Mutation = {
  create_asset: Asset;
  transfer?: Maybe<Scalars['Null']>;
  approve?: Maybe<Scalars['Null']>;
  transfer_from?: Maybe<Scalars['Null']>;
};


export type MutationCreate_AssetArgs = {
  payload: CreateAssetPayload;
};


export type MutationTransferArgs = {
  payload: TransferPayload;
};


export type MutationApproveArgs = {
  payload: ApprovePayload;
};


export type MutationTransfer_FromArgs = {
  payload: TransferFromPayload;
};

export type Query = {
  get_asset: Asset;
  get_balance: GetBalanceResponse;
  get_allowance: GetAllowanceResponse;
};


export type QueryGet_AssetArgs = {
  payload: GetAssetPayload;
};


export type QueryGet_BalanceArgs = {
  payload: GetBalancePayload;
};


export type QueryGet_AllowanceArgs = {
  payload: GetAllowancePayload;
};


export type ApprovePayload = {
  asset_id: Scalars['Hash'];
  to: Scalars['Address'];
  value: Scalars['U64'];
};

export type Asset = {
  id: Scalars['Hash'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  supply: Scalars['U64'];
  issuer: Scalars['Address'];
};

export type CreateAssetPayload = {
  name: Scalars['String'];
  symbol: Scalars['String'];
  supply: Scalars['U64'];
};

export type GetAllowancePayload = {
  asset_id: Scalars['Hash'];
  grantor: Scalars['Address'];
  grantee: Scalars['Address'];
};

export type GetAllowanceResponse = {
  asset_id: Scalars['Hash'];
  grantor: Scalars['Address'];
  grantee: Scalars['Address'];
  value: Scalars['U64'];
};

export type GetAssetPayload = {
  id: Scalars['Hash'];
};

export type GetBalancePayload = {
  asset_id: Scalars['Hash'];
  user: Scalars['Address'];
};

export type GetBalanceResponse = {
  asset_id: Scalars['Hash'];
  user: Scalars['Address'];
  balance: Scalars['U64'];
};


export type TransferFromPayload = {
  asset_id: Scalars['Hash'];
  sender: Scalars['Address'];
  recipient: Scalars['Address'];
  value: Scalars['U64'];
};

export type TransferPayload = {
  asset_id: Scalars['Hash'];
  to: Scalars['Address'];
  value: Scalars['U64'];
};

