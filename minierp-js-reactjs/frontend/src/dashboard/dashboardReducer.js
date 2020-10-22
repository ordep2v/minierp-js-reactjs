const INITIAL_STATE = {summary: {credit: 0, debt: 0},
summaryProducts: {value: 0}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
            case 'PRODUCTS_SUMMARY_FETCHED':
                return { ...state, summaryProducts: action.payload.data }
        default:
            return state
    }
}

