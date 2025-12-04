import {useTheme} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends ViewProps {
  animating?: boolean;
  progressDuration?: number; // In milisecond.
  finished?: boolean;
  value?: number; // e.g 3/5
  height?: number;
  progressBarStyles?: StyleProp<ViewStyle>;
}

export const ProgressBar = ({
  animating,
  progressDuration = 5000,
  finished,
  value = 1,
  height = 3,
  style,
  progressBarStyles,
  ...props
}: Props) => {
  const {colors} = useTheme();

  const [containerWidth, setContainerWidth] = useState(0);
  const [progressMaxWidth, setProgressMaxWidth] = useState(
    containerWidth * value,
  );

  useEffect(() => {
    if (containerWidth) {
      setProgressMaxWidth(containerWidth * value);
    }
  }, [containerWidth, value]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  return (
    <View
      testID="progressBar"
      style={[
        styles.container,
        {height, backgroundColor: colors.borderDisabled},
        style,
      ]}
      onLayout={onLayout}
      {...props}>
      {animating && progressMaxWidth ? (
        <AnimatedProgress
          maxWidth={progressMaxWidth}
          duration={progressDuration}
          height={height}
          styles={progressBarStyles}
        />
      ) : finished ? (
        <View
          style={{
            width: progressMaxWidth,
            height: 3,
            backgroundColor: colors.black,
          }}
        />
      ) : null}
    </View>
  );
};

const AnimatedProgress = ({
  maxWidth,
  duration,
  height,
  styles,
}: {
  maxWidth: number;
  duration?: number; // In milisecond.
  height?: number;
  styles?: StyleProp<ViewStyle>;
}) => {
  const {colors} = useTheme();
  const progressWidth = useSharedValue(0);

  useEffect(() => {
    progressWidth.value = withTiming(maxWidth, {duration});
  }, [maxWidth, duration, progressWidth]);

  const progressBarStyle = useAnimatedStyle(() => {
    return {
      width: progressWidth.value,
      height,
    };
  });

  return (
    <Reanimated.View
      style={[{backgroundColor: colors.black}, styles, progressBarStyle]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
