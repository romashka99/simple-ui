import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progress from '.';

export default {
	title: 'UI/Progress',
	component: Progress,
	argTypes: {
		value: {
			type: { name: 'number' },
			description: 'The value of the progress.',
			table: {
				type: { summary: 'number' },
			},
			control: { type: 'number', min: 0, max: 100, step: 1 },
		},
	},
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => (
	<Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
	value: 10,
};
