import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const GlobalTextStyles = StyleSheet.create({
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    color: colors.secondary,
  },
  H2: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    color: colors.secondary,
  },
  H3: {
    fontSize: 16,

    lineHeight: 20,
    color: colors.secondary,
  },
  H4: {
    fontSize: 14,
    lineHeight: 18,

    color: colors.secondary,
  },
  P: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.secondary,
  },
});
