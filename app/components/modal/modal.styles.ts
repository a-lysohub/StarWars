import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const modalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: spacing[1],
  },
  modalView: {
    backgroundColor: palette.white,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  whiteButtonText: {
    letterSpacing: 1.25,
    textAlign: 'center',
  },
  titleContainer: {
    width: '100%',
    height: spacing[5],
  },
  title: {
    justifyContent: 'flex-start',
    width: '90%',
    color: palette.ocean,
  },
  textModal: {
    width: '100%',
    lineHeight: 24,
    color: palette.ocean,
    justifyContent: 'center',
  },
});
