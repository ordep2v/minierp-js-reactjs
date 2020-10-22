import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
        <MenuItem path='clientsRegister'
                label='Cadastro de Clientes' icon='address-book' />
        <MenuItem path='productsRegister'
                label='Cadastro de Produtos' icon='pencil' />
        <MenuItem path='providersRegister'
                label='Cadastro de Fornecedores' icon='truck' />
        </MenuTree>
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
    </ul>
)