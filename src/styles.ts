import { StyleSheet } from '@react-pdf/renderer'

export const colors = {
  brand: '#587792',
  text1: '#0C120C',
  text2: '#616163'
}

// Create styles
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    color: colors.text1
  },
  section: {
    margin: 10,
    padding: 10,
    gap: 8
  },
  titleBrand: {
    fontSize: 18,
    color: colors.brand
  },
  title1: {
    fontSize: 16,
    fontWeight: 900
  },
  title2: {
    fontSize: 14,
    fontWeight: 'thin'
  },
  text: {
    fontSize: 12
  },
  extraTextLarge: {
    fontSize: 14,
    color: colors.text2
  },
  extraTextSmall: {
    fontSize: 12,
    color: colors.text2
  },
  divider: {
    height: 2,
    backgroundColor: colors.text1
  }
})
