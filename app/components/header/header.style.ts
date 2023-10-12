import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    height: spacing[7],
    backgroundColor: palette.darkGrey,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: spacing[1],
  },
});
