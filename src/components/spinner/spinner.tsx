import { SpinnerProps } from "./spinner.props.ts";
import styles from './spinner.module.css';

const Spinner = ({active, children}: SpinnerProps) => {
	if (active) return <div className={styles.Spinner}>{children}</div>;
	else return <>{children}</>;
}

export default Spinner;