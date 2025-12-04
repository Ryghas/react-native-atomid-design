import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '../text';

export interface PdfHeaderTitleProps {
  title: string;
}

export const PdfHeaderTitle = ({title}: PdfHeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text type="h4" numberOfLines={1} style={{fontWeight: '600'}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
