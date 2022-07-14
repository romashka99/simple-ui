import React, { ReactNode } from 'react';
import { Color, Size } from '../../types/types';
import './Button.scss';

interface IButtonProps {
	className?: string;
	color?: Color;
	size?: Size;
	plain?: boolean;
	round?: boolean;
	circle?: boolean;
	link?: boolean;
	disabled?: boolean;
	children?: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
	className,
	color = 'default',
	size = 'medium',
	plain,
	round,
	circle,
	link,
	disabled,
	onClick,
	children,
}: IButtonProps) {
	const classes = `button button--${color} button--${size}${
		plain ? ' is-plain' : ''
	}${round ? ' is-round' : ''}${circle ? ' is-circle' : ''}${
		link ? ' is-link' : ''
	}${className ? ' ' + className : ''}`;

	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
