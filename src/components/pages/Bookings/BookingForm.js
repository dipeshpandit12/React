import { useState } from "react";
import FormField from "./FormField";

const BookingForm=({
    availableTimes,
    dispatchOnDateChange,
    submitData
})=>{

    const minimumDate=new Date().toISOString().split('T')[0];
    const defaultTime=availableTimes[0];
    const minimumNumberOfGuests=1;
    const maximumNumberOfGuests=10;
    const occasions=['Birthday','Anniversary'];
    const invalidDateErrorMessage='Please choose a valid date';
    const invalidTimeErrorMessage='Please choose a valid time';
    const invalidOccasionErrorMessage="Please choose a valid occasion";
    const invalidNumberOfGuestsErrorMessage='Please enter a number between 1 and 10';

    const [date,setDate]=useState(minimumDate);
    const [time,setTime]=useState(defaultTime);
    const [guest,setGuest]=useState(minimumNumberOfGuests);
    const [occasion,setOccasion]=useState(occasions[0]);

    const isDateValid=()=>date !=="";
    const isTimeValid=()=>time!=="";
    const isNumberOfGuestsValid=()=>guest!=='';
    const isOccasionValid=()=>occasion!=='';

    const areAllFieldsValid=()=>
    isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isOccasionValid();

    const handleSubmit=(e)=>{
        e.preventDefault();
        submitData({date,time,guest,occasion,});
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormField
                label="Date"
                htmlFor='booking-date'
                hasError={!isDateValid}
                errorMessage={invalidDateErrorMessage}
            >
                <input 
                    value={date}
                    type="date"
                    id="booking-date"
                    name='booking-date'
                    min={minimumDate}
                    required={true}
                    onChange={(e)=>{setDate(e.target.value);dispatchOnDateChange(e.target.value)}}
                />
            </FormField>
            <FormField 
                label="Time" 
                htmlFor="booking-time" 
                hasError={!isTimeValid()} 
                errorMessage={invalidTimeErrorMessage}
            >
                <select 
                    id="booking-time" 
                    name="booking-time" 
                    value={time} 
                    required={true} 
                    onChange={(e)=>setTime(e.target.value)}
                >
                    {availableTimes.map(times => 
                        <option data-testid="booking-time-option" key={times}>
                        {times}
                        </option>
                    )}
                </select>
            </FormField>
            <FormField 
                label="Number of guests" 
                htmlFor="booking-number-guests" 
                hasError={!isNumberOfGuestsValid()} 
                errorMessage={invalidNumberOfGuestsErrorMessage}
            >
                <input 
                type="number" 
                id="booking-number-guests" 
                name="booking-number-guests" 
                value={guest} 
                min={minimumNumberOfGuests} 
                max={maximumNumberOfGuests} 
                required={true} 
                onChange={e => setGuest(e.target.value)}
                />
            </FormField>
            <FormField 
                label="Occasion" 
                htmlFor="booking-occasion" 
                hasError={!isOccasionValid()} 
                errorMessage={invalidOccasionErrorMessage}
            >
                <select 
                id="booking-occasion" 
                name="booking-occasion" 
                value={occasion} 
                required={true} 
                onChange={e => setOccasion(e.target.value)}
                >
                {occasions.map(occasionx => 
                    <option data-testid="booking-occasion-option" key={occasionx}>
                    {occasion}
                    </option>
                )}
                </select>
            </FormField>
            <button className="button-primary" type="submit" disabled={!areAllFieldsValid}>Submit</button>
        </form>
    )
}

export default BookingForm;