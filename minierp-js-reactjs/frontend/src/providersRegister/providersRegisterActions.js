import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {
    name: [],
    city: [],
    contact: [],
    econtact: []
    
}

export function getList() {
    const request = axios.get(`${BASE_URL}/providersRegister`)
    return {
        type: 'PROVIDERS_REGISTER_FETCHED',
        payload: request
    }
}

export function exclude(values) {
    return submit(values, 'delete')
}
export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/providersRegister/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso!', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro!', error))
            })
    }

}

export function showUpdate(ProvidersRegister) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('ProvidersRegisterForm', ProvidersRegister)
    ] // reusar o metodo depois, TODO
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('ProvidersRegisterForm', INITIAL_VALUES)


    ]
}

export function showDelete(ProvidersRegister) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('ProvidersRegisterForm', ProvidersRegister)
    ]
}