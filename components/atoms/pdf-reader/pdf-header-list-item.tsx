import {useTheme} from '@react-navigation/native';
import React from 'react';
import {PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {PrimaryButton} from '../button';
import {Icon} from '../icon';
import {Text} from '../text';

export interface PdfListItemProps extends PressableProps {
  itemNo: number;
  isApproved?: boolean;
  isActive?: boolean;
}

export const PdfHeaderListItem = ({
  itemNo,
  isApproved = false,
  isActive = false,
  style,
  ...props
}: PdfListItemProps) => {
  const {colors} = useTheme();
  const backgroundColor = isActive ? colors.black : 'transparent';
  const textColor = isActive ? colors.white : colors.black;
  const checkColor = isActive ? colors.white : colors.success;

  return (
    <PrimaryButton
      style={[
        styles.container,
        {backgroundColor: backgroundColor},
        style as StyleProp<ViewStyle>,
      ]}
      {...props}>
      <Text type="m_sm" style={{color: textColor}}>
        {itemNo}
      </Text>

      {isApproved && (
        <Icon
          testID="approved-icon"
          name="check"
          color={checkColor}
          size={16}
        />
      )}
    </PrimaryButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    height: 28,
  },
});
