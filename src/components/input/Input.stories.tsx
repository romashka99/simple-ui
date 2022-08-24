import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		type: {
			description: 'The type of the input.',
			options: ['text', 'email', 'password'],
			control: { type: 'radio' },
		},
		label: {
			type: { name: 'string' },
			table: {
				type: { summary: 'string' },
			},
			description: 'The label of the input.',
			control: { type: 'text' },
		},
		helpText: {
			type: { name: 'string' },
			table: {
				type: { summary: 'string' },
			},
			description: 'The help text of the input.',
			control: { type: 'text' },
		},
		value: {
			type: { name: 'string' },
			description: 'The value of the input.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the button.',
			control: { type: 'boolean' },
		},
		readOnly: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Readonly state of the button.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
	<Input
		label='Label'
		helpText='Help text'
		placeholder='Placeholder'
		{...args}
	/>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	value: 'Text',
	readOnly: true,
};
