import { calculateInvestmentResults, formatter } from "../../util/investment.js";

function buildResultsArray(userData, investmentResults) {

    let finalResultsArray = [];
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
        
        finalResultsArray.push(resultsRow);
    
    }

    return finalResultsArray;

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
            <tbody>
                {finalResultsArray.map((resultRow, rowIndex) => (
                    <tr key={rowIndex}>
                        {resultRow.map((resultValue, valueIndex) => (
                            <td key={valueIndex}>
                                {valueIndex === 0 && resultValue}
                                {valueIndex !== 0 && formatter.format(resultValue)}
                             </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}