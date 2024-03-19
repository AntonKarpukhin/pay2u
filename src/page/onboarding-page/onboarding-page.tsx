import OnboardingSidebar from "../../components/onboarding-sidebar/onboarding-sidebar.tsx";
import OnboardingLayout from "../../components/onboarding-layout/onboarding-layout.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../../services/store/store.props.ts";
import { onboardingActions } from "../../services/reducers/onboarding-reducer.ts";
import OnboardingClose from "../../components/onboarding-close/onboarding-close.tsx";
import OnboardingItem from "../../components/onboarding-item/onboarding-item.tsx";
import OnboardingButton from "../../components/onboarding-button/onboarding-button.tsx";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
	const select = useSelector((state: StoreState) => state.onboarding);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const onCloseOnboarding = () => {
		navigate('/');
	}

	const onChangeSlide = (count: number) => {
		if (count === select.position) return;
		if (count === 4) onCloseOnboarding();
		dispatch(onboardingActions.changeSlider(count));
	}


	return (
		<OnboardingLayout>
			<OnboardingSidebar counter={select.data.length} position={select.position} onChangeSlide={onChangeSlide}/>
			<OnboardingClose onCloseOnboarding={onCloseOnboarding}/>
			<OnboardingItem img={select.data[select.position].img} subtitle={select.data[select.position].subtitle} title={select.data[select.position].title}/>
			<OnboardingButton text={select.data[select.position].button} onChangeSlide={onChangeSlide} position={select.position} type={'plus'}/>
			{select.position > 0 ? <OnboardingButton text={'Назад'} onChangeSlide={onChangeSlide} position={select.position} type={' minus'}/> : null}
		</OnboardingLayout>
	)
}

export default OnboardingPage;