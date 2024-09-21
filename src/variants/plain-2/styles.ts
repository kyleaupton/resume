import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  brand: '#04395E',
  text1: '#0C120C',
  text2: '#575759',
  background: '#E4E4E4',
  background2: '#c4c4c4',
};

export const s = StyleSheet.create({
  // Text
  textSm: {
    fontSize: 9,
  },
  text: {
    // Default text style
    fontSize: 10,
    lineHeight: 1.34,
    fontFamily: 'Open Sans',
  },
  textLg: {
    fontSize: 12,
  },
  textMuted: {
    color: colors.text2,
  },

  // Titles
  titleSm: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  titleMd: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleLg: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title2xl: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});
