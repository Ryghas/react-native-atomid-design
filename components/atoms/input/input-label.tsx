import React from 'react';
import {TextProps} from 'react-native';

import {Text} from '../text';

export const InputLabel = (props: TextProps) => {
  return <Text type="l_sm" {...props} />;
};
