import { OnboardingItemProps } from "./onboarding-item.props.ts";
import styles from './onboarding-item.module.css';

const OnboardingItem = ({title, subtitle, img}: OnboardingItemProps) => {
	return (
		<div className={styles.OnboardingItem}>
			<div className={styles.wrapper}>
				<p className={ styles.title }>{ title }</p>
				<p className={ styles.subtitle }>{ subtitle }</p>
			</div>
			<img className={ styles.img } src={ img } alt='Подарки'/>
		</div>
	)
}

export default OnboardingItem;