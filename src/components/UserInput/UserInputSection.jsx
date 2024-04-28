import { useState } from "react";
import Input from "./Input.jsx";
import { INPUTS_DATA } from "./INPUTS_DATA.js";

const investmentData = {
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: ""
};

export default function UserInputSection() {

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
        <form id="user-input">
            <div className="input-group">
                <Input {...INPUTS_DATA[0]} onChange={handleInputChange}/>
                <Input {...INPUTS_DATA[1]} onChange={handleInputChange}/>
            </div>
            <div className="input-group">
                <Input {...INPUTS_DATA[2]} onChange={handleInputChange}/>
                <Input {...INPUTS_DATA[3]} onChange={handleInputChange}/>
            </div>
        </form>
    )
}