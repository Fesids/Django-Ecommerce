import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { categoryApiURL } from "../CONTEXT/CategoryTypes.ts"
import { Action } from "history"
import { RootState } from "../CONTEXT/store.js"

export interface ICategory{

    id:number,
    name: string,
    available: boolean

}

/*interface CategoryState {
    categories: ICategory[]
    loading: boolean
    error: string | null
}

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null
}

export const fetchCategories = createAsyncThunk("categories/fetch", async () =>{

    const response = await axios.get(categoryApiURL);
    if(!response.data){
        throw new Error('Failed to fetch categories')

    }
    const data = response.data;
    return data;

})

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, state =>{
                state.loading = true,
                state.error = null
            })
            .addCase(fetchCategories.fulfilled, (state, action) =>{
                state.loading = false
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error.message || 'Something went wrong'
            })


    },
})

export const selectCategories = (state: RootState) => state.categories.categories
export const selectLoading = (state: RootState) => state.categories.loading
export const selectError = (state: RootState) => state.categories.error
*/























/*type CategoryState = {
    categories: ICategory[]
}

type CategoryAction = {
    type: string,
    category: ICategory

}

type DispatchType = (args: CategoryAction) => CategoryAction*/