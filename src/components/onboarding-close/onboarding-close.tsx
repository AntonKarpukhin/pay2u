import styles from './onboarding-close.module.css';
import { OnboardingCloseProps } from "./onboarding-close.props.ts";

const OnboardingClose = ({ onCloseOnboarding }: OnboardingCloseProps) => {
	return (
		<button onClick={onCloseOnboarding} className={styles.OnboardingClose}></button>
	)
}

export default OnboardingClose;
