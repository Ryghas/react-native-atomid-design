import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import {TextButton} from './index';

export default {
  title: 'Atoms/Button',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

export const Text: ComponentStory<typeof TextButton> = ({
  children,
  ...args
}) => (
  <TextButton onPress={() => alert('Pressed')} {...args}>
    Button
  </TextButton>
);
