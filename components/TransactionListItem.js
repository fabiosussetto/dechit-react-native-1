import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    ThemeProvider,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

// elementi custom (NOTE: Button lo uso da qui e non da react-native)
import Btn from './Btn'


// stile condiviso
import {LayoutStyle, BtnStyle, BtnStyleDanger, BtnStyleSuccess} from '../stylesheets/styles';
import { Sizes } from '../constants/Theme';

const TransactionListItem =  (props) => {

  const { transaction,
          onIncrementAmount,
          onDecrementAmount,
          expanded,
          onToggleExpand,
          onRemoveTransacion,
          currency,
          childKey } = props

    const bkgElem = (childKey%2 === 0) ? 'evenRow' : 'oddRow'
    const expandStatusLabel = ( expanded ? 'Hide' : 'Show' )

    return (
        <View style={[LayoutStyle[bkgElem],s.listItem]}>
            <View style={LayoutStyle.rowContainer}>
              <Text style={s.title}>{transaction.category}</Text>
            </View>
            <View style={LayoutStyle.rowContainer}>
              <View style={[BtnStyle.container,s.btnContainer]}>
                <Btn onPress={onToggleExpand} style={[BtnStyleSuccess.box,s.btnExpand]} >{expandStatusLabel}</Btn>
                <View style={[BtnStyle.container]}>
                  <Btn onPress={onDecrementAmount} style={BtnStyle.box} >-</Btn>
                  <Text style={s.amount}>{transaction.amount}</Text>
                  <Btn onPress={onIncrementAmount} style={BtnStyle.box} >+</Btn>
                </View>
                <Btn onPress={onRemoveTransacion} style={BtnStyleDanger.box} >X</Btn>
              </View>
              <View>
                {expanded && <Text style={[s.description]}>{transaction.description}</Text> }
              </View>
            </View>
        </View>
    )

}

TransactionListItem.propTypes = {
    transaction: PropTypes.object.isRequired
};


export default TransactionListItem

const s = StyleSheet.create({
    listItem: {
      padding: Sizes.gap.default,
    },
    title: {
      paddingBottom: Sizes.gap.default,
      fontSize: Sizes.font.big,
      fontWeight: '700',
    },
    description: {
        paddingTop: Sizes.gap.default,
    },
    amount: {
      paddingLeft: Sizes.gap.small,
      paddingRight: Sizes.gap.small,
      minWidth: 35,
      textAlign: 'center'
    },
    btnContainer: {
      //justifyContent: 'flex-end'
      justifyContent: 'space-between'
    },
    btnExpand: {
      minWidth: 70
    }
  });
