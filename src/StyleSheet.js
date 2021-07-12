import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  inputBox: {
    marginTop: 15,
    width: width * 2 / 3,
    height: 48,
    borderRadius: 5,
    backgroundColor: '#EFF2F5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bigWhite: {
    fontSize: 22,
    marginTop: 30,
    marginLeft: 20,
    color: 'white',
  },
  bigBlue: {
    fontSize: 20,
    color: '#106DB6',
  },
  smallGrey: {
    fontSize: 14,
    color: '#666666'
  },
  boldSmallGrey: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  smallBlue: {
    fontSize: 15,
    color: '#106DB6',
  },
  bigBlack: {
    fontSize: 40,
    color: 'black',
  },
  boldSmallBlack: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  textBox: {
    marginTop: 10,
    padding: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#EFF2F5',
  },
  shadowBox: {
    height: height / 4,
    padding: 2,
    borderRadius: 20,
    backgroundColor: '#F5FDFF',
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.15,
    elevation: 5,
  },
  shadowDetailBox: {
    marginTop: 5,
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.15,
    elevation: 5,
  },
  shadowBoxText: {
    marginLeft: 5,
    fontSize: 15,
  },
  findingBox: {
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 25 / 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorBox: {
    height: 10,
    width: 15,
    borderRadius: 5,
  },
  backButton: {
    marginTop: 35,
    marginLeft: 10,
  },
  circleBlue: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#1487E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1487E1',
  },
  calloutText: {
    fontSize: 9,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});