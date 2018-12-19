import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Picker,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from "react-redux";

import { fetchTransactions } from '../state/actions'
import { getVisibleTransactions } from '../state/selectors'

import { MonoText } from '../components/StyledText';
import TransactionFilter from '../components/TransactionFilter'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  toggleCardExpanded = (transaction) => {
    this.props.dispatch({
      type: 'TOGGLE_CARD',
      payload: {transaction: transaction}
    });
  }

  render() {
    const callbacks = {
      toggleCardExpanded: this.toggleCardExpanded
    }

    return (
      <View style={styles.container}>
        <View>
          <TransactionFilter />
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          <Text>Add form here</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: getVisibleTransactions(state),
    loading: state.transactions.loading
  }
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 0,
    backgroundColor: '#fff',
  },
});
