import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StarWarsScreens } from '@app/navigation';

import { StarWarsList, PeopleDetails } from '@app/screens';

const StarWarsStack = createStackNavigator();

export const StarWarsStackNavigator = () => {
  return (
    <StarWarsStack.Navigator
      initialRouteName={StarWarsScreens.starWarsList}
      screenOptions={{ headerShown: false }}>
      <StarWarsStack.Screen
        name={StarWarsScreens.starWarsList}
        component={StarWarsList}
      />
      <StarWarsStack.Screen
        name={StarWarsScreens.peopleDetails}
        component={PeopleDetails}
      />
    </StarWarsStack.Navigator>
  );
};
