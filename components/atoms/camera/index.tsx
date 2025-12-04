import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useIsFocused, useNavigation, useTheme} from '@react-navigation/native';
import {useAppState} from '@smmf/app/hooks/use-app-state';
import {useCameraPermission} from '@smmf/app/hooks/use-camera-permission';
import * as Application from 'expo-application';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Reanimated, {
  AnimateProps,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Camera as VisionCamera,
  CameraProps,
  useCameraDevices,
} from 'react-native-vision-camera';

import {ErrorBottomSheetModal} from '../../molecules/modals';
import {PrimaryButton, SecondaryButton} from '../button';

const ReanimatedCamera = Reanimated.createAnimatedComponent(VisionCamera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

interface Props extends Omit<CameraProps, 'device' | 'isActive'> {
  isCameraFront?: boolean;
}

export const Camera = React.forwardRef<VisionCamera, Props>(
  ({isCameraFront, style, ...props}, ref) => {
    const {colors} = useTheme();
    const isFocused = useIsFocused();
    const appState = useAppState();
    const errorModal = useRef<BottomSheetModal>(null);
    const zoom = useSharedValue(0);
    const {goBack} = useNavigation();
    const androidDevices = useCameraDevices();
    const iosDevices = useCameraDevices('wide-angle-camera');
    const devices = Platform.OS === 'ios' ? iosDevices : androidDevices;
    const device = isCameraFront ? devices.front : devices.back;
    const {cameraPermission} = useCameraPermission();

    const format = useMemo(
      () =>
        device?.formats.find(
          (f) => f.photoWidth === 1920 && f.photoHeight === 1080,
        ),
      [device?.formats],
    );

    useEffect(() => {
      if (cameraPermission === 'denied') {
        errorModal.current?.present();
      }
    }, [cameraPermission]);

    const handleCloseBottomSheet = useCallback(() => {
      errorModal.current?.close();
      goBack();
    }, [goBack]);

    const handleManualAccessRequest = useCallback(() => {
      Linking.openSettings();
    }, []);

    const animatedProps = useAnimatedProps<Partial<AnimateProps<CameraProps>>>(
      () => ({zoom: zoom.value}),
      [zoom],
    );

    if (cameraPermission !== 'authorized') {
      return (
        <>
          <View style={[StyleSheet.absoluteFill, styles.loading]}>
            <ActivityIndicator color={colors.black} />
          </View>

          <ErrorBottomSheetModal
            ref={errorModal}
            title="Izinkan Akses Kamera"
            description={`Izinkan ${Application.applicationName} mengakses kamera Anda untuk bisa mengambil foto`}
            footer={
              <>
                <PrimaryButton
                  onPress={handleManualAccessRequest}
                  variant="bottom-sheet">
                  Beri Akses
                </PrimaryButton>
                <SecondaryButton onPress={handleCloseBottomSheet}>
                  Tutup
                </SecondaryButton>
              </>
            }
          />
        </>
      );
    }

    if (!device) {
      return null;
    }

    return (
      <ReanimatedCamera
        {...props}
        ref={ref as any}
        style={[{flex: 1}, style]}
        device={device}
        isActive={isFocused && appState === 'active'}
        onError={(err) => console.log('err', JSON.stringify(err))}
        format={format}
        fps={30}
        hdr={format?.supportsPhotoHDR}
        enableHighQualityPhotos={format?.isHighestPhotoQualitySupported}
        enableDepthData={format?.isHighestPhotoQualitySupported}
        animatedProps={animatedProps}
        enableZoomGesture
      />
    );
  },
);

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
