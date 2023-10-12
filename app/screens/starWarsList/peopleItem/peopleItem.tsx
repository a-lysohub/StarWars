import React, { FC } from 'react';
import { Image, Pressable, Text } from 'react-native';

import { peopleItemStyles } from './peopleItem.styles';
import { PeopleItemProps } from './peopleItem.props';

import { typography } from '@app/theme';

export const PeopleItem: FC<PeopleItemProps> = ({
  name,
  fan = false,
  onSelect,
}) => {
  const NotLikedImage = require('../../../assets/icons/love_red.png');
  const LikedImage = require('../../../assets/icons/loveFull_red.png');

  return (
    <Pressable style={peopleItemStyles.container} onPress={onSelect}>
      {fan ? (
        <Image source={LikedImage} style={peopleItemStyles.img} />
      ) : (
        <Image source={NotLikedImage} style={peopleItemStyles.img} />
      )}
      <Text style={[peopleItemStyles.title, typography.item]}>{name}</Text>
    </Pressable>
  );
};
