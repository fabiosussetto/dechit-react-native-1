import React from 'react';
import {
    View,
    StyleSheet
  } from 'react-native';
import { getFilteredTransactions } from '../state/selectors'
import { connect } from "react-redux";
import TransactionCard from './TransactionCard'

class TransactionList extends React.Component {

    isCardExpanded = (transaction) => {
        const { expandedIds } = this.props
        return expandedIds.indexOf(transaction.id) > -1
    }

    render() {
        const { transactions, callbacks} = this.props

        const listElements = transactions.map((transaction) => (
            <TransactionCard 
              onToggleExpand={() => callbacks.toggleCardExpanded(transaction) }
              expanded={this.isCardExpanded(transaction)}
              transaction={transaction}
              onIncrementAmount={callbacks.onIncrementAmount.bind(this, transaction.id)}
              key={transaction.id} 
            />
          ))

        return (
            <View style={styles.listItem}>
                {listElements}
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

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderBottomColor: '#ddd',
      justifyContent: 'center',
      alignContent: 'center'
    }
  });