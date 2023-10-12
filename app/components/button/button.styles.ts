import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: spacing[0],
    height: spacing[6],
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing[4],
    backgroundColor: palette.darkGrey,
    paddingHorizontal: spacing[1],
  },
  transparent: {
    opacity: 0.5,
  },
  gradient: {
    width: '100%',
    borderRadius: spacing[0],
    height: spacing[6],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
