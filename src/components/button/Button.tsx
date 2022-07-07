import React, { ReactNode } from 'react';
import { theme } from '../../configs/theme.config';
import { getFontSize } from '../../helpers/styles';
import { Size } from '../../types/types';
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonColor =
	| 'inherit'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'info'
	| 'warning';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

interface IButtonProps {
	color?: ButtonColor;
	size?: Size;
	variant?: ButtonVariant;
	shape?: ButtonShape;
	disabled?: boolean;
	children?: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
	color = 'primary',
	size = 'medium',
	variant = 'contained',
	shape = 'default',
	disabled,
	onClick,
	children,
}: IButtonProps) {
	const palette = disabled
		? theme.palette.default
		: color === 'primary'
		? theme.palette.primary
		: color === 'secondary'
		? theme.palette.secondary
		: color === 'success'
		? theme.palette.success
		: color === 'error'
		? theme.palette.error
		: color === 'info'
		? theme.palette.info
		: theme.palette.warning;

	const baseColor =
		variant === 'outlined' || variant === 'text'
			? palette.main
			: palette.contrastText;

	const backgroundColor =
		variant === 'outlined' || variant === 'text'
			? theme.palette.background.default
			: palette.main;

	const borderColor =
		variant === 'outlined' || variant === 'contained'
			? palette.main
			: theme.palette.background.default;

	const styles = {
		fontSize: getFontSize(size),
		color: baseColor,
		backgroundColor: backgroundColor,
		borderColor: borderColor,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: shape === 'default' ? 5 : shape === 'round' ? 20 : '50%',
	};

	return (
		<button style={styles} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
