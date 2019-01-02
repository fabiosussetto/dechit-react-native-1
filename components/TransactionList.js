import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';
import * as actions from '../state/actions';
import { getFilteredTransactions } from '../state/selectors';
import { connect } from "react-redux";
import TransactionCard from './TransactionCard';

class TransactionList extends React.Component {

    isCardExpanded = (transaction) => {
        const { expandedIds } = this.props
        return expandedIds.indexOf(transaction.id) > -1
    }
    
    onAdd = () => {
        this.props.dispatch(actions.addTransaction())
    }

    render() {
        const { transactions, callbacks} = this.props

        const listElements = transactions.map((transaction) => (
            <TransactionCard 
              onToggleExpand={() => callbacks.toggleCardExpanded(transaction) }
              expanded={this.isCardExpanded(transaction)}
              transaction={transaction}
              onRemoveTransaction={callbacks.onRemoveTransaction.bind(this, transaction.id)}
              onIncrementAmount={callbacks.onIncrementAmount.bind(this, transaction.id)}
              key={transaction.id} 
            />
          ))

        return (
            <View style={styles.listItem}>
                <View>
                    {listElements}
                </View>
                <View style={styles.flex}>
                    <Button
                        onPress={this.onAdd}
                        title="Add"
                        buttonStyle={styles.buttonAddTransaction}
                    />
                    <View style={styles.mleftauto}>
                        <Button
                            onPress={callbacks.onClearTransactions}
                            title="Remove all"
                            buttonStyle={styles.buttonRemoveAll}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

/* TransactionList.propTypes = {
    transaction: PropTypes.object.isRequired
}; */

const mapStateToProps = (state) => {
    return {
      transactions: getFilteredTransactions(state)
    }
}
  
export default connect(mapStateToProps)(TransactionList);

const button = StyleSheet.create({
    width: 100,
    height: 5,
    marginVertical: 10,
    marginBottom: 20
});

const styles = StyleSheet.create({
    listItem: {
      justifyContent: 'center',
      alignContent: 'center'
    },
    buttonAddTransaction: {
        ...button,
        backgroundColor: '#007bff'
    },
    buttonRemoveAll: {
        ...button,
        backgroundColor: '#6c757d'
    },
    flex: {
        flex: 1,
        flexDirection: 'row'
    },
    mleftauto: {
        marginLeft: 'auto'
    }
});