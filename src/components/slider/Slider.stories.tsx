import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from '.';

export default {
	title: 'UI/Slider',
	component: Slider,
	argTypes: {
		label: {
			type: { name: 'string' },
			table: {
				type: { summary: 'string' },
			},
			description: 'The label of the input.',
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
		onChange: {
			type: { name: 'function' },
			description: 'Set the handler to handle change event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => (
	<Slider value={5} min={0} max={100} step={1} {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
