import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StarWarsStackNavigator } from '@app/navigation';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <StarWarsStackNavigator />
    </NavigationContainer>
  );
};
