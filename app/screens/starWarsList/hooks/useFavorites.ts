import { useCallback, useMemo, useState } from 'react';

import type { FullPeopleType } from '@app/services';

import { FEMALE_GENDER, MALE_GENDER } from '../constants';

interface FavoritePerson {
  id: string;
  gender: string;
}

interface Response {
  favoriteIds: string[];
  resetFavoriteIds: () => void;
  toggleFan: (person: FullPeopleType) => void;
  maleCount: number;
  femaleCount: number;
  otherCount: number;
}

export const useFavorites = (): Response => {
  const [favorites, setFavorites] = useState<FavoritePerson[]>([]);

  const resetFavoriteIds = useCallback(() => {
    setFavorites([]);
  }, []);

  const toggleFan = useCallback((person: FullPeopleType) => {
    setFavorites(favPerson => {
      const isPersonPresent = favPerson.some(({ id }) => id === person.url);
      if (isPersonPresent) {
        return favPerson.filter(({ id }) => id !== person.url);
      }
      return [...favPerson, { id: person.url, gender: person.gender }];
    });
  }, []);

  const { favoriteIds, maleCount, femaleCount, otherCount } = useMemo(
    () => ({
      favoriteIds: favorites.map(({ id }) => id),
      maleCount: favorites.filter(({ gender }) => gender === MALE_GENDER)
        .length,
      femaleCount: favorites.filter(({ gender }) => gender === FEMALE_GENDER)
        .length,
      otherCount: favorites.filter(
        ({ gender }) => gender !== MALE_GENDER && gender !== FEMALE_GENDER,
      ).length,
    }),
    [favorites],
  );

  return {
    favoriteIds,
    resetFavoriteIds,
    toggleFan,
    maleCount,
    femaleCount,
    otherCount,
  };
};
