import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "../reducers/onboarding-reducer.ts";


const store = configureStore({
	reducer: {
		onboarding: onboardingReducer,
	}
})

export default store;