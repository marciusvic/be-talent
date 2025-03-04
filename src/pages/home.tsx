import EmployeeTable from "../components/home/employee-table";
import { Header } from "../components/home/header";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100vh] h-full bg-gray-00-neutral items-center">
      <Header />
      <EmployeeTable />
    </div>
  );
}
