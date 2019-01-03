import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Content, Textarea, Toast, Text, Form, Item, Input, Label, Button } from 'native-base';
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
        showToast: false,
        isReady: false
    }

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
        })
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
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
                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Textarea rowSpan={5} value={this.state.description} onChangeText={this.handleDescriptionChange} />
                        </Item>
                        <Item padder last>
                            {/* <Button
                                onPress={this.handleSubmit}
                                title="Send"
                                containerViewStyle={styles.buttonContainer}
                                buttonStyle={styles.buttonSend}
                            /> */}
                            <Button full
                                onPress={this.handleSubmit}
                                //containerViewStyle={styles.buttonContainer}
                                //buttonStyle={styles.buttonSend}
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
    buttonContainer: {
        width: '100%',
    },
    buttonSend: {
        //backgroundColor: '#007bff',
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20
    }
});