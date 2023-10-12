import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const starWarsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: palette.lightGrey,
  },
  starWarsList: {
    width: '100%',
    alignItems: 'flex-start',
    marginHorizontal: spacing[2],
    paddingHorizontal: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: spacing[7],
    paddingTop: spacing[0],
    paddingBottom: spacing[3],
  },
  pageNumber: {
    color: palette.ocean,
    marginHorizontal: spacing[1],
    fontSize: 14,
  },
});
