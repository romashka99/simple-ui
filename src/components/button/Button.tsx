import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Color, Size } from '../../types/types';
import './Button.scss';

interface IButtonProps
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
	plain?: boolean;
	round?: boolean;
	circle?: boolean;
	link?: boolean;
}

export default function Button({
	color = 'default',
	scale = 'medium',
	plain,
	round,
	circle,
	link,
	className,
	children,
	...props
}: IButtonProps) {
	const classes = `button button--${color} button--${scale}${
		plain ? ' is-plain' : ''
	}${round ? ' is-round' : ''}${circle ? ' is-circle' : ''}${
		link ? ' is-link' : ''
	}${className ? ' ' + className : ''}`;

	return (
		<button data-testid='button' className={classes} {...props}>
			{children}
		</button>
	);
}
