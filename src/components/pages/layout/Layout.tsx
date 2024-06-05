import { Sidebar } from "../../organisms";
import Dashboard from "./Dashboard";

export default function Layout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
