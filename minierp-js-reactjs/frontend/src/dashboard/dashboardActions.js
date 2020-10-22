import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

export function getSummaryEstoque() {
    const request = axios.get(`${BASE_URL}/productsRegister/summary`)
    return {
        type: 'PRODUCTS_SUMMARY_FETCHED',
        payload: request
    }
}