export default function UserInput() {
    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial investment">initial investment</label>
                    <input type="text" name="initial investment" id="initial investment"/>
                </p>
                <p>
                    <label htmlFor="annual investment">annual investment</label>
                    <input type="text" name="annual investment" id="annual investment"/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected return">expected return</label>
                    <input type="text" name="expected return" id="expected return"/>
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input type="text" name="duration" id="duration"/>
                </p>
            </div>
        </form>
    )
}