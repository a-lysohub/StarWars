import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const peopleDetailsStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: spacing[0],
    alignItems: 'center',
  },
  img: {
    width: spacing[5],
    height: spacing[5],
    resizeMode: 'contain',
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
});
