import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '.';

export default {
	title: 'UI/Radio',
	component: Radio,
	argTypes: {
		value: {
			type: { name: 'string' },
			description: 'The value of the radio.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		name: {
			type: { name: 'string' },
			description: 'The name of the radio.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		label: {
			description: 'The label of the radio.',
		},
		checked: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Checked state of the radio.',
			control: { type: 'boolean' },
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the radio.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => (
	<Radio label='Label' {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
