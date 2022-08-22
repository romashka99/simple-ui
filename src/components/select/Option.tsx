import React, { DetailedHTMLProps, OptionHTMLAttributes } from 'react';
import { Color, Size } from '../../types/types';

interface IOptionProps
	extends DetailedHTMLProps<
			OptionHTMLAttributes<HTMLOptionElement>,
			HTMLOptionElement
		>,
		React.AriaAttributes {
	color?: Color;
	scale?: Size;
}

export default function Option({
	color = 'default',
	scale = 'medium',
	className,
	children,
	...props
}: IOptionProps) {
	const classes = `option ${className ? ' ' + className : ''}`;

	return (
		<option {...props} className={classes}>
			{children}
		</option>
	);
}
