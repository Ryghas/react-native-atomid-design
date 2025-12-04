import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import Reanimated, {AnimateProps} from 'react-native-reanimated';

import {Text, TextProps} from '../text';

interface Props extends TextProps {
  containerProps?: AnimateProps<ViewProps>;
}

export const NavbarTitle = ({containerProps, ...props}: Props) => {
  return (
    <Reanimated.View style={styles.container} {...containerProps}>
      <Text accessibilityRole="header" type="h2" {...props} />
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
