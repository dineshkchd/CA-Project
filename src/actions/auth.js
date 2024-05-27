import { 
    REGISTER_RESPONSE,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    VERIFY_OTP,
} from "./type";

import { apiCall } from "../api";
import { baseUrl } from "../constants/const";


const base_url = "https://project-ca-backend.vercel.app"

const token = localStorage.getItem("check_token")


// export const registerUser = (data) => async (dispatch) => {
//     try {
//         // Configure the request
//         let config = {
//             method: 'POST',
//             url: `${baseUrl}/customer/customer_register`, // Assuming baseUrl is defined somewhere
//             headers: {}, // Set content type to JSON
//             data: data // Send the entire data object
//         };
//         // Make the API call
//         let response = await apiCall(config, dispatch);

//         if(response.status == 400){
//             console.log("Errror")
//         }

//         // Dispatch the response to the reducer
//         dispatch({
//             type: REGISTER_RESPONSE,
//             payload: response
//         });
//     } catch (error) {
//         dispatch({
//             type: REGISTER_RESPONSE,
//             payload: error.response
//         })
//         console.error('Error registering user:', error.response);
//         // Handle the error
//     }
// };


export const registerUser = (data) => async (dispatch) => {
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/customer/customer_register`, // Assuming baseUrl is defined somewhere
            data:data // Send the entire data object as a JSON string
        };

        console.log("config",config)

        // Make the API call
        let response = await apiCall(config, dispatch);
        console.log("response",response);

        if(response.status === 400){
            console.log("Error");
        }

        // Dispatch the response to the reducer
        dispatch({
            type: REGISTER_RESPONSE,
            payload: response.data // Ensure you send response data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_RESPONSE,
            payload: error.response ? error.response.data : 'An error occurred'
        });
        console.error('Error registering user:', error.response);
    }
};

// export const registerUser = (data) => async (dispatch) => {
//     try {
//       // Configure the request
//       let config = {
//         method: 'POST',
//         url: `${baseUrl}/customer/customer_register`, // Assuming baseUrl is defined somewhere
//         headers: {
//           'Content-Type': 'application/json', // Set content type to JSON
//         },
//         data: JSON.stringify(data) // Send the entire data object as a JSON string
//       };
  
//       // Make the API call
//       let response = await apiCall(config, dispatch);
//       console.log("Api Call",response)
  
//       // Dispatch the response to the reducer
//       dispatch({
//         type: REGISTER_RESPONSE,
//         payload: response.data // Ensure you send response data
//       });
//     } catch (error) {
//       dispatch({
//         type: REGISTER_RESPONSE,
//         payload: error.response ? error.response.data : 'An error occurred'
//       });
//       console.error('Error registering user:', error);
//     }
//   };









export const loginAction =(data)=> async dispatch =>{
    let config ={
        method: 'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }

    let response = await apiCall(config,dispatch)
    if(response.data.status){
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })
    } else{
        dispatch({
            type: LOGIN_FAILED,
            payload: response
        })
    }
}





export const verifyOtp = (data)=>async dispatch =>{
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/customer/verifyOTp`, // Assuming baseUrl is defined somewhere
            data: data // Send the entire data object
        };
        // Make the API call
        let response = await apiCall(config, dispatch);
        console.log("response----->>>>>",response)

        if(response.status == 400){
            console.log("Errror")
        }

        // Dispatch the response to the reducer
        dispatch({
            type: VERIFY_OTP,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: VERIFY_OTP,
            payload: error.response
        })
        console.error('Error otp user:', error);
        // Handle the error
    }
}

