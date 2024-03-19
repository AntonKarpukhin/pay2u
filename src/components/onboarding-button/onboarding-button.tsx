import { OnboardingButtonProps } from "./onboarding-button.props.ts";
import styles from './onboarding-button.module.css';
import cn from "classnames";

const OnboardingButton = ({text, onChangeSlide, position, type}: OnboardingButtonProps) => {

	switch ( type ) {
		case "plus":
			return <button className={ cn(styles.OnboardingButton, styles.OnboardingButtonPlus) } type='button' onClick={ () => onChangeSlide( position + 1 ) }>{ text }</button>
		case " minus":
			return <button className={ cn(styles.OnboardingButton, styles.OnboardingButtonMinus) } type='button' onClick={ () => onChangeSlide( position - 1 ) }>{ text }</button>
	}

}

export default OnboardingButton;