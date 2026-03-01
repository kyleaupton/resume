import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  name: '#111827',
  sectionHeader: '#374151',
  divider: '#E5E7EB',
  icon: '#4B5563',
  text1: '#1F2937',
  text2: '#6B7280',
};

export const s = StyleSheet.create({
  // Text
  textSm: {
    fontSize: 9,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    fontFamily: 'Open Sans',
    color: colors.text1,
  },
  textMuted: {
    color: colors.text2,
  },

  // Titles
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.name,
  },
  subtitle: {
    fontWeight: 'semibold',
    fontSize: 12,
    color: colors.sectionHeader,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.sectionHeader,
  },
  titleSm: {
    fontWeight: 'bold',
    fontSize: 10,
  },
});
