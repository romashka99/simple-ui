import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.scss';

interface IButtonProps
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		React.AriaAttributes {
	plain?: boolean;
	round?: boolean;
}

export default function Button({
	plain,
	round,
	className,
	children,
	...props
}: IButtonProps) {
	const classes = `button ${plain ? ' is-plain' : ''}${
		round ? ' is-round' : ''
	}${className ? ' ' + className : ''}`;

	return (
		<button {...props} data-testid='button' className={classes}>
			{children}
		</button>
	);
}
