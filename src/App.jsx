import { useState } from "react";
import UserInputSection from "./components/UserInput/UserInputSection.jsx";
import ResultsTable from "./components/Results/ResultsTable.jsx";


const investmentData = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null
};


function App() {

  const [userData, setUserData] = useState(investmentData);

    function handleInputChange(event) {
        setUserData((prevData) => {
            let updatedData = {...prevData};
            for (let key in updatedData) {
                if (event.target.className === key) {
                  if (event.target.className === "duration" && Number(event.target.value) < 1) {
                    alert("DURATION must have a positive number.");
                    event.target.value = null;
                  } else {
                    updatedData[key] = Number(event.target.value);
                  }
                }
            }
            return updatedData;
        });
    }


  return (
    <>
      <UserInputSection onChange={handleInputChange}/>
      <ResultsTable updatedData={userData}/>
    </>
  )
}

export default App
