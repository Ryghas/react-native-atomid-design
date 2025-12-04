import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetScrollView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {BackHandler, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BottomSheetBackdrop} from './bottom-sheet-backdrop';

export interface FullHeightBottomSheetProps
  extends Omit<BottomSheetModalProps, 'children' | 'snapPoints'> {
  headerComponent?: React.ReactNode;
  children?: React.ReactNode;
  useScrollView?: boolean;
}

export const FullHeightBottomSheetModal = React.forwardRef(
  (
    {
      headerComponent,
      footerComponent,
      children,
      useScrollView = true,
      onDismiss,
      onChange,
      ...props
    }: FullHeightBottomSheetProps,
    ref: React.ForwardedRef<BottomSheetModal>,
  ) => {
    const snapPoints = useMemo(() => ['100%'], []);
    const insets = useSafeAreaInsets();
    const {dismiss} = useBottomSheetModal();
    const [isOpen, setIsOpen] = useState(-1); // 0 = open, -1 = close
    const focused = useIsFocused();

    const backPressHandler = useCallback(() => {
      if (isOpen === 0) {
        dismiss();
        setIsOpen(-1);
        return true;
      }

      return false;

      // no need to add dismiss as a dependency
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
      const subscribed = BackHandler.addEventListener(
        'hardwareBackPress',
        backPressHandler,
      );

      return () => {
        subscribed.remove();
      };
    }, [backPressHandler, focused]);

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={BottomSheetBackdrop}
        keyboardBlurBehavior="restore"
        handleComponent={null}
        topInset={insets.top}
        onDismiss={() => {
          setIsOpen(-1);
          onDismiss?.();
        }}
        onChange={(index, position, type) => {
          setIsOpen(index);
          onChange?.(index, position, type);
        }}
        {...props}>
        {headerComponent}

        <View style={{flex: 1}}>
          {useScrollView && (
            <BottomSheetScrollView keyboardShouldPersistTaps="handled">
              {children}
            </BottomSheetScrollView>
          )}

          {!useScrollView && children}
        </View>
      </BottomSheetModal>
    );
  },
);
