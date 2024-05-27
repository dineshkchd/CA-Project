import { BOOK_SLOTS } from "./type";
import {apiCall} from "../api"

// const base_url = "https://project-ca-backend.vercel.app"

const base_url = "http://localhost:3004"



export const bookingSlots = (data)=>async dispatch =>{
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/schedule/bookSlot`,// Assuming baseUrl is defined somewhere
            data: data // Send the entire data object
        };
        console.log("config",config)
        // Make the API call
        let response = await apiCall(config, dispatch);
        console.log("response----->>>>>",response)

        if(response.status == 400){
            console.log("Errror")
        }

        // Dispatch the response to the reducer
        dispatch({
            type: BOOK_SLOTS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: BOOK_SLOTS,
            payload: error.response
        })
        console.error('Error otp user:', error);
        // Handle the error
    }
}

