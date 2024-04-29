import Input from "./Input.jsx";
import { INPUTS_DATA } from "./INPUTS_DATA.js";


export default function UserInputSection({onChange}) {
    return (
        <form id="user-input">
            <div className="input-group">
                <Input {...INPUTS_DATA[0]} onChange={onChange}/>
                <Input {...INPUTS_DATA[1]} onChange={onChange}/>
            </div>
            <div className="input-group">
                <Input {...INPUTS_DATA[2]} onChange={onChange}/>
                <Input {...INPUTS_DATA[3]} onChange={onChange}/>
            </div>
        </form>
    )
}