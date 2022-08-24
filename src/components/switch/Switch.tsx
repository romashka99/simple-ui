import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './Switch.scss';

interface ISwitchProps
	extends DetailedHTMLProps<
			InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		React.AriaAttributes {
	label?: string;
	outline?: boolean;
	android?: boolean;
}

export default function Switch({
	label,
	outline,
	android,
	className,
	...props
}: ISwitchProps) {
	const classes = `switch${outline ? ' switch--outline' : ''}${
		android ? ' switch--android' : ''
	}${className ? ' ' + className : ''}`;

	return (
		<label data-testid='switch' className={classes}>
			<input
				{...props}
				className='switch--inner'
				data-testid='switch-inner'
				type='checkbox'
			/>
			{label && <span className='switch--label'>{label}</span>}
		</label>
	);
}
