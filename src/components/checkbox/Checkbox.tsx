import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

interface ICheckboxProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	label?: string;
}

export default function Checkbox({
	label,
	className,
	...props
}: ICheckboxProps) {
	const classes = `checkbox${className ? ' ' + className : ''}`;

	return (
		<label data-testid='checkbox' className={classes}>
			<input
				{...props}
				data-testid='checkbox-inner'
				className='checkbox--inner'
				type='checkbox'
			/>
			{label && <span className='checkbox--label'>{label}</span>}
		</label>
	);
}
