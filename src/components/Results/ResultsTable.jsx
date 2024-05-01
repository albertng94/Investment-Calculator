import { calculateInvestmentResults, formatter } from "../../util/investment.js";

function buildResultsArray(userData, investmentResults) {

    let resultsTable = [];
    let investedCapital;
    let totalInterest;

    for (let key in investmentResults) {
    
        if (key > 0) {
            totalInterest += investmentResults[key].interest;
            investedCapital += investmentResults[key].annualInvestment;
          } else {
            totalInterest = investmentResults[key].interest;
            investedCapital = userData.initialInvestment + userData.annualInvestment;
          }

        let resultsRow = [
            investmentResults[key].year,
            investmentResults[key].valueEndOfYear,
            investmentResults[key].interest,
            totalInterest,
            investedCapital
        ];
        
        resultsTable.push(resultsRow);
    
    }

    return resultsTable;

}


export default function ResultsTable({ updatedData }) {

    let investmentResults = calculateInvestmentResults(updatedData);
    let finalResultsArray = buildResultsArray(updatedData, investmentResults);




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
        </table>
    )
}