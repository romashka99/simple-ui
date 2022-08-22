import Check from 'components/icons/Check';
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
	checked,
	disabled,
	...props
}: ICheckboxProps) {
	const classes = `checkbox${checked ? ' is-checked' : ''}${
		disabled ? ' is-disabled' : ''
	}${className ? ' ' + className : ''}`;

	return (
		<label data-testid='checkbox' className={classes}>
			<input
				{...props}
				checked={checked}
				disabled={disabled}
				data-testid='checkbox-inner'
				className='checkbox--inner'
				type='checkbox'
			/>
			{checked && (
				<span className='checkbox--check'>
					<Check />
				</span>
			)}
			{label && <span className='checkbox--label'>{label}</span>}
		</label>
	);
}
