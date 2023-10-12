import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { StarWarsScreens, useNavigation } from '@app/navigation';
import type { RouteMap } from '@app/navigation/stackNavigation/screenTypes';

import { FullPeopleType } from '@app/services';

import { useFavorites, useGetPeople, usePagination } from './hooks';
import { Button, Header } from '@app/components';
import { CounterBlock } from './counter/counter';
import { PeopleItem } from '@app/screens';
import { starWarsListStyles } from './starWarsList.styles';

import { typography } from '@app/theme';

interface Props {
  route: {
    params?: RouteMap[StarWarsScreens.starWarsList];
  };
}

export const StarWarsList: FC<Props> = ({ route: { params } }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const {
    currentPage,
    gotoNextPage,
    gotoPrevPage,
    isNextPageExist,
    isPrevPageExist,
  } = usePagination();
  const { isLoading, people } = useGetPeople({ pageNum: currentPage });

  const {
    favoriteIds,
    toggleFan,
    resetFavoriteIds,
    maleCount,
    femaleCount,
    otherCount,
  } = useFavorites();

  useEffect(() => {
    if (params?.item != null) {
      toggleFan(params.item);
    }
  }, [params, toggleFan]);

  const selectProductHandler = (item: FullPeopleType) => {
    navigation.navigate(StarWarsScreens.peopleDetails, {
      item,
      fan: favoriteIds.includes(item.url),
    });
  };

  return (
    <SafeAreaView style={starWarsListStyles.container}>
      <Header title={t('starWarsList')} />
      <CounterBlock
        maleCount={maleCount}
        femaleCount={femaleCount}
        otherCount={otherCount}
        onClick={resetFavoriteIds}
      />
      <ScrollView contentContainerStyle={starWarsListStyles.starWarsList}>
        {isLoading && <Text>Loading..</Text>}
        {!isLoading &&
          people.map(item => (
            <PeopleItem
              key={item.url}
              name={item.name}
              fan={favoriteIds.includes(item.url)}
              onSelect={() => selectProductHandler(item)}
            />
          ))}
      </ScrollView>
      <View style={starWarsListStyles.buttonContainer}>
        <Button
          width={30}
          onPress={gotoPrevPage}
          disabled={!isPrevPageExist}
          title={'<'}
        />
        <Text style={[starWarsListStyles.pageNumber, typography.titleModal]}>
          {currentPage}
        </Text>
        <Button
          width={30}
          onPress={gotoNextPage}
          disabled={!isNextPageExist}
          title={'>'}
        />
      </View>
    </SafeAreaView>
  );
};
