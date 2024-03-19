import OnboardingPage from "../onboarding-page/onboarding-page.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../main-page/main-page.tsx";
import styles from './app.module.css';
import cn from "classnames";


function App() {

	const location = useLocation();
	const onboarding = location.pathname.includes('onboarding');

	return (
		<main className={cn(styles.main, {
			[styles.mainOnboarding]: onboarding
		})}>
			<Routes>
				<Route path={'/'} element={<MainPage/>}/>
				<Route path={'/onboarding'} element={<OnboardingPage/>}/>
			</Routes>
		</main>
	)
}

export default App
