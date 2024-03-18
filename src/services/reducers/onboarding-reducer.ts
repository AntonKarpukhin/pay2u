import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  { onboardingData } from '../../utils/onboarding-data.ts';

export interface OnboardingState {
	data: typeof onboardingData,
	position: number;
}

const initialState: OnboardingState = {
	data: onboardingData,
	position: 0,
}

const onboardingReducer = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		changeSlider: (state: OnboardingState, action: PayloadAction<number>) => {

			state.position = action.payload < 4 ? action.payload : 0;
		}
	}
})

export default onboardingReducer.reducer;
export const onboardingActions = onboardingReducer.actions;