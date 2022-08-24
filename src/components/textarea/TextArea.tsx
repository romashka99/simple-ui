import React, {
	ChangeEvent,
	DetailedHTMLProps,
	TextareaHTMLAttributes,
	useCallback,
	useState,
} from 'react';
import './TextArea.scss';

interface ITextAreaProps
	extends DetailedHTMLProps<
			TextareaHTMLAttributes<HTMLTextAreaElement>,
			HTMLTextAreaElement
		>,
		React.AriaAttributes {
	label?: string;
	helpText?: string;
	showCount?: boolean;
}

const getCount = (
	value?: string | number | readonly string[],
	maxLength?: number
) => {
	return `${
		value
			? typeof value !== 'number'
				? value?.length
				: value.toString().length
			: 0
	}/${maxLength}`;
};

export default function TextArea({
	label,
	helpText,
	showCount = false,
	value,
	maxLength,
	disabled,
	onChange,
	className,
	...prop
}: ITextAreaProps) {
	const classes = `textarea${disabled ? ' is-disabled' : ''}${
		className ? ' ' + className : ''
	}`;

	const [valueTextarea, setValueTextarea] =
		useState<string | number | readonly string[] | undefined>(value);

	const onChangeValue = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			const { value } = event.target;
			setValueTextarea(value);
			if (onChange) onChange(event);
		},
		[onChange]
	);

	return (
		<label data-testid='textarea' className={classes}>
			{label && <span className='textarea--label'>{label}</span>}
			<textarea
				{...prop}
				data-testid='textarea-inner'
				value={valueTextarea}
				maxLength={maxLength}
				className='textarea--inner'
				disabled={disabled}
				onChange={onChangeValue}
			/>
			{(helpText || (showCount && maxLength)) && (
				<div className='textarea--help'>
					{helpText && <div>{helpText}</div>}
					{showCount && maxLength && (
						<div>{getCount(valueTextarea, maxLength)}</div>
					)}
				</div>
			)}
		</label>
	);
}
