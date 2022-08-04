import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color, Size } from '../../types/types';
import './Checkbox.scss';

interface ICheckboxProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
	label?: string;
}

export default function Checkbox({
	color = 'default',
	scale = 'medium',
	label,
	className,
	...props
}: ICheckboxProps) {
	const classes = `checkbox checkbox--${color} checkbox--${scale}${
		className ? ' ' + className : ''
	}`;

	return (
		<>
			<input
				data-testid='checkbox'
				type='checkbox'
				className={classes}
				{...props}
			/>
			{label && <label>{label}</label>}
		</>
	);
}
