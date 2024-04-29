import { useState } from "react";
import UserInputSection from "./components/UserInput/UserInputSection.jsx"
import ResultsTable from "./components/Results/ResultsTable.jsx"

const investmentData = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: ""
};


function App() {

  const [userData, setUserData] = useState(investmentData);

    function handleInputChange(event) {
        setUserData((prevData) => {
            let updatedData = {...prevData};
            console.log(updatedData);
            for (let key in updatedData) {
                if (event.target.className === key) {
                    updatedData[key] = event.target.value;
                    console.log(updatedData);
                }
            }
            console.log(updatedData);
            return updatedData;
        });
    }


  return (
    <>
      <UserInputSection onChange={handleInputChange}/>
      <ResultsTable />
    </>
  )
}

export default App
