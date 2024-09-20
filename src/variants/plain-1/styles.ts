import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  brand: '#04395E',
  text1: '#0C120C',
  text2: '#575759',
  background: '#E4E4E4',
  background2: '#c4c4c4',
};

// Create styles
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    color: colors.text1,
    padding: 10,
  },
  section: {
    // margin: 10,
    padding: 8,
    // gap: 8
  },
  titleBrand: {
    fontSize: 18,
    color: colors.brand,
    fontWeight: 'extrabold',
  },
  title1: {
    fontSize: 16,
    fontWeight: 9000,
  },
  title2: {
    fontSize: 13,
    fontWeight: 'thin',
  },
  title3: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 11,
    lineHeight: 1.2,
  },
  extraTextLarge: {
    fontSize: 14,
    color: colors.text2,
    marginBottom: 4,
  },
  extraTextSmall: {
    fontSize: 10,
    color: colors.text2,
  },
  divider: {
    height: 2,
    backgroundColor: colors.text1,
  },
  languageIcon: {
    width: 16,
    height: 16,
    margin: 2,
  },
});

export const s = StyleSheet.create({
  // Text
  textSm: {
    fontSize: 9,
  },
  text: {
    // Default text style
    fontSize: 10,
    lineHeight: 1.32,
    fontFamily: 'Poppins',
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
