

const Form = () =>{

    return (
        <div className ="formBlock">
        <form id="form">
            <input type="text" name="start" className="input" id="start" placeholder="Choose starting point" />
            <input type="text" name="end" className="input" id="destination" placeholder="Choose ending point" />
            <button type="submit">Get Directions</button>
        </form>

    </div>



    )

}







export default Form;