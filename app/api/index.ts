import { BASE_URL } from "../constants";
import { Email, Tenant } from "../types/types";

export const getDashEmails = async () => {
  const res = await fetch(`${BASE_URL}emails`);
  let emails: Email[] = await res.json();
  if (emails.length >= 5) emails = emails.slice(0, 5);
  emails = emails.map((item) => {
    let timestamp: string = item.timestamp
      ? Intl.DateTimeFormat("en-US").format(Date.parse(item.timestamp))
      : "NA";
    return {
      ...item,
      body: item.body?.slice(0, 100) + "...",
      timestamp,
    };
  });
  return emails;
};
export const getDashTenants = async () => {
  const res = await fetch(`${BASE_URL}reports`);
  let tenants: Tenant[] = await res.json();
  if (tenants.length > 5) tenants = tenants.slice(0, 5);
  tenants = tenants.map((item) => {
    let transaction_due_date = item.transaction_due_date
      ? Intl.DateTimeFormat("en-US").format(
          Date.parse(item.transaction_due_date)
        )
      : "NA";
    return { ...item, transaction_due_date };
  });
  return tenants;
};
