import {getUniqueDeviceId} from '@smmf/app/utils/device-id';
import {ImageProps} from 'expo-image';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {Image} from './image';

interface Props extends Omit<ImageProps, 'source'> {
  uri: string;
  xAppId: 'dealer-app' | 'buyer-app';
  xDeviceOS: string;
  xAppVersion: string;
  accessToken: string;
}

export const ProtectedImage = ({
  uri,
  xAppId,
  accessToken,
  xAppVersion,
  xDeviceOS,
  // style,
  ...props
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [deviceId, setDeviceId] = useState<string>();

  useEffect(() => {
    (async () => {
      const id = await getUniqueDeviceId();
      setDeviceId(id || '');
    })();
  });

  return (
    <>
      <Image
        onLoad={() => setIsLoading(false)}
        source={{
          uri,
          headers: {
            'X-App-Id': xAppId,
            'X-Device-OS': xDeviceOS,
            'X-App-Version': xAppVersion,
            'X-Device-Id': deviceId || '',
            'X-Simulator-Id': process.env.EXPO_PUBLIC_SIMULATOR_ID,
            Authorization: `Bearer ${accessToken}`,
          },
        }}
        style={{width: '100%', height: '100%'}}
        contentFit="cover"
      />
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        />
      )}
    </>
  );
};
