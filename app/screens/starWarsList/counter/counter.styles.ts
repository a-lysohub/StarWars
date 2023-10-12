import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const counterStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '33%',
    padding: spacing[1],
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: palette.lightGrey,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
    paddingHorizontal: spacing[1],
    width: '100%',
    height: spacing[6],
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.middleGrey,
    borderRadius: spacing[1],
  },
  button: {
    marginBottom: 0,
    marginTop: 0,
  },
});
