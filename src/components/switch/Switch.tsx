import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color, Size } from '../../types/types';
import './Switch.scss';

interface ISwitchProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
	label?: string;
}

export default function Switch({
	color = 'default',
	scale = 'medium',
	label,
	className,
	...props
}: ISwitchProps) {
	const classes = `switch switch--${color} switch--${scale}${
		className ? ' ' + className : ''
	}`;

	return (
		<>
			<input
				data-testid='switch'
				type='checkbox'
				className={classes}
				{...props}
			/>
			{label && <label>{label}</label>}
		</>
	);
}
