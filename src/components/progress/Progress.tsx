import ErrorIcon from 'components/icons/ErrorIcon';
import SuccessIcon from 'components/icons/SuccessIcon';
import React from 'react';
import './Progress.scss';

export type StatusType = 'success' | 'error' | 'active';

interface IProgressProps extends React.AriaAttributes {
	value: number;
	showInfo?: boolean;
	status?: StatusType;
	className?: string;
}

export default function Progress({
	value,
	showInfo = true,
	status,
	className,
}: IProgressProps) {
	const classes = `progress${className ? ' ' + className : ''}`;

	return (
		<div data-testid='progress' className={classes}>
			<div data-testid='progress-inner' className='progress--inner'>
				<div style={{ width: `${value}%` }} className='progress--filled'></div>
			</div>
			{showInfo && (
				<label data-testid='progress-label' className='progress--label'>
					{status === 'error' ? (
						<ErrorIcon />
					) : status === 'success' ? (
						<SuccessIcon />
					) : (
						`${value}%`
					)}
				</label>
			)}
		</div>
	);
}
