import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Textarea, Form, Item, Input, Label } from 'native-base';
import NumericInput from 'react-native-numeric-input'
import { Button } from 'react-native-elements';
import { connect } from "react-redux";
import {addTransactionFromForm} from '../state/actions';
import { getFilteredTransactions } from '../state/selectors';

class AddTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            category: '',
            amount: 0,
            description: ''
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    static navigationOptions = {
        title: 'Add New Transaction',
    };

    handleCategoryChange = (value) => {
        console.log(value)
        this.setState({
          category: value
        })
    }

    handleAmountChange = (value) => {
        console.log(value)
        this.setState({
          amount: value
        })
    }

    handleDescriptionChange = (value) => {
        console.log('dio porco')
        console.log(value)
        this.setState({
          description: value
        })
    }

    handleSubmit = () => {
        console.log('ciao')
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
            description: ''
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Category</Label>
                        <Input onChangeText={this.handleCategoryChange} />
                    </Item>
                    <Item fixedLabel>
                        <Label>Amount</Label>
                        <NumericInput 
                            initValue={this.state.amount}
                            onChange={this.handleAmountChange}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Textarea rowSpan={5} value={this.state.description} onChangeText={this.handleDescriptionChange} />
                    </Item>
                    <Item last>
                        <Button
                            onPress={this.handleSubmit}
                            title="Send"
                            containerViewStyle={styles.buttonContainer}
                            buttonStyle={styles.buttonSend}
                        />
                    </Item>
                </Form>
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
    buttonContainer: {
        width: '100%',
    },
    buttonSend: {
        backgroundColor: '#007bff',
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20
    }
});