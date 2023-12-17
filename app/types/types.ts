export interface Email {
  id?: number;
  owner_id?: string;
  tenant_id?: string;
  tenant_email?: string;
  owner_email?: string;
  subject?: string;
  body?: string;
  timestamp?: string;
}
export interface Tenant {
  id?: number;
  owner_name?: string;
  tenant_name?: string;
  tenant_ref?: string;
  property_desc?: string;
  transaction_nett?: string;
  transaction_due_date?: string;
}
export type User = {
  _id?: string;
  name?: string;
  email?: string;
  username?: string;
  photo?: string;
};
export type Menu = {
  name: string;
  id: number;
};
