import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';
import { connect } from "react-redux";
import TransactionListItem from './TransactionListItem'
import { incrementAmount, decrementAmount, removeTransacion, editTransaction } from '../state/actions'
import { getVisibleTransactions } from '../state/selectors'
import { fetchTransactions, fetchCategoriesList } from '../state/actions'

class TransactionList extends Component {

  componentDidMount () {
    this.props.dispatch(fetchTransactions())
    this.props.dispatch(fetchCategoriesList())
  }

  isCardExpanded = (transaction,expandedIds) => {
    //* indica se la transazione passata esiste o no nell'array di quelle espanse.
    // ritorna un boolean che mi serve come condizione nel componente della card
    const result = expandedIds.ids.indexOf(transaction.id) > -1;
    return result
  }

  onClearTransactions = () => {
    this.props.dispatch({
      type: 'REMOVE_ALL_TRANSACTIONS',
    })
  }

  onAddTransaction = () => {
    this.props.dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        amount: '10',
        description: 'Woooha!',
      }
    })
  }

  incrementAmount = (transactionId) => {
    this.props.dispatch(incrementAmount(transactionId))
  }

  decrementAmount = (transactionId) => {
    this.props.dispatch(decrementAmount(transactionId))
  }

  editTransaction = (transactionId) => {
    this.props.dispatch(editTransaction(transactionId))
  }

  removeTransacion = (transactionId) => {
    this.props.dispatch(removeTransacion(transactionId))
  }

  render() {
    //* uso le props prese dallo stato generale e mappate con mapStateToProps
    const { transactions, callbacks, loading, expandedTransactionIds, currency } = this.props

    //* se loading è true, ritorno solo il loader stoppando così l'esecuzione
    if (loading) {
      return (
        <View className="d-flex justify-content-center align-items-center"
             style={{ minHeight: 60 }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    //* Se voglio cambiare il titolo della transazione con il nome della lista titoli
    // e non col valore come è scritto nel json, devo mappare le mie transazioni
    const transactionsTransformed = transactions.map(function(transaction) {
      // TODO ERROR: sostituire con le categorie da api
      const catsObjs = [ {
              name: "Books",
              value: "books"
              }, {
              name: "Cat food",
              value: "cat"
              }, {
              name: "Home",
              value: "home"
              }, {
              name: "Grocery",
              value: "grocery"
            } ]

       //* filtro solo il titolo corrente
       let curObj = catsObjs.filter(item => item.value === transaction.category)
       //* fallback se non ci sono risultati in filter
       curObj = (curObj.length > 0) ? curObj : [{
                                                 name: "Unknown",
                                                 value: "unknown"
                                               }]
       //* estraggo il primo (e unico) elemento
       const current = curObj.shift();

       //* applico il risultato alla transaction corrente,
       // creando la property "label, prima inesistente
       return transaction = {
         ...transaction,
         category: current.value,
         label: current.name
       }

    } )

    //* passo alla mia funzione isCardExpanded() sia la transazione corrente
    // che l array delle transazioni espanse da controllare
    const listElements = transactionsTransformed.map((transaction,index) => (
      <TransactionListItem
          onToggleExpand={() => callbacks.toggleCardExpanded(transaction) }
          expanded={this.isCardExpanded(transaction,expandedTransactionIds)}
          transaction={transaction}
          currency={currency}
          onEditTransaction={this.editTransaction.bind(this, transaction.id)}
          onDecrementAmount={this.decrementAmount.bind(this, transaction.id)}
          onIncrementAmount={this.incrementAmount.bind(this, transaction.id)}
          onRemoveTransacion={this.removeTransacion.bind(this, transaction.id)}
          key={index}
          childKey={index}
        />
    ))

    return (
      <React.Fragment>
        {listElements}
        {transactions.length > 0 && (
          <Button onPress={this.onClearTransactions} title="Remove all"/>
        )}
        {transactions.length === 0 && (
          <Button onPress={this.onAddTransaction} title="Add Default" />
        )}
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    transactions: getVisibleTransactions(state),
    currency: state.currency,
    loading: state.transactions.loading,
    //* mappo nelle props anche le transazioni espanse per usarle con this.props
    expandedTransactionIds: state.expandedTransactionIds,
    //* mappo i titoli
    categories: state.categories
  }
}

export default connect(mapStateToProps)(TransactionList);
