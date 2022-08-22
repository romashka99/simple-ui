import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { Color, Size } from 'types/types';
import './Select.scss';

interface ISelectProps
	extends DetailedHTMLProps<
			SelectHTMLAttributes<HTMLSelectElement>,
			HTMLSelectElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
}

export default function Select({
	color = 'default',
	scale = 'medium',
	className,
	children,
	...props
}: ISelectProps) {
	const classes = `select select--${color} select--${scale}${
		className ? ' ' + className : ''
	}`;

	return (
		<select {...props} data-testid='select' className={classes}>
			{children}
		</select>
	);
}
