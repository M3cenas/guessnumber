import { StyleSheet, Dimensions } from 'react-native'
// import { fontSize, margin, colors } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
      flex: 1,
      flexGrow: 0.4,
      justifyContent: 'center',
      elevation: 2,
      marginTop: 20,
      marginHorizontal: 20,
      // backgroundColor: 'black'
    },
    cardTitle: {
      flex: 1,
      flexGrow: 0.4,
      // fontSize: fontSize.title,
      fontWeight: 'bold',
      textAlign: 'center',
      // marginVertical: margin.medium,
      // color: colors.text,
      margin: 10,
      color: '#fff'
    },
    inputContainer: {
      flex: 1
        // marginHorizontal: margin.medium,
    },
    input: {
      borderBottomColor: '#5252BC',
      borderBottomWidth: 1,
      color: '#fff',
      marginBottom: 10,
      fontSize: 30,
      alignSelf: 'center',
    },
    label: {
        // fontSize: fontSize.text,
        fontSize: 20,
        fontWeight: 'bold',
        // color: colors.text,
        justifyContent: 'center',
        // alignSelf: 'center',
        marginBottom: 10,
        color: '#fff'
    },
    buttonsContainer: {
      height: height * 0.06,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // marginHorizontal: margin.medium,
    },
    containerConfirmed: {
      height: height * 0.4,
      justifyContent: 'center',
      // marginVertical: margin.medium,
    },
    confirmedText: {
      // fontSize: fontSize.large,
      fontWeight: 'bold',
      // color: colors.primary,
      justifyContent: 'center',
      alignSelf: 'center',
    }
});