import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
const Results = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const initialInvestments =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((eachYearData) => {
          const totalInterest =
            eachYearData.valueEndOfYear -
            eachYearData.annualInvestment * eachYearData.year -
            initialInvestments;

          const totalAmountInvested =
            eachYearData.valueEndOfYear - totalInterest;
          return (
            <tr key={eachYearData.year}>
              <td>{eachYearData.year}</td>
              <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
              <td>{formatter.format(eachYearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
