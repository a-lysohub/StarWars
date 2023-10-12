import React, { FC, useCallback, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { RouteMap } from '@app/navigation/stackNavigation/screenTypes';

import { StarWarsScreens, useNavigation } from '@app/navigation';

import { Header, ModalNotification } from '@app/components';
import { peopleDetailsStyles } from './peopleDetails.styles';
import { InfoBlockProps } from './peopleDetails.props';

import { typography } from '@app/theme';

interface Props {
  route: {
    params: RouteMap[StarWarsScreens.peopleDetails];
  };
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ item, info }) => {
  return (
    <View style={peopleDetailsStyles.item}>
      <Text style={typography.item}>{item}</Text>
      <Text style={typography.item}>{info}</Text>
    </View>
  );
};

export const PeopleDetails: FC<Props> = ({ route }) => {
  const navigation = useNavigation();

  const { t } = useTranslation();
  const { item, fan } = route.params;

  const [isLikeModalVisible, setLikeModalVisible] = useState(false);

  const { name, gender, height, mass, birth_year } = item;

  const addLikeHandler = useCallback(() => {
    navigation.navigate({
      name: StarWarsScreens.starWarsList,
      params: { item },
      merge: true,
    });
  }, [item, navigation]);

  const handleClickPerson = () => setLikeModalVisible(true);

  const NotLikedImage = require('../../assets/icons/love_red.png');
  const LikedImage = require('../../assets/icons/loveFull_red.png');

  return (
    <View>
      <Header backBtn title={t('peopleDetails')} />
      <Pressable
        style={peopleDetailsStyles.container}
        onPress={handleClickPerson}>
        <InfoBlock item={t('name')} info={name} />
        <InfoBlock item={t('gender')} info={gender} />
        <InfoBlock item={t('height')} info={height} />
        <InfoBlock item={t('mass')} info={mass} />
        <InfoBlock item={t('birthYear')} info={birth_year} />
        {fan ? (
          <Image source={LikedImage} style={peopleDetailsStyles.img} />
        ) : (
          <Image source={NotLikedImage} style={peopleDetailsStyles.img} />
        )}
      </Pressable>
      <ModalNotification
        isVisible={isLikeModalVisible}
        title={t('fanModal.fan')}
        text={t('fanModal.text')}
        onCancelTitle={t('cancel')}
        cancelHandler={() => setLikeModalVisible(!isLikeModalVisible)}
        onSuccessTitle={t('fanModal.fan')}
        successHandler={addLikeHandler}
      />
    </View>
  );
};
