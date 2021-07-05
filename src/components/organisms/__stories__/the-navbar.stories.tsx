import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TheNavbar, TheNavbarProps } from '../the-navbar';

export default {
  title: 'Organisms/TheNavbar',
  component: TheNavbar,
} as Meta;

const Template: Story<TheNavbarProps> = (args) => <TheNavbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
