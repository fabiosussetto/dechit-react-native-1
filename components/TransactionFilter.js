import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import {Button} from 'react-native-elements';
import { connect } from "react-redux";
import { setFilterAmount } from '../state/actions';

class TransactionFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(setFilterAmount(this.state.amount));
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
        <View style={styles.mleft20}>
          <Text style={styles.h2}>My Bank Account</Text>
        </View>
        <View style={styles.mleft20}>
          <NumericInput
            value={this.state.amount}
            onChange={this.onAmountChange}
            type='plus-minus'
          />
        </View>
        <View style={styles.flex}>
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
  mleft20: {
    marginLeft: 15
  },
  h2: {
    fontSize: 20
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
    flexDirection: 'row',
    marginTop: 10
  }
});