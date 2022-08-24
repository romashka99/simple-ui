import React, { useCallback, useRef, useState } from 'react';
import './Slider.scss';

interface ISliderProps extends React.AriaAttributes {
	min?: number;
	max?: number;
	value?: number;
	step?: number;
	defaultValue?: number;
	disabled?: boolean;
	className?: string;
	onChange?: (value: number) => void;
}

const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export default function Slider({
	min = 0,
	max = 100,
	step = 10,
	value,
	defaultValue = 0,
	disabled,
	className,
	onChange,
}: ISliderProps) {
	const classes = `slider${disabled ? ' is-disabled' : ''}${
		className ? ' ' + className : ''
	}`;

	const defaultValueSlider = Number(value ? value : defaultValue);

	const [valueSlider, setValueSlider] = useState<number>(defaultValueSlider);
	const [clicked, setClicked] = useState<boolean>(false);

	const values = range(min, max, step);

	const percent = 100 / values.length;

	const refInner = useRef<HTMLDivElement>(null);

	const onToggle = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			const width = refInner.current ? refInner.current.offsetWidth : 0;
			const { clientX } = event;
			const percents = (clientX * 100) / width;
			const index = Math.round(percents / percent);
			const changeValue = values[index - 1];
			if (changeValue !== valueSlider) {
				setValueSlider(values[index - 1]);
				if (onChange) onChange(values[index - 1]);
			}
		},
		[onChange, percent, valueSlider, values]
	);

	const onClick = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			if (clicked) {
				onToggle(event);
			}
		},
		[clicked, onToggle]
	);

	return (
		<div data-testId='slider' className={classes} onClick={onToggle}>
			<div
				ref={refInner}
				data-testId='slider-inner'
				className='slider--inner'
				onMouseMove={onClick}
				onMouseDown={() => setClicked(true)}
				onMouseUp={() => setClicked(false)}
			>
				<div
					style={{ width: `${valueSlider * percent}%` }}
					data-testId='slider-filled'
					className='slider--filled'
				>
					<button
						data-testId='slider-control'
						className='slider--control'
					></button>
				</div>
			</div>
		</div>
	);
}
