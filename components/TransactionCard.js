import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
import {Button} from 'react-native-elements';
import ExpandCollapse from './ExpandCollapse';

const TransactionCard = (props) => {
    const { transaction, expanded, onToggleExpand } = props

    return (
        <View style={styles.listItem}>
            <View style={styles.flex}>
                <View>
                    <Text>{transaction.category}</Text>
                </View>
                <View style={styles.buttonPosition}>
                    <Button
                        onPress={onToggleExpand}
                        title={expanded ? 'Collapse' : 'Expand'}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
            <View style={styles.amount}>
                <Text>Amount: {transaction.amount}</Text>
            </View>
            {expanded && <ExpandCollapse transaction={transaction} />}
        </View>
    )
}

export default TransactionCard

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      justifyContent: 'center',
      alignContent: 'center'
    },
    amount: {
        marginVertical: 5
    },
    button: {
        width: '100%'
    },
    buttonPosition: {
        marginLeft: 'auto'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    }
  });