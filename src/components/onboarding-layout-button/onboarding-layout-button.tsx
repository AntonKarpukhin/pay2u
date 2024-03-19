import { OnboardingLayoutButtonProps } from "./onboarding-layout-button.props.ts";
import styles from './onboarding-layout-button.module.css';

const OnboardingLayoutButton = ( {children}: OnboardingLayoutButtonProps) => {


	return (
		<div className={styles.OnboardingLayoutButton}>
			<div className={styles.test}>
				{children}
				{children && Array.isArray(children) && !children[1] && <div className={styles.test2}></div>}
			</div>
		</div>
	)
}

export default OnboardingLayoutButton;