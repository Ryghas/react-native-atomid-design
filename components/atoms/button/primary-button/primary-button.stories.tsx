import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import {PrimaryButton} from './index';

export default {
  title: 'Atoms/Button',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Primary: ComponentStory<typeof PrimaryButton> = ({
  children,
  ...args
}) => (
  <PrimaryButton onPress={() => alert('Pressed')} {...args}>
    Button
  </PrimaryButton>
);
