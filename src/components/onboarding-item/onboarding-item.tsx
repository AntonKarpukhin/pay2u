import { OnboardingItemProps } from "./onboarding-item.props.ts";
import styles from './onboarding-item.module.css';

const OnboardingItem = ({title, subtitle, img}: OnboardingItemProps) => {

	const title1 = title.includes('Управление подписками') ? title.slice(0, 23) : title;
	const title2 = title.includes('Управление подписками') ? title.slice(23) : null;

	return (
		<div className={styles.OnboardingItem}>
			<div className={styles.wrapper}>
				<p className={ styles.title}>{ title1 } { title1 ? <br/> : null } <span>{title2 ? title2 : null}</span></p>
				<p className={ styles.subtitle }>{ subtitle }</p>
			</div>
			<img className={ styles.img } src={ img } alt='Подарки'/>
		</div>
	)
}

export default OnboardingItem;