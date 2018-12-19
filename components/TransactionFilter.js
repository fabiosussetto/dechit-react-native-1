import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';
import { connect } from "react-redux";

class TransactionFilter extends React.Component {

  render() {
    const {callbacks, expandedIds, transactions} = this.props
    return (
      <View style={styles.listItem}>
        <View style={styles.flex}>
          <Button 
            onPress={callbacks.allToggleCardExpanded}
            title={expandedIds.length === transactions.length ? 'Collapse All' : 'Expand All'}
            buttonStyle={styles.buttonExpandAll}
          />
        </View>
      </View>
    )
  }
}

export default connect()(TransactionFilter)

const button = StyleSheet.create({
  width: 100,
  height: 5,
  marginVertical: -10,
  marginHorizontal: -10,
})

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonExpandAll: {
      ...button,
      backgroundColor: '#1d2124'
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center', 
    marginLeft: 'auto'
  }
});