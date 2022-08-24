import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './Radio.scss';

interface IRadioProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	label?: string;
}

export default function Radio({ label, className, ...props }: IRadioProps) {
	const classes = `radio${className ? ' ' + className : ''}`;

	return (
		<label data-testid='radio' className={classes}>
			<input
				{...props}
				className='radio--inner'
				data-testid='radio-inner'
				type='radio'
			/>
			{label && <span className='radio--label'>{label}</span>}
		</label>
	);
}
