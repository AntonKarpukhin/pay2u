import { OnboardingLayoutProps } from "./onboarding-layout.props.ts";
import styles from './onboarding-layout.module.css';

const OnboardingLayout = ( {children}: OnboardingLayoutProps) => {
	return (
		<div className={styles.OnboardingLayout}>
			{children}
		</div>
	)
}

export default OnboardingLayout;