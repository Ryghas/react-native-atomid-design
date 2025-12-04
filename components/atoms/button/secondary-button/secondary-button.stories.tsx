import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import {SecondaryButton} from './index';

export default {
  title: 'Atoms/Button',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

export const Secondary: ComponentStory<typeof SecondaryButton> = ({
  children,
  ...args
}) => (
  <SecondaryButton onPress={() => alert('Pressed')} {...args}>
    Button
  </SecondaryButton>
);
