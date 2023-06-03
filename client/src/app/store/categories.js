import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../services/categories.service";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        categoriesRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesReceved, categoriesRequestFiled } = actions;

export const loadCategoriesList = () => async (dispatch) => {
        dispatch(categoriesRequested());
        try {
            const { content } = await categoriesService.fetchAll();
            dispatch(categoriesReceved(content));
        } catch (error) {
            dispatch(categoriesRequestFiled(error.message));
        }
};

export default categoriesReducer;
