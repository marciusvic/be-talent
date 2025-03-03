import EmployeeTable from "../components/home/employee-table";
import { Header } from "../components/home/header";

export function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-00-neutral items-center">
      <Header />
      <EmployeeTable />
    </div>
  );
}
