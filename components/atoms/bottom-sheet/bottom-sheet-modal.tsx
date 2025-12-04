import {
  BottomSheetModal as RNBottomSheetModal,
  BottomSheetModalProps as RNBottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BottomSheetBackdrop} from './bottom-sheet-backdrop';

export interface BottomSheetModalProps extends RNBottomSheetModalProps {}

export const BottomSheetModal = React.forwardRef(
  (
    {children, ...props}: BottomSheetModalProps,
    ref: React.ForwardedRef<RNBottomSheetModal>,
  ) => {
    const insets = useSafeAreaInsets();
    const [isKeyboardShown, setIsKeyboardShown] = useState<boolean>();

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardShown(true);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardShown(false);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    return (
      <RNBottomSheetModal
        ref={ref}
        index={0}
        keyboardBlurBehavior="restore"
        handleComponent={null}
        backdropComponent={BottomSheetBackdrop}
        stackBehavior="push"
        topInset={insets.top}
        bottomInset={isKeyboardShown ? 0.1 : 0}
        {...props}>
        {children}
      </RNBottomSheetModal>
    );
  },
);
