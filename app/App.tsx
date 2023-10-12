import React from 'react';
import { StatusBar } from 'react-native';

import { Navigator } from '@app/navigation';

import { palette } from './theme';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={palette.darkGrey} />
      <Navigator />
    </>
  );
}

export default App;
