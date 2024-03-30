import { useState } from "react";

function BookingForm(){
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guest,setGuest]=useState("");
    const [occasion,setOccasion]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`The form is submitted and we have the following details
        ${date} ${time} ${guest} ${occasion}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Choose date
                <input value={date} type="date" onChange={(e)=>setDate(e.target.value)}/>
            </label>
            <label>
                Select Time
                <select value={time} onChange={(e)=>setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                </select>
            </label>
            <label>
                Number of guests
                <input type="number" placeholder="1" min="1" max="10" onChange={(e)=>setGuest(e.target.value)} value={guest}></input>
            </label>
            <label>
                Occasion
                <select onChange={(e)=>setOccasion(e.target.value)} value={occasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </label>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default BookingForm;