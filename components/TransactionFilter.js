import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import {Button, FormLabel} from 'react-native-elements';
import { connect } from "react-redux";
import { setFilterAmount } from '../state/actions';

const shortcuts = [
  { label: 'Cheap', maxAmount: 10 },
  { label: 'Average', maxAmount: 30 },
  { label: 'Expensive', maxAmount: 9999 }
]

class TransactionFilter extends React.Component {

  state = {
    amount: 0
  }

  onSubmit = () => {
    this.props.dispatch(setFilterAmount(this.state.amount));
  }

  applyShortcut = (shortcut) => {
    this.setState({
        amount: shortcut.maxAmount
    }, () => {
      this.props.dispatch(setFilterAmount(this.state.amount));
    })
  }

  onAmountChange = (value) => {
    this.setState({
      amount: value
    })
  }

  resetAmount = () => {
    this.setState({
        amount: 0
    })
  }

  render() {
    const {callbacks, expandedIds, transactions} = this.props
    return (
      <View style={styles.listItem}>
        <View style={styles.flex}>
          <FormLabel>Amount: </FormLabel>
          <NumericInput
            initValue={this.state.amount}
            //value={this.state.amount} mostra a video sempre lo zero
            onChange={this.onAmountChange}
            type='plus-minus'
          />
        </View>
        <View style={[styles.flex, styles.mtop10]}>
          {shortcuts.map(shortcut => (
            <TouchableHighlight 
              key={shortcut.label}
              onPress={() => this.applyShortcut(shortcut)}
              style={styles.badge}
            >
              <Text style={styles.color}>{shortcut.label}</Text>
            </TouchableHighlight>
          ))}
        </View>
        <View style={[styles.flex, styles.mtop10]}>
          <Button
            onPress={this.onSubmit}
            title="Filter"
            buttonStyle={styles.buttonFilter}
          />
          <Button 
            onPress={this.resetAmount}
            title="Reset"
            buttonStyle={styles.buttonReset}
          />
          <View style={styles.mleftauto}>
            <Button 
              onPress={callbacks.allToggleCardExpanded}
              title={expandedIds.length === transactions.length ? 'Collapse All' : 'Expand All'}
              buttonStyle={styles.buttonExpandAll}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(TransactionFilter)

const button = StyleSheet.create({
  width: 100,
  height: 5
});

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonExpandAll: {
    ...button,
    backgroundColor: '#1d2124'
  },
  buttonFilter: {
    ...button,
    width: 60,
    backgroundColor: '#007bff'
  },
  buttonReset: {
    ...button,
    width: 60,
    backgroundColor: '#545b62'
  },
  mleftauto: {
    marginLeft: 'auto'
  },
  card: {
    borderWidth: 1,
    width: 100,
    height: 25,
    marginTop: 10,
    paddingLeft: 5 
  },
  flex: {
    flex: 1,
    flexDirection: 'row'
  },
  mtop10: {
    marginTop: 10
  },
  badge: {
    marginLeft: 15,
    marginRight: 5,
    backgroundColor: '#6c757d',
    paddingHorizontal: 5,
    borderRadius: 15,
  },
  color: {
    color: '#fff'
  }
});