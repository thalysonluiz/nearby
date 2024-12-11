import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100]
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300]
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
    marginBottom: 16
  }
});