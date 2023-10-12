import React from 'react';
import { Text } from 'react-native';

import { HeaderProps } from '../header/header.props';
import { titleStyles } from './title.styles';

import { typography } from '@app/theme';

export const Title: React.FC<HeaderProps> = ({ title }) => {
  return <Text style={[titleStyles.title, typography.title]}>{title}</Text>;
};
