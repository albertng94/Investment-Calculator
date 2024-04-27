import Input from "./Input.jsx";
import { INPUTS_DATA } from "./INPUTS_DATA.js";

export default function UserInputSection() {
    return (
        <form id="user-input">
            <div className="input-group">
                <Input {...INPUTS_DATA[0]} />
                <Input {...INPUTS_DATA[1]} />
            </div>
            <div className="input-group">
                <Input {...INPUTS_DATA[2]} />
                <Input {...INPUTS_DATA[3]} />
            </div>
        </form>
    )
}