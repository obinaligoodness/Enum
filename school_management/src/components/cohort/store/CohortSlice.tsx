import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: CohortObject[];
  
}

interface CohortObject {
    cohort: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    cohortAvatar: string
}

const initialState: IAuthState = {
  authState: [],
 
};

export const cohortSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addCohort: (state, action: PayloadAction<any>) => {
        state.authState.push(action.payload); 
        console.log(action.payload)
    }
  },
});

export const { addCohort } = cohortSlice.actions;
export const authReducer = cohortSlice.reducer;
