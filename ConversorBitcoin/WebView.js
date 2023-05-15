import React from 'react';
import { WebView } from 'react-native-webview';

const BitcoinWebView = ({ url }) => {
  return (
    <WebView
      source={{ uri: url }}
      startInLoadingState
      scalesPageToFit
    />
  );
};

export default BitcoinWebView;
