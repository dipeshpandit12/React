import './BookingPage.css'
import BookingForm from "./BookingForm";
import pages from '../../../utils/pages';

import {fetchAPI,submitAPI} from '../../../utils/fakeAPI'
import {useReducer} from 'react';
import { useNavigate } from "react-router-dom";

const updateTimes=(availableTimes,date)=>{
    const response=fetchAPI(new Date(date));
    return (response.length !==0) ? response:availableTimes;
}

const initializeTimes=(initialAvailableTimes)=>
    [...initialAvailableTimes, ...fetchAPI(new Date())];


export default function BookingPage(){
    const [availableTimes,dispatchOnDateChange]=useReducer(updateTimes,[],initializeTimes);
    const navigate=useNavigate();

    const submitData=formData=>{
        const response=submitAPI(formData);
        if(response) navigate(pages.get('confirmedBooking').path);
    };

    return(
        <div className="bookings">
            <h2>Table Reservation</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData}
            />
        </div>
    )
}