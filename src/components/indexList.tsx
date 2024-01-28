// InvoiceList.tsx
import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { Database } from "../database.types";

type Invoice = Database["public"]["Tables"]["invoices"]["Row"];

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(
    null
  );

  const [lastUpdated, setLastUpdated] = useState(
    new Date().toLocaleTimeString()
  );

  const fetchInvoices = async () => {
    const { data, error } = await supabase.from("invoices").select("*");

    if (error) console.error("Error fetching invoices", error);
    else setInvoices(data || []);
  };

  useEffect(() => {
    fetchInvoices();
    const interval = setInterval(fetchInvoices, 30000); // Polling every 15 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, [invoices]);

  const toggleInvoice = (invoiceId: string) => {
    setSelectedInvoiceId(selectedInvoiceId === invoiceId ? null : invoiceId);
  };

  const formatCurrency = (amount: number | null) => {
    return amount ? `$${amount.toFixed(2)}` : "N/A";
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full max-w-5xl">
        {/* Width control here */}
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex flex-row justify-end w-full max-w-5xl pb-4">
            <h4 className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </h4>
          </div>{" "}
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <React.Fragment key={invoice.Id}>
                    <tr
                      onClick={() => toggleInvoice(invoice.Id)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.Id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {(invoice.CustomerRef as { [key: string]: any })[
                          "name"
                        ] || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(invoice.Balance)}
                      </td>
                    </tr>
                    {selectedInvoiceId === invoice.Id && (
                      <tr>
                        <td colSpan={3} className="px-6 py-4">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-bold">
                              Invoice Details
                            </h3>
                            <div className="mt-2">
                              <pre className="whitespace-pre-wrap">
                                {JSON.stringify(invoice, null, 2)}
                              </pre>
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
          <div className="flex flex-row justify-end w-full max-w-5xl pt-4">
            <h4 className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
