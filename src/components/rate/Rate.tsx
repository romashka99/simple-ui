import React, { useState } from 'react';

import './Rate.scss';

import StarOutline from 'components/icons/StarOutline';
import StarFill from 'components/icons/StarFill';

interface IRateProps extends React.AriaAttributes {
	count?: number;
	defaultValue?: number;
	value?: number;
	disabled?: boolean;
	className?: string;
	onChange?: (value: number) => void;
}

export default function Rate({
	count = 5,
	value,
	defaultValue = 0,
	disabled,
	className,
	onChange,
	...prop
}: IRateProps) {
	const valueRate = Number(value ? value : defaultValue);
	const classes = `rate${className ? ' ' + className : ''}`;

	const [rating, setRating] = useState<number>(valueRate);
	const [hover, setHover] = useState<number>(valueRate);

	const onClick = (index: number) => {
		if (!disabled) {
			setRating(index);
			if (onChange) onChange(index + 1);
		}
	};

	const onHover = (index: number) => {
		if (!disabled) {
			setHover(index);
		}
	};

	return (
		<button
			{...prop}
			data-testid='rate'
			className={classes}
			disabled={disabled}
		>
			{[...Array(count)].map((star, index) => (
				<span
					key={index}
					data-testid={`rate-star-${index}`}
					onClick={() => onClick(index)}
					onMouseEnter={() => onHover(index)}
					onMouseLeave={() => onHover(rating)}
				>
					{index <= ((rating && hover) || hover) ? (
						<StarFill />
					) : (
						<StarOutline />
					)}
				</span>
			))}
		</button>
	);
}
