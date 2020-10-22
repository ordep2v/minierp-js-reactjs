import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './productsRegisterActions'
import SelectProvider from '../providersRegister/Select'

class ProductsRegisterForm extends Component {
    render() {

        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>

                <div className='box-body'>
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 3' placeholder='Informe o nome do produto'></Field>
                    <Field name='quantify' component={LabelAndInput} readOnly={readOnly}
                        label='Quantidade' cols='12 3' placeholder='Informe a quantidade em estoque' type='number'></Field>
                    <Field name='value' component={LabelAndInput} readOnly={readOnly}
                        label='Valor unitário(R$)' cols='12 3' placeholder='Informe o valor unitário' type='number'></Field>
                    <SelectProvider cols='12 3' label='Fornecedor' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }


}

ProductsRegisterForm = reduxForm({ form: 'productsRegisterForm', destroyOnUnmount: false })(ProductsRegisterForm)
const selector = formValueSelector('productsRegisterForm')

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(ProductsRegisterForm)