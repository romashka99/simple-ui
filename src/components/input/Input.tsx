import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color, Size } from '../../types/types';
import './Input.scss';

export type InputType = 'text' | 'email' | 'password';

interface IInputProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	label?: string;
	type?: InputType;
	color?: Color;
	scale?: Size;
}

export default React.memo(function Input({
	label,
	type = 'text',
	scale = 'medium',
	className,
	...props
}: IInputProps) {
	const classes = `input input--${scale}${className ? ' ' + className : ''}`;
	return (
		<>
			{label && <label className='input__label'>{label}</label>}
			<input data-testid='input' type={type} className={classes} {...props} />
		</>
	);
});
