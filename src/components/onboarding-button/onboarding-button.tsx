import { OnboardingButtonProps } from "./onboarding-button.props.ts";
import styles from './onboarding-button.module.css';

const OnboardingButton = ({text, onChangeSlide, position}: OnboardingButtonProps) => {
	return (
		<button className={styles.OnboardingButton} type='button' onClick={() => onChangeSlide(position + 1)}>{text}</button>
	)
}

export default OnboardingButton;