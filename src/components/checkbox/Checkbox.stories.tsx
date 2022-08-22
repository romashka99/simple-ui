import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './';

export default {
	title: 'UI/Checkbox',
	component: Checkbox,
	argTypes: {
		value: {
			type: { name: 'string' },
			description: 'The value of the checkbox.',
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
			description: 'The name of the checkbox.',
			control: { type: 'text' },
		},
		label: {
			description: 'The label of the checkbox.',
		},
		checked: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Checked state of the checkbox.',
			control: { type: 'boolean' },
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the checkbox.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
	<Checkbox label='Label' {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
