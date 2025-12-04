import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextProps, View} from 'react-native';
import Reanimated, {FadeIn, FadeOut} from 'react-native-reanimated';

import {Icon} from '../icon';
import {Text} from '../text';

export const ErrorMessage = (props: TextProps) => {
  const {colors} = useTheme();

  return (
    <Reanimated.View
      entering={FadeIn}
      exiting={FadeOut.duration(200)}
      style={[styles.container, {backgroundColor: colors.error}]}>
      <Icon name="alert-triangle" />
      <View style={{flex: 1}}>
        <Text accessibilityRole="alert" type="m" {...props} />
      </View>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 8,
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
