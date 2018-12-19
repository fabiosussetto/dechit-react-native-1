export default function transactions(state, action) {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                list:  action.payload.list
            }
        case 'SET_LOADING':
            const loadingStatus = action.status
            return {
                ...state,
                loading: loadingStatus,
            }
        case 'APPEND_TRANSACTIONS':
            return {
                ...state,
                list:  [...state.list, ...action.payload.list]
            }
        case 'REMOVE_ALL_TRANSACTIONS':
            return {
              ...state,
              list: []
            }
        case 'ADD_TRANSACTION':
            const newTransaction = { id: Date.now(), ...action.payload }
            return {
                ...state,
                list: [...state.list, newTransaction]
            }
        case 'EDIT_TRANSACTION':
            const incrementedTransaction = action.transactions
            return {
              ...state,
              list: incrementedTransaction
            }
        default:
            return state;
    }
}
