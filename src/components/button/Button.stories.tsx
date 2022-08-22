import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		plain: {
			description: `Determine whether it's a plain button.`,
		},
		round: {
			description: `Determine whether it's a round button.`,
		},
		children: {
			description: 'The content of the button.',
		},
		disabled: {
			type: { name: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
			description: 'Disabled state of the button.',
			control: { type: 'boolean' },
		},
		onClick: {
			type: { name: 'function' },
			description: 'Set the handler to handle click event.',
			action: 'clicked',
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Label',
	color: 'default',
};

export const Plain = Template.bind({});
Plain.args = {
	children: 'Label',
	plain: true,
};

export const Round = Template.bind({});
Round.args = {
	children: 'Label',
	round: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Label',
	disabled: true,
};
