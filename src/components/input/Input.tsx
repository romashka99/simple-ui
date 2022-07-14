import React from 'react';
import { Color, Size } from '../../types/types';
import './Input.scss';

export type InputType = 'text' | 'email' | 'password';

interface IInputProps {
	value?: string | number | string[];
	label?: string;
	className?: string;
	type?: InputType;
	maxLength?: number;
	minLength?: number;
	placeholder?: string;
	color?: Color;
	size?: Size;
	readOnly?: boolean;
	disabled?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	value = '',
	label,
	className,
	size = 'medium',
	type = 'text',
	placeholder,
	minLength,
	maxLength,
	readOnly,
	disabled,
	onChange,
}: IInputProps) {
	const classes = `input input--${size}${className ? ' ' + className : ''}`;
	return (
		<>
			{label && <label className='input__label'>{label}</label>}
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				minLength={minLength}
				maxLength={maxLength}
				className={classes}
				readOnly={readOnly}
				disabled={disabled}
				onChange={onChange}
			/>
		</>
	);
}
