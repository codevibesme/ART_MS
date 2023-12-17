"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Menu } from "@/app/types/types";
interface DashContextProps {
  menu: Menu;
  setMenu: React.Dispatch<React.SetStateAction<Menu>>;
}
const DashContext = createContext<DashContextProps | undefined>(undefined);
const DashProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<Menu>({ id: 0, name: "Dashboard" });
  const contextValue = useMemo(() => {
    return { menu, setMenu };
  }, [menu, setMenu]);

  return (
    <DashContext.Provider value={contextValue}>{children}</DashContext.Provider>
  );
};
export const useDashContext = (): DashContextProps => {
  const context = useContext(DashContext);
  if (!context) {
    throw new Error("useDashContext must be used within a DashProvider");
  }
  return context;
};
export default DashProvider;
// "use client";
// import React, {
//   createContext,
//   useMemo,
//   useContext,
//   useReducer,
//   Dispatch,
// } from "react";
// import { DashReducer, initialState } from "./dashReducer";
// import { Menu } from "@/app/types/types";
// const DashContext = createContext<
//   | {
//       state: Menu;
//       dispatch: Dispatch<Menu>;
//     }
//   | undefined
// >(undefined);
// const DashProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(DashReducer, initialState);
//   const contextValue = useMemo(() => {
//     return { state, dispatch };
//   }, [state, dispatch]);
//   return (
//     <DashContext.Provider value={contextValue}>{children}</DashContext.Provider>
//   );
// };
// export const useDashContext = () => {
//   return useContext(DashContext);
// };
// export default DashProvider;
