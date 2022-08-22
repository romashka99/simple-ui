import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
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
}

export default React.memo(function Input({
	label,
	type = 'text',
	className,
	...props
}: IInputProps) {
	const classes = `input${className ? ' ' + className : ''}`;
	return (
		<label data-testid='input' className={classes}>
			{label && <span className='input--label'>{label}</span>}
			<input
				{...props}
				data-testid='input-inner'
				type={type}
				className='input--inner'
			/>
		</label>
	);
});
