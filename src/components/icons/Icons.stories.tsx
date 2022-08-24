import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListIcons from './ListIcons';

export default {
	title: 'UI/Icons',
	component: ListIcons,
} as ComponentMeta<typeof ListIcons>;

const Template: ComponentStory<typeof ListIcons> = args => <ListIcons />;

export const Default = Template.bind({});
Default.args = {};
