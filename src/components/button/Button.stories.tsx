import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		color: {
			description: 'The color of the button.',
		},
		scale: {
			description: 'The size of the button.',
		},
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
	children: 'Button',
	color: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Button',
	color: 'primary',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Button',
	color: 'success',
};

export const Error = Template.bind({});
Error.args = {
	children: 'Button',
	color: 'error',
};

export const Info = Template.bind({});
Info.args = {
	children: 'Button',
	color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
	children: 'Button',
	color: 'warning',
};

export const Plain = Template.bind({});
Plain.args = {
	children: 'Button',
	plain: true,
};

export const Round = Template.bind({});
Round.args = {
	children: 'Button',
	round: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Button',
	disabled: true,
};
