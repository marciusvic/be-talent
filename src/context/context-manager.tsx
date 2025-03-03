import { ChildrenProps } from "../types/types";
import { EmployeesProvider } from "./employees-context";
export function ContextManager({ children }: ChildrenProps) {
  return (
    <>
      <EmployeesProvider>{children}</EmployeesProvider>
    </>
  );
}
