import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PaginationState {
    page: number;
    rowsPerPage: number;
}

const initialState: PaginationState = {
    page: 1,
    rowsPerPage: 10,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPaginationPage: (state, action: PayloadAction<number>) => {
            return { ...state, page: action.payload };
        },
        setPaginationRowsPerPage: (state, action: PayloadAction<number>) => {
            return { ...state, rowsPerPage: action.payload };
        },
    },
});

export const { setPaginationPage, setPaginationRowsPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
