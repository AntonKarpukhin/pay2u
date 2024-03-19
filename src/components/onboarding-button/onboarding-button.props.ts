
export interface OnboardingButtonProps {
	text: string;
	onChangeSlide: (count: number) => void;
	position: number;
	type: 'plus' | ' minus';
}