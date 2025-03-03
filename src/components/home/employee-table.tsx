import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Search } from "../../assets/search";
import { ChevronUp } from "../../assets/chevron-up";
import { ChevronDown } from "../../assets/chevron-down";
import { IEmployee } from "../../types/employee";
import { useEmployees } from "../../context/employees-context";
import { formatDate, formatPhoneNumber } from "../../utils";

export default function EmployeeTable() {
  const [search, setSearch] = useState("");
  const { employees } = useEmployees();
  const filteredEmployees = employees.filter((employee: IEmployee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full !h-full p-4 sm:p-8 space-y-2">
      <div className="w-full flex flex-col sm:flex-row sm:itens-center sm:justify-between sm:items-center space-y-6">
        <h1 className="text-black-neutral h-fit font-medium text-[20px] leading-[24.42px]">
          Funcionários
        </h1>
        <div className="relative mb-4 max-w-[287px] w-full">
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
            <tr className="bg-blue-primary text-white">
              <th className="p-3 text-left">FOTO</th>
              <th className="p-3 text-left">NOME</th>
              <th className="p-3 text-left">CARGO</th>
              <th className="p-3 text-left">DATA DE ADMISSÃO</th>
              <th className="p-3 text-left">TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="border-t">
                <td className="p-3">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.job}</td>
                <td className="p-3">{formatDate(employee.admission_date)}</td>
                <td className="p-3">{formatPhoneNumber(employee.phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="h-12 bg-blue-primary">
              <th className="w-24 px-4 text-left text-sm font-medium text-white">
                FOTO
              </th>
              <th className="px-4 text-left text-sm font-medium text-white">
                NOME
              </th>
              <th className="w-12 px-7">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEmployees.map((employee, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-3">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 text-sm">{employee.name}</td>
                <td className="px-4 py-3">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="ml-auto flex items-center justify-center">
                          {open ? (
                            <ChevronUp className="h-8 w-8 text-blue-primary" />
                          ) : (
                            <ChevronDown className="h-8 w-8 text-blue-primary" />
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-3 bg-white px-4 py-3 shadow-sm">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Cargo</span>
                              <span>{employee.job}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">
                                Data de admissão
                              </span>
                              <span>{formatDate(employee.admission_date)}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Telefone</span>
                              <span>{formatPhoneNumber(employee.phone)}</span>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
