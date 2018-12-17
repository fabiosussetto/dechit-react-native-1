import React from 'react';
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

import PropTypes from 'prop-types';

const TransactionListItem =  ({ transaction }) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.title}>
                <Text style={styles.text}>{transaction.category}</Text>
                <Text style={styles.text}>{transaction.amount}</Text>
            </View>
            <View style={styles.amount}>
                
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
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      justifyContent: 'center',
      alignContent: 'center'
    },
    title: {
        justifyContent: 'center',
    },
    text: {
        justifyContent: 'center',
    },
    amount: {
        marginLeft: 'auto',
        justifyContent: 'center'
    }
  });