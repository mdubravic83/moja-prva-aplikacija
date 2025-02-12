import React, { useState } from "react";
import Papa from "papaparse";

const EmailValidator = () => {
  const [emails, setEmails] = useState([]);
  const [results, setResults] = useState([]);

  // Funkcija za učitavanje CSV / TXT datoteke
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        const extractedEmails = result.data.flat().filter(email => email.includes("@"));
        setEmails(extractedEmails);
      },
    });
  };

  // API poziv za provjeru emaila
  const validateEmails = async () => {
    const resultsArray = await Promise.all(
      emails.map(async (email) => {
        try {
          const response = await fetch(`https://api.eva.pingutil.com/email?email=${email}`);
          const data = await response.json();
          return { email, valid: data.status === "success" ? "✅" : "❌" };
        } catch (error) {
          return { email, valid: "Error" };
        }
      })
    );
    setResults(resultsArray);
  };

  // Preuzimanje rezultata u CSV formatu
  const downloadResults = () => {
    const csv = Papa.unparse(results);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email_validation_results.csv";
    a.click();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Email Validator</h2>
      
      <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="mb-4" />
      
      <button 
        onClick={validateEmails} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Provjeri emailove
      </button>

      {results.length > 0 && (
        <>
          <table className="mt-4 w-full border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Valid</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{res.email}</td>
                  <td className="border px-4 py-2">{res.valid}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button 
            onClick={downloadResults} 
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Preuzmi CSV
          </button>
        </>
      )}
    </div>
  );
};

export default EmailValidator;
