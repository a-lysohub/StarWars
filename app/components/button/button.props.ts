import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  title?: string;
  disabled?: boolean;
  onPress: VoidCallback;
  bgColor?: StyleProp<ViewStyle>;
  customStyles?: StyleProp<ViewStyle>;
  width?: number;
  children?: ReactNode;
};
