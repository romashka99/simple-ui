import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import './Select.scss';

interface ISelectProps
	extends DetailedHTMLProps<
			SelectHTMLAttributes<HTMLSelectElement>,
			HTMLSelectElement
		>,
		React.AriaAttributes {}

export default function Select({
	className,
	children,
	...props
}: ISelectProps) {
	const classes = `select${className ? ' ' + className : ''}`;

	return (
		<select {...props} data-testid='select' className={classes}>
			{children}
		</select>
	);
}
