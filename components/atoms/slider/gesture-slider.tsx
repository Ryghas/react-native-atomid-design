import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';
import {Slider} from 'react-native-awesome-slider';
import {SharedValue} from 'react-native-reanimated';

export interface GestureSliderProps {
  value: SharedValue<number>;
  minValue: SharedValue<number>;
  maxValue: SharedValue<number>;
  step: number;
  showBubble?: boolean;
  onValueChange?: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  hideMark?: boolean;
  testID?: string;
  forceSnapToStep?: boolean;
}

export const GestureSlider = ({
  value,
  minValue,
  maxValue,
  step,
  showBubble,
  onValueChange,
  onSlidingComplete,
  hideMark,
  testID,
  forceSnapToStep = true,
}: GestureSliderProps) => {
  const {colors} = useTheme();

  return (
    <View style={{height: 32, justifyContent: 'center'}}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 1,
          backgroundColor: colors.black,
        }}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            position: 'absolute',
            left: 16,
            width: 13,
            height: 6,
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            backgroundColor: colors.black,
          }}
        />

        <View
          style={{
            position: 'absolute',
            right: 16,
            width: 13,
            height: 1,
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
            backgroundColor: colors.black,
          }}
        />

        <View style={{flex: 1}}>
          <Slider
            testID={testID}
            progress={value}
            minimumValue={minValue}
            maximumValue={maxValue}
            onValueChange={onValueChange}
            onSlidingComplete={onSlidingComplete}
            theme={{
              minimumTrackTintColor: colors.black,
              bubbleBackgroundColor: colors.error,
              bubbleTextColor: colors.black,
            }}
            renderMark={
              hideMark
                ? () => null
                : ({index}) => {
                    if (index === 0 || index === step) {
                      return null;
                    }

                    return (
                      <View
                        style={{
                          marginLeft: 2,
                          height: 12,
                          width: 1,
                          backgroundColor: colors.black,
                        }}
                      />
                    );
                  }
            }
            step={step}
            forceSnapToStep={forceSnapToStep}
            bubbleTextStyle={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14,
              lineHeight: 20,
            }}
            renderBubble={showBubble ? undefined : () => null}
            containerStyle={{
              backgroundColor: 'transparent',
              height: 6,
            }}
            thumbWidth={32}
            renderThumb={() => (
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: colors.red,
                }}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};
