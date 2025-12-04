import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

import {Icon} from '../icon';

interface Props extends PressableProps {
  active: boolean;
}

export const Checkbox = ({active, ...props}: Props) => {
  const {colors} = useTheme();

  return (
    <Pressable {...props}>
      <View
        style={[
          styles.checkboxContainer,
          {backgroundColor: active ? colors.red : colors.white},
          {borderColor: active ? colors.red : colors.black},
        ]}>
        {active && (
          <Icon
            name="check"
            size={20}
            color={colors.white}
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D3171E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#000',
  },
});
