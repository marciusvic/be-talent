import { useState } from "react";
import { Search } from "../../assets/search";
import { ChevronUp } from "../../assets/chevron-up";
import { ChevronDown } from "../../assets/chevron-down";
import { IEmployee } from "../../types/employee";
import { useEmployees } from "../../context/employees-context";
import { formatDate, formatPhoneNumber } from "../../utils";
import * as React from "react";

export default function EmployeeTable() {
  const [search, setSearch] = useState("");
  const { employees } = useEmployees();
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const filteredEmployees = employees.filter((employee: IEmployee) =>
    employee.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        search
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  const toggleRow = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((i) => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <div className="w-full !h-full p-4 sm:p-8 space-y-2 mt-1">
      <div className="w-full flex flex-col sm:flex-row sm:itens-center sm:justify-between sm:items-center space-y-6">
        <h1 className="text-black-neutral h-fit font-medium text-[20px] leading-[24.42px]">
          Funcionários
        </h1>
        <div className="relative mb-4 max-w-[600px] w-full">
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full h-12 rounded-lg border border-gray-10-neutral bg-white-neutral p-2 pr-10 shadow-sm outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 placeholder:text-gray-20-neutral"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-10-neutral" />
        </div>
      </div>
      <div className="hidden md:block border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-primary text-white-neutral">
              <th className="p-3 text-left text-base leading-[19.54px] font-medium">
                FOTO
              </th>
              <th className="p-3 text-left text-base leading-[19.54px] font-medium">
                NOME
              </th>
              <th className="p-3 text-left text-base leading-[19.54px] font-medium">
                CARGO
              </th>
              <th className="p-3 text-left text-base leading-[19.54px] font-medium">
                DATA DE ADMISSÃO
              </th>
              <th className="p-3 text-left text-base leading-[19.54px] font-medium">
                TELEFONE
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="border-t">
                <td className="p-3 text-left bg-white-neutral">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="p-3 text-left text-base leading-[19.09px] font-base bg-white-neutral max-w-10 truncate">
                  {employee.name}
                </td>
                <td className="p-3 text-left text-base leading-[19.09px] font-base bg-white-neutral">
                  {employee.job}
                </td>
                <td className="p-3 text-left text-base leading-[19.09px] font-base bg-white-neutral">
                  {formatDate(employee.admission_date)}
                </td>
                <td className="p-3 text-left text-base leading-[19.09px] font-base bg-white-neutral">
                  {formatPhoneNumber(employee.phone)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="h-12 bg-blue-primary">
              <th className="w-24 px-4 text-left text-base leading-[19.54px] font-medium text-white-neutral">
                FOTO
              </th>
              <th className="px-4 text-left text-base leading-[19.54px] font-medium text-white-neutral">
                NOME
              </th>
              <th className="w-12 px-7">
                <div className="h-2 w-2 rounded-full bg-white-neutral"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-10-neutral">
            {filteredEmployees.map((employee, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="px-4 py-3 text-base leading-[19.09px] font-base bg-white-neutral">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 max-w-10 truncate text-base leading-[19.09px] font-base bg-white-neutral">
                    {employee.name}
                  </td>
                  <td className="px-4 py-3 text-base leading-[19.09px] font-base bg-white-neutral">
                    <button
                      className="ml-auto flex items-center justify-center"
                      onClick={() => toggleRow(index)}
                    >
                      {expandedRows.includes(index) ? (
                        <ChevronUp className="h-8 w-8 text-blue-primary" />
                      ) : (
                        <ChevronDown className="h-8 w-8 text-blue-primary" />
                      )}
                    </button>
                  </td>
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan={3} className="px-4 py-3 bg-white-neutral">
                      <div className="space-y-3 h-[100px]">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-black-neutral font-medium">
                            Cargo
                          </span>
                          <span>{employee.job}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-black-neutral font-medium">
                            Data de admissão
                          </span>
                          <span>{formatDate(employee.admission_date)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-black-neutral font-medium">
                            Telefone
                          </span>
                          <span>{formatPhoneNumber(employee.phone)}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
