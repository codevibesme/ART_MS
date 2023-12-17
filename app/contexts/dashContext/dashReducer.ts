import { Menu } from "@/app/types/types";

export const initialState: Menu = {
  id: 0,
  name: "Dashboard",
};

export const DashReducer = (state: Menu, action: Menu): Menu => {
  return action;
};
