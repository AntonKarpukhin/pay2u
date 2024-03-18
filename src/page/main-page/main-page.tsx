import { Link } from "react-router-dom";


const MainPage = () => {
	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', justifyContent: 'center'}}>
			<h1>Привет я главная страница :)</h1>
			<img style={{width: 280, height: 200}} src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710720000&semt=ais" alt="Собачкен"/>
			<Link style={{color: 'darkblue', fontSize: '20px'}} to={'/onboarding'}>Нажими чтобы перейти в Онбординг</Link>
		</div>
	)
}

export default MainPage;