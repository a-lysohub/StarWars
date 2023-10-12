import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const peopleItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: spacing[1],
    marginBottom: spacing[1],
    marginHorizontal: spacing[2],
    padding: spacing[1],
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.middleGrey,
  },
  title: {
    height: spacing[6],
    color: palette.ocean,
    justifyContent: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  img: {
    width: spacing[4],
    height: spacing[4],
    resizeMode: 'contain',
    margin: spacing[0],
  },
});
