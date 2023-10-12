import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { useNavigation } from '@app/navigation';

import { Title } from '@app/components';

import { HeaderProps } from './header.props';
import { headerStyles } from './header.style';

export const Header: React.FC<HeaderProps> = ({ backBtn, title }) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const ArrowBackIcon = require('../../assets/icons/arrowBack.png');

  return (
    <View style={headerStyles.header}>
      {backBtn && (
        <Pressable onPress={goBack}>
          <Image source={ArrowBackIcon} />
        </Pressable>
      )}
      {title && <Title title={title} />}
    </View>
  );
};
