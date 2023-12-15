"use client";
import { store } from "../libs/store";
import { Provider } from "react-redux";

const DashProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default DashProvider;
