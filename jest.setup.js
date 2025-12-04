import '@testing-library/jest-native/extend-expect';

// Load environment variables for testing
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, './.env.staging')});

global.__fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig || {
  remoteModuleConfig: [],
  localModulesConfig: [],
};

global.__fbBatchedBridge = global.__fbBatchedBridge || {
  callFunctionReturnFlushedQueue: jest.fn(),
  invokeCallbackAndReturnFlushedQueue: jest.fn(),
  flushQueue: jest.fn(),
};

try {
  const {
    configureHostComponentNamesIfNeeded,
  } = require('@testing-library/react-native/build/helpers/host-component-names');
  configureHostComponentNamesIfNeeded();
} catch (error) {
  const {
    configureInternal,
  } = require('@testing-library/react-native/build/config');
  configureInternal({
    hostComponentNames: {
      text: 'Text',
      textInput: 'TextInput',
      image: 'Image',
      switch: 'Switch',
      scrollView: 'ScrollView',
      modal: 'Modal',
    },
  });
}

const platformConstantsConstants = {
  forceTouchAvailable: false,
  interfaceIdiom: 'phone',
  isTesting: true,
  osVersion: '14.0',
  reactNativeVersion: {
    major: 0,
    minor: 81,
    patch: 0,
    prerelease: null,
  },
  uiMode: 'phone',
};

const turboModuleMocks = {
  PlatformConstants: {
    getConstants: () => platformConstantsConstants,
  },
  SourceCode: {
    getConstants: () => ({
      scriptURL: 'http://localhost',
    }),
  },
  DeviceInfo: {
    getConstants: () => ({
      Dimensions: {
        window: {
          width: 375,
          height: 812,
          scale: 2,
          fontScale: 2,
        },
        screen: {
          width: 375,
          height: 812,
          scale: 2,
          fontScale: 2,
        },
      },
      isEdgeToEdge: false,
    }),
  },
  UIManager: {
    getConstants: () => ({}),
    createView: jest.fn(),
    updateView: jest.fn(),
    findSubviewIn: jest.fn(),
    dispatchViewManagerCommand: jest.fn(),
    measure: jest.fn(),
    measureInWindow: jest.fn(),
    measureLayout: jest.fn(),
    measureLayoutRelativeToParent: jest.fn(),
    setJSResponder: jest.fn(),
    clearJSResponder: jest.fn(),
    configureNextLayoutAnimation: jest.fn(),
    setChildren: jest.fn(),
    manageChildren: jest.fn(),
  },
};

global.__turboModuleProxy = jest.fn((name) => turboModuleMocks[name] ?? null);

// Firebase mocks
jest.mock('@react-native-firebase/crashlytics', () => () => ({
  log: jest.fn(),
  recordError: jest.fn(),
  setAttributes: jest.fn(),
  setUserId: jest.fn(),
}));

jest.mock('@react-native-firebase/messaging', () => () => ({
  deleteToken: jest.fn(),
  onMessage: jest.fn(),
  onNotificationOpenedApp: jest.fn(),
  setBackgroundMessageHandler: jest.fn(),
  isDeviceRegisteredForRemoteMessages: jest.fn(),
  requestPermission: jest.fn(),
  getToken: jest.fn(),
}));

jest.mock('@react-native-firebase/perf', () =>
  jest.fn().mockReturnValue({
    startTrace: jest.fn().mockResolvedValue({
      stop: jest.fn(),
      putAttribute: jest.fn(),
    }),
    startScreenTrace: jest.fn().mockResolvedValue({
      stop: jest.fn().mockResolvedValue(),
    }),
    newHttpMetric: jest.fn(),
  }),
);

jest.mock('@react-native-firebase/remote-config', () => () => ({
  getValue: jest.fn(() => ({
    asNumber: jest.fn(),
    asBoolean: jest.fn(),
    asString: jest.fn(),
  })),
}));

jest.mock('expo-application', () => ({
  getAndroidId: jest.fn(() => 'test-android-id'),
  getIosIdForVendorAsync: jest.fn(() => Promise.resolve('test-ios-id')),
}));

jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const {Text} = require('react-native');
  const createMockIcon = () =>
    React.forwardRef((props, ref) =>
      React.createElement(
        Text,
        {...props, ref, accessibilityRole: 'image'},
        props.name || 'icon',
      ),
    );

  return {
    __esModule: true,
    createIconSetFromIcoMoon: createMockIcon,
  };
});

jest.mock('expo-constants', () => ({
  __esModule: true,
  default: {
    systemFonts: [],
    manifest: {},
    expoConfig: {
      extra: {},
    },
    executionEnvironment: 'bare',
  },
}));

jest.mock('expo-image', () => {
  const React = require('react');
  const {View} = require('react-native');
  const MockImage = React.forwardRef((props, ref) =>
    React.createElement(View, {...props, ref}),
  );
  MockImage.displayName = 'ExpoImageMock';

  return {
    __esModule: true,
    default: MockImage,
    Image: MockImage,
  };
});

jest.mock('expo-linear-gradient', () => {
  const React = require('react');
  const {View} = require('react-native');
  const MockLinearGradient = React.forwardRef((props, ref) =>
    React.createElement(View, {...props, ref}),
  );
  MockLinearGradient.displayName = 'ExpoLinearGradientMock';

  return {
    __esModule: true,
    default: MockLinearGradient,
    LinearGradient: MockLinearGradient,
  };
});

jest.mock('react-native-skeleton-content', () => {
  const React = require('react');
  const {View} = require('react-native');
  const MockSkeleton = React.forwardRef((props, ref) =>
    React.createElement(View, {...props, ref}),
  );
  MockSkeleton.displayName = 'SkeletonContentMock';

  return {
    __esModule: true,
    default: MockSkeleton,
  };
});

jest.mock('expo-contacts', () => ({
  __esModule: true,
  default: {},
  Fields: {
    PhoneNumbers: 'phoneNumbers',
  },
  requestPermissionsAsync: jest.fn(() => Promise.resolve({status: 'granted'})),
  getContactsAsync: jest.fn(() => Promise.resolve({data: []})),
}));

jest.mock('react-native-avoid-softinput', () => {
  const React = require('react');
  const {View} = require('react-native');
  const AvoidSoftInputView = React.forwardRef((props, ref) =>
    React.createElement(View, {...props, ref}),
  );
  AvoidSoftInputView.displayName = 'AvoidSoftInputViewMock';

  const noop = () => {};

  return {
    __esModule: true,
    AvoidSoftInputView,
    AvoidSoftInput: {
      setEnabled: jest.fn(),
      setAdjustResize: jest.fn(),
      setBorderGuardEnabled: jest.fn(),
      setShouldMimicIOSBehavior: jest.fn(),
      setHideAnimationDuration: jest.fn(),
      setShowAnimationDuration: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      removeAllListeners: jest.fn(),
    },
    useSoftInputAppliedOffsetChanged: jest.fn(() => noop),
    useSoftInputHeightChanged: jest.fn(() => noop),
    useSoftInputHidden: jest.fn(() => noop),
    useSoftInputShown: jest.fn(() => noop),
    useSoftInputState: jest.fn(() => ({
      isSoftInputShown: false,
      softInputHeight: 0,
    })),
  };
});

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const SafeAreaContext = React.createContext({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const SafeAreaProvider = ({children}) =>
    React.createElement(
      SafeAreaContext.Provider,
      {value: {top: 0, bottom: 0, left: 0, right: 0}},
      children,
    );

  const SafeAreaView = ({children, ...props}) =>
    React.createElement('SafeAreaView', props, children);

  return {
    __esModule: true,
    SafeAreaProvider,
    SafeAreaView,
    SafeAreaConsumer: SafeAreaContext.Consumer,
    SafeAreaInsetsContext: SafeAreaContext,
    useSafeAreaInsets: () => ({top: 0, bottom: 0, left: 0, right: 0}),
    withSafeAreaInsets: (Component) => (props) =>
      React.createElement(Component, {
        ...props,
        insets: {top: 0, bottom: 0, left: 0, right: 0},
      }),
  };
});

jest.mock('react-native-pager-view', () => {
  const React = require('react');
  const {View} = require('react-native');
  return React.forwardRef((props, ref) =>
    React.createElement(View, {...props, ref}),
  );
});

jest.mock('@react-native-community/netinfo', () => {
  const netInfoState = {
    type: 'wifi',
    isConnected: true,
    isInternetReachable: true,
    details: null,
  };

  return {
    __esModule: true,
    default: {
      addEventListener: jest.fn(() => jest.fn()),
      fetch: jest.fn(() => Promise.resolve(netInfoState)),
      configure: jest.fn(),
    },
    useNetInfo: jest.fn(() => netInfoState),
  };
});

// Navigation mocks
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
      replace: jest.fn(),
      reset: jest.fn(),
      goBack: jest.fn(),
      canGoBack: jest.fn(() => true),
    })),
    useRoute: jest.fn(() => ({
      params: {},
      name: 'TestScreen',
      key: 'test-key',
    })),
    useFocusEffect: jest.fn(),
    useIsFocused: jest.fn(() => true),
  };
});

// Other third-party mocks
jest.mock('@amplitude/analytics-react-native', () => ({
  init: jest.fn(),
  track: jest.fn(),
}));

jest.mock('react-native-blob-util', () => ({
  Share: () => ({
    DocumentDir: jest.fn().mockImplementation(() => Promise.resolve()),
  }),
}));

jest.mock('@notifee/react-native', () => ({
  __esModule: true,
  default: {
    getInitialNotification: jest.fn().mockResolvedValue(null),
    displayNotification: jest.fn().mockResolvedValue(),
    onForegroundEvent: jest.fn().mockReturnValue(jest.fn()),
    onBackgroundEvent: jest.fn(),
    createChannelGroup: jest.fn().mockResolvedValue('channel-group-id'),
    createChannel: jest.fn().mockResolvedValue(),
  },
}));

jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {WebView: View};
});

jest.mock('react-native-vision-camera', () => {
  const {View} = require('react-native');
  return {Camera: View};
});
