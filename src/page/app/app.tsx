
import styles from './app.module.css';
import OnboardingPage from "../onboarding-page/onboarding-page.tsx";
import { Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page.tsx";

function App() {

  return (
    <main className={styles.main}>
		<Routes>
			<Route path={'/'} element={<MainPage/>}/>
			<Route path={'/onboarding'} element={<OnboardingPage/>}/>
		</Routes>
    </main>
  )
}

export default App
