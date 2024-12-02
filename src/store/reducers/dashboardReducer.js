import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import { api_url } from '../../utils/index'
import axios from 'axios'

export const get_dashboard_index_data = createAsyncThunk(
    'dashboard/get_dashboard_index_data',
    async (userId, {
        rejectWithValue,
        fulfillWithValue, getState
    }) => {
        try {
            const { token } = getState().auth
            const config = {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }
            const {
                data
            } = await axios.get(`${api_url}/home/customer/gat-dashboard-data/${userId}`, config)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
            console.log(error.response.data)
        }
    }
)

export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState: {
        recentOrders: [],
        errorMessage: '',
        successMessage: '',
        totalOrder: 0,
        pendingOrder: 0,
        cancelledOrder: 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [get_dashboard_index_data.fulfilled]: (state, { payload }) => {
            state.totalOrder = payload.totalOrder
            state.pendingOrder = payload.pendingOrder
            state.cancelledOrder = payload.cancelledOrder
            state.recentOrders = payload.recentOrders
        }
    }
})

export const {
    messageClear
} = dashboardReducer.actions
export default dashboardReducer.reducer