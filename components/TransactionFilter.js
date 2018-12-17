import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
  } from 'react-native';

import PropTypes from 'prop-types';

const TransactionFilter =  (props) => {

    return (
      <View style={styles.listItem}>
        <Text>FILTERS HERE PLEASE</Text>
      </View>
    )

}

export default TransactionFilter

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
