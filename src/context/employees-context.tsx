import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProps } from "../types/types";
import { IEmployee } from "../types/employee";
import api from "../services/api";

type EmployeesContextType = {
  employees: IEmployee[];
};

const EmployeesContext = createContext<EmployeesContextType>({
  employees: [],
});

export const EmployeesProvider = ({ children }: ChildrenProps) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    api.get("/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error("useEmployees must be used within a EmployeesProvider");
  }
  return context;
};
