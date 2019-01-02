import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Button, Card} from 'react-native-elements';
import ExpandCollapse from './ExpandCollapse';

const TransactionCard = (props) => {
    const { transaction, onRemoveTransaction, onIncrementAmount, expanded, onToggleExpand } = props

    return (
        <Card>
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
                    <Button
                        onPress={onRemoveTransaction}
                        title="Remove"
                        buttonStyle={styles.buttonRemove}
                    />
                </View>
            </View>
            
            {expanded && <ExpandCollapse transaction={transaction} />}
        </Card>
    )
}

export default TransactionCard

const button = StyleSheet.create({
    width: 80,
    height: 5,
    marginVertical: 5
})

const styles = StyleSheet.create({
    amount: {
        marginVertical: 5
    },
    buttonAdd: {
        ...button,
        backgroundColor: '#1e7e34'
    },
    buttonExpand: {
        ...button,
        backgroundColor: '#6c757d'
    },
    buttonRemove: {
        ...button,
        backgroundColor: '#bd2130'
    },
    buttonPosition: {
        marginLeft: 'auto'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    }
});