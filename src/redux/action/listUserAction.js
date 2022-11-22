import axios from "axios";

export const GET_USER = 'GET_USER'

function sucsessGet(params){
    return{
        type: GET_USER,
        payload: params
    }
}

export const getUser = () => {
    return async(dispatch) => {
        const result = await axios("https://6379ea2d7419b414df95e16c.mockapi.io/user")
        dispatch(sucsessGet(result.data))
    }
}