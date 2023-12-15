import DashContainer from "../components/dashboard/common/container";

export default function layout({ children }: { children: React.ReactNode }) {
  return <DashContainer>{children}</DashContainer>;
}
