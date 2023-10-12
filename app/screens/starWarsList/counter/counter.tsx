import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { counterStyles } from './counter.styles';
import { CounterProps, FansBlockProps } from './counter.props';
import { Button } from '@app/components';

import { typography } from '@app/theme';

const FansBlock: React.FC<FansBlockProps> = ({ text, count }) => {
  return (
    <View style={counterStyles.item}>
      <Text style={typography.item}>{text}</Text>
      <Text style={typography.item}>{count}</Text>
    </View>
  );
};

export const CounterBlock: React.FC<CounterProps> = ({
  maleCount,
  femaleCount,
  otherCount,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <View style={counterStyles.container}>
      <FansBlock text={t('femaleFans')} count={femaleCount} />
      <FansBlock text={t('maleFans')} count={maleCount} />
      <FansBlock text={t('others')} count={otherCount} />
      <Button
        customStyles={counterStyles.button}
        onPress={onClick}
        title={t('clearFans')}
      />
    </View>
  );
};
