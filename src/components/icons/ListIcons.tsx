import React from 'react';
import ArrowIcon from './ArrowIcon';

const icons = [ArrowIcon];

export default function ListIcons() {
	return (
		<>
			{icons.map(Icon => (
				<Icon key={`Icon ${Icon}`} />
			))}
		</>
	);
}
