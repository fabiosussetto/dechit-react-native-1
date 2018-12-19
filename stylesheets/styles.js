import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../constants/Theme';

export const LayoutStyle = StyleSheet.create({
  debug: debugStyle(),
  rowContainer: {
    width: '100%',
  },
  evenRow: {
    backgroundColor: Colors.even,
  },
  oddRow: {
    backgroundColor: Colors.odd,
  },
});

const BtnStyleGap = Sizes.gap.default;
export const BtnStyle = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: -(BtnStyleGap/2),
    marginRight: -(BtnStyleGap/2),
  },
  box: {
    padding: BtnStyleGap,
    marginTop: 0,
    marginRight: 0,
    marginLeft: BtnStyleGap/2,
    marginRight: BtnStyleGap/2,
    backgroundColor: Colors.button.primary.background,
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: Sizes.button.minWidth,
  },
  text: {
    color: Colors.button.primary.text,
    textAlign: 'center',
    width: '100%',
    padding: 0,
    margin: 0,
  },
});

export const BtnStyleSuccess = StyleSheet.create({
  ...this.BtnStyle,
  box: { backgroundColor: Colors.button.success.background },
  text: { color: Colors.button.success.text }
});

export const BtnStyleWarning = StyleSheet.create({
  ...this.BtnStyle,
  box: { backgroundColor: Colors.button.warning.background },
  text: { color: Colors.button.warning.text }
});

export const BtnStyleDanger = StyleSheet.create({
  ...this.BtnStyle,
  box: { backgroundColor: Colors.button.danger.background },
  text: { color: Colors.button.danger.text }
});

function debugStyle() {
  if (__DEV__) {
    return {
      borderWidth: 1,
      borderColor: 'pink',
      borderStyle: 'solid',
    }
  } else {
    return {}
  }
}
