import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'
import ProductsRegisterReducer from '../productsRegister/productsRegisterReducer'
import ProvidersRegisterReducer from '../providersRegister/providersRegisterReducer'
import ClientsRegisterReducer from '../clientsRegister/clientsRegisterReducer'
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    clientsRegister: ClientsRegisterReducer,
    productsRegister: ProductsRegisterReducer,
    providersRegister: ProvidersRegisterReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer