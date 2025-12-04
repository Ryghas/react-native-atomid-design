import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Reanimated, {ZoomIn} from 'react-native-reanimated';

export const Radio = ({
  active,
  disabled,
}: {
  active?: boolean;
  disabled?: boolean;
}) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.indicatorContainer,
        {
          backgroundColor: disabled ? 'transparent' : colors.white,
          borderColor: disabled ? colors.disabled : colors.black,
        },
      ]}>
      {active && (
        <Reanimated.View
          entering={ZoomIn.duration(100)}
          style={[styles.indicator, {backgroundColor: colors.red}]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
