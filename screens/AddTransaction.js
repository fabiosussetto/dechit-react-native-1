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
        /*this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }
    
    static navigationOptions = {
        title: 'Add New Transaction',
    };

    /* handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    } */

    onAmountChange = (value) => {
        this.setState({
          amount: value
        })
    }

    handleSubmit = () => {
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
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Amount</Label>
                        <NumericInput 
                            initValue={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Textarea rowSpan={5} />
                    </Item>
                    <Item last>
                        <Button
                            onPress={this.onSubmit}
                            title="Send"
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
    buttonSend: {
      width: '100%',
      backgroundColor: '#007bff',
      margin: 20,
      justifyContent: 'center',
      alignContent: 'center'
    }
  });