import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

const ExpandCollapse = (props) => {
    const { transaction } = props
    return(
        <View style={styles.description}>
            <Text>{transaction.description}</Text>
        </View>
    )
}

export default ExpandCollapse

const styles = StyleSheet.create({
    description: {
        marginVertical: 5
    }
});