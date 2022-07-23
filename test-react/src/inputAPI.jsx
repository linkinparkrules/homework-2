import { useState } from "react"

const InputShortener = () => {
    const [value, setValue] = useState("");

    const handleClick = async () => {
        const response = await fetch('https://api.shrtco.de/v2/');
        const data = await response.json();
        console.log(data);
        setValue(data.result);
    }

    return (
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>
            <div>
                <input
                    type="text"
                    placeholder="Paste a link to shorten it"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleClick}>shorten</button>
                <div>{value.short_link}</div>
            </div>
            
        </div>
    )
}

export default InputShortener