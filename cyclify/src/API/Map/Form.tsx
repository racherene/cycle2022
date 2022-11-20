import { useState } from 'react';

const Form = ({ setPoints }: { setPoints: Function }) => {

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
        <div className ="formBlock">
            <form id="form" onSubmit={e => setPoints(e, start, end)}>
                <input onChange={e => setStart(e.target.value)} type="text" name="start" className="input" id="start" placeholder="Choose starting point" />
                <input onChange={e => setEnd(e.target.value)} type="text" name="end" className="input" id="destination" placeholder="Choose ending point" />
                <button type="submit">Get Directions</button>
            </form>
        </div>
    );
}

export default Form;