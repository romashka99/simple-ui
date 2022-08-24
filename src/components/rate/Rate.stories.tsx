import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rate from './';

export default {
	title: 'UI/Rate',
	component: Rate,
	argTypes: {
		value: {
			type: { name: 'string' },
			description: 'The value of the rate.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		name: {
			type: { name: 'string' },
			table: {
				type: { summary: 'string' },
			},
			description: 'The name of the rate.',
			control: { type: 'text' },
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the rate.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Rate>;

const Template: ComponentStory<typeof Rate> = args => <Rate {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
