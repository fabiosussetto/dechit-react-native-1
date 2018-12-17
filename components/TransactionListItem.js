import React from 'react';
import {
    Text,
    Button,
    TouchableOpacity,
    View,
    StyleSheet,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const TransactionListItem =  (props) => {

  const { transaction,
          onIncrementAmount,
          onDecrementAmount,
          expanded,
          onToggleExpand,
          onRemoveTransacion,
          currency,
          childKey } = props

    const colorRow = (childKey%2 === 0) ? 'colorRow1' : 'colorRow2'

    return (
        <View style={[styles.listItem,styles[colorRow]]}>
            <View style={styles.title}>
                <Text style={styles.text}>{transaction.category} *{childKey}</Text>
            </View>
            <View style={styles.amount}>
                <Text style={styles.text}>{transaction.amount}</Text>
            </View>
            <View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onToggleExpand} style={styles.button}>
                  <Text style={styles.buttonText}>{( expanded ? 'Hide' : 'Show' ) + ' description'}</Text>
                </TouchableOpacity>
              </View>
              <View>
                {expanded && <Text style={[styles.text,styles.description]}>{transaction.description}</Text> }
              </View>
            </View>
        </View>
    )

}

TransactionListItem.propTypes = {
    transaction: PropTypes.object.isRequired
};


export default TransactionListItem

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    colorRow1: {
      backgroundColor: '#eee'
    },
    colorRow2: {
      backgroundColor: '#fff'
    },
    title: {
        justifyContent: 'center',
    },
    text: {
        justifyContent: 'center',
    },
    description: {
        paddingTop: 10,
    },
    amount: {
        marginLeft: 'auto',
        justifyContent: 'center'
    },
    buttonContainer: {
      alignItems:'center',
      color: '#fff'
    },
    button: {
      padding: 5,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
    buttonText: {
      color: '#fff'
    }
  });
