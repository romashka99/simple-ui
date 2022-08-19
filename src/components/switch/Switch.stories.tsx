import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '.';

export default {
	title: 'UI/Switch',
	component: Switch,
	argTypes: {
		value: {
			type: { name: 'string' },
			description: 'The value of the switch.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		name: {
			type: { name: 'string' },
			description: 'The name of the switch.',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		label: {
			description: 'The label of the switch.',
		},
		checked: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Checked state of the switch.',
			control: { type: 'boolean' },
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the switch.',
			control: { type: 'boolean' },
		},
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};
