import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
import {Button} from 'react-native-elements';
import ExpandCollapse from './ExpandCollapse';

const TransactionCard = (props) => {
    const { transaction, onIncrementAmount, expanded, onToggleExpand } = props

    return (
        <View style={styles.listItem}>
            <View style={styles.flex}>
                <View>
                    <Text>{transaction.category}</Text>
                    <Text>Amount: {transaction.amount}</Text>
                </View>
                <View style={styles.buttonPosition}>
                    <Button
                        onPress={onIncrementAmount}
                        title="Add 10"
                        buttonStyle={styles.buttonAdd}
                    />
                    <Button
                        onPress={onToggleExpand}
                        title={expanded ? 'Collapse' : 'Expand'}
                        buttonStyle={styles.buttonExpand}
                    />
                </View>
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
    buttonExpand: {
        width: 80,
        height: 5,
        backgroundColor: '#6c757d',
        marginVertical: 5
    },
    buttonAdd: {
        width: 80,
        height: 5,
        backgroundColor: '#1e7e34',
        marginVertical: 5
    },
    buttonPosition: {
        marginLeft: 'auto'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    }
  });