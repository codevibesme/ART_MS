import DashContainer from "../components/dashboard/common/container";
import DashProvider from "../contexts/dashContext/DashContext";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashProvider>
      <DashContainer>{children}</DashContainer>
    </DashProvider>
  );
}
