import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './Input.scss';

export type InputType = 'text' | 'email' | 'password';

interface IInputProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	type?: InputType;
	label?: string;
	helpText?: string;
}

export default React.memo(function Input({
	type = 'text',
	label,
	helpText,
	disabled,
	className,
	...props
}: IInputProps) {
	const classes = `input${disabled ? ' is-disabled' : ''}${
		className ? ' ' + className : ''
	}`;
	return (
		<label data-testid='input' className={classes}>
			{label && <span className='input--label'>{label}</span>}
			<input
				{...props}
				data-testid='input-inner'
				type={type}
				className='input--inner'
				disabled={disabled}
			/>
			{helpText && <span className='input--help'>{helpText}</span>}
		</label>
	);
});
