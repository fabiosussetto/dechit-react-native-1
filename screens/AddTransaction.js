import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Content, Toast, Text, Form, Item, Input, Label, Button } from 'native-base';
import NumericInput from 'react-native-numeric-input'
import { connect } from "react-redux";
import { addTransactionFromForm } from '../state/actions';
import { getFilteredTransactions } from '../state/selectors';
import * as Expo from 'expo';

class AddTransaction extends Component {

    state = {
        id: 0,
        category: '',
        amount: 0,
        description: '',
        isReady: false
    }

    /* Ho dovuto aggiungere manualmente il percorso di questo font, 
    altrimenti andava in errore quello che scrivevo nel componente Text della libreria native-base */
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady:true})
    }
    
    static navigationOptions = {
        title: 'Add New Transaction',
    };

    handleCategoryChange = (value) => {
        this.setState({
          category: value
        })
    }

    handleAmountChange = (value) => {
        this.setState({
            amount: value
        })
    }

    handleDescriptionChange = (value) => {
        this.setState({
            description: value
        })
    }

    handleSubmit = () => {
        Toast.show({
            text: 'Transaction successfully saved!',
            buttonText: 'Close',
            duration: 3000,
            position: 'top'
        })
        this.resetForm();
        const newTransaction = this.state;
        const {transactions} = this.props;
        newTransaction.id = transactions.length+1;
        this.props.dispatch(addTransactionFromForm(newTransaction)); 
    }

    resetForm = () => {
        this.setState({
            id: 0,
            category: '',
            amount: 0,
            description: '',
        });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Label>Category</Label>
                            <Input value={this.state.category} onChangeText={this.handleCategoryChange} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Amount</Label>
                            <NumericInput 
                                initValue={this.state.amount}
                                onChange={this.handleAmountChange}
                            />
                        </Item>
                        <Item>
                            <Label>Description</Label>
                            <Input multiline={true} numberOfLines={5} value={this.state.description} onChangeText={this.handleDescriptionChange} />
                        </Item>
                        <Item last>
                            <Button
                                onPress={this.handleSubmit}
                                style={styles.buttonSend}
                            >
                                <Text>Send</Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      transactions: getFilteredTransactions(state),
    }
}
  
export default connect(mapStateToProps)(AddTransaction);

const styles = StyleSheet.create({
    buttonSend: {
        backgroundColor: '#007bff',
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20
    }
});