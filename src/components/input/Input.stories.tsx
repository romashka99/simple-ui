import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		label: {
			description: 'The label of the input.',
		},
		scale: {
			description: 'The size of the input.',
		},
		type: {
			description: 'The type of the input.',
		},
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Name',
	type: 'text',
	scale: 'medium',
};

export const Small = Template.bind({});
Small.args = {
	scale: 'small',
};

export const Large = Template.bind({});
Large.args = {
	scale: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
