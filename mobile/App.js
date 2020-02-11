import React from 'react';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f05a5b" barStyle="light-content" />
      <Routes />
    </>
  );

}
