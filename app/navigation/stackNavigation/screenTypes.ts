import type { FullPeopleType } from '@app/services';

export enum StarWarsScreens {
  peopleDetails = 'PeopleDetails',
  starWarsList = 'StarWarsList',
}

export type RouteMap = {
  [StarWarsScreens.peopleDetails]: {
    item: FullPeopleType;
    fan: boolean;
  };
  [StarWarsScreens.starWarsList]: {
    item?: FullPeopleType;
  };
};
