import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		label: {
			type: { name: 'string' },
			table: {
				type: { summary: 'string' },
			},
			description: 'The label of the input.',
			control: { type: 'text' },
		},
		type: {
			description: 'The type of the input.',
			options: ['text', 'email', 'password'],
			control: { type: 'radio' },
		},
		value: {
			type: { name: 'string' },
			description: 'The value of the input.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
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
	<Input label='Label' placeholder='Placeholder' {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
