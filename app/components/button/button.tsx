import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { ButtonProps } from './button.props';
import { buttonStyles } from './button.styles';

import { palette, typography } from '@app/theme';

export const Button: FC<ButtonProps> = ({
  disabled = false,
  title = '',
  width,
  onPress,
  customStyles,
  children,
}) => {
  return (
    <Pressable
      style={[
        buttonStyles.button,
        !!width && { width },
        disabled && buttonStyles.transparent,
        customStyles,
      ]}
      onPress={onPress}>
      {children}
      {!!title && (
        <Text
          allowFontScaling={false}
          style={[
            typography.button,
            {
              color: palette.white,
            },
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
