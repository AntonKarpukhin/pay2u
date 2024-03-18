import { OnboardingSidebarProps } from "./onboarding-sidebar.props.ts";
import cn from 'classnames';
import styles from './onboarding-sidebar.module.css';


const OnboardingSidebar = ({position, counter, onChangeSlide}: OnboardingSidebarProps) => {

	const sidebars = Array.from({ length: counter }, (_, index) => (
		<button className={cn(styles.sidebar, {
			[styles.sidebarActive]: position === index ,
			[styles.sidebarView]: position >= index
		})} key={index} type='button' onClick={() => onChangeSlide(index)}></button>
	));

	return (
		<div className={styles.OnboardingSidebar}>
			{sidebars}
		</div>
	)
}

export default OnboardingSidebar;