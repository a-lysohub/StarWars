import {
  NavigationProp,
  useNavigation as useNavigationBase,
} from '@react-navigation/native';

import { RouteMap } from './stackNavigation/screenTypes';

export const useNavigation: () => NavigationProp<RouteMap> = useNavigationBase;
