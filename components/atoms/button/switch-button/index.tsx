import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, PressableProps} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends PressableProps {
  state: boolean;
}

export const SwitchButton = ({state, ...props}: Props) => {
  const {colors} = useTheme();

  const offset = useSharedValue(0);

  const ballStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: state
          ? (offset.value = withTiming(19, {
              duration: 50,
            }))
          : (offset.value = withTiming(1, {
              duration: 50,
            })),
      },
    ],
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    backgroundColor: state
      ? withTiming(colors.red, {
          duration: 50,
        })
      : withTiming(colors.grey100, {
          duration: 50,
        }),
  }));

  return (
    <Pressable {...props}>
      <Animated.View
        style={[
          {width: 40, height: 24, justifyContent: 'center', borderRadius: 12},
          animatedContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: colors.white,
            },
            ballStyle,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};
