import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, Option } from '.';

export default {
	title: 'UI/Select',
	component: Select,
	argTypes: {
		value: {
			type: { name: 'string' },
			description: 'The value of the select.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		name: {
			type: { name: 'string' },
			description: 'The name of the select.',
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
			description: 'Disabled state of the select.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => (
	<Select placeholder='Placeholder' {...args}>
		<Option value={1}>1</Option>
		<Option value={2}>2</Option>
		<Option value={3}>3</Option>
	</Select>
);

export const Default = Template.bind({});
Default.args = {};
