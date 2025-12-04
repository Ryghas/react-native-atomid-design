import {useTheme} from '@react-navigation/native';
import {ComponentProps, useState} from 'react';
import {StyleSheet, View} from 'react-native';

export interface SliderProps extends ComponentProps<typeof RNSlider> {}

export const StepSlider = (props: SliderProps) => {
  const {colors} = useTheme();
  const [sliderWidth, setSliderWidth] = useState(0);

  return (
    <View
      style={{justifyContent: 'center'}}
      onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width - 26)}>
      <View style={styles.baseTrackContainer}>
        <View
          style={[styles.minTrackPreview, {backgroundColor: colors.black}]}
        />
        <View
          style={{
            height: 1,
            width: sliderWidth,
            backgroundColor: colors.black,
          }}
        />
      </View>

      {/* <RNSlider
        style={[styles.sliderStyle, {width: sliderWidth}]}
        thumbTintColor={colors.red}
        minimumTrackTintColor={colors.black}
        maximumTrackTintColor="transparent"
        trackHeight={6}
        trackStyle={{borderRadius: 0}}
        thumbSize={32}
        {...props}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  baseTrackContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: 0,
    right: 0,
  },
  minTrackPreview: {
    width: 13,
    height: 6,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  sliderStyle: {
    marginLeft: 13,
    height: 32,
  },
});
