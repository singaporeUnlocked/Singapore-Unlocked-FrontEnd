import axios from '../../../axios'

export const GET_CLIENT_LIST = 'GET_CLIENT_LIST'

export const getClientList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-client-list').then((res) => {
        dispatch({
            type: GET_CLIENT_LIST,
            payload: res.data,
        })
    })
}