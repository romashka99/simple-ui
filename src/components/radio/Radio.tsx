import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color, Size } from '../../types/types';
import './Radio.scss';

interface IRadioProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
	label?: string;
}

export default function Radio({
	color = 'default',
	scale = 'medium',
	label,
	className,
	...props
}: IRadioProps) {
	const classes = `radio radio--${color} radio--${scale}${
		className ? ' ' + className : ''
	}`;

	return (
		<>
			<input data-testid='radio' type='radio' className={classes} {...props} />
			{label && <label>{label}</label>}
		</>
	);
}
