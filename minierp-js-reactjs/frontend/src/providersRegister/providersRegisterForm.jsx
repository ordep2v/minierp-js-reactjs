import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './providersRegisterActions'

class ProvidersRegisterForm extends Component {
    render() {
        const { handleSubmit, readOnly} = this.props

        return (
            <form onSubmit={handleSubmit}>
                
                <div className='box-body'>
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 3' placeholder='Informe o nome do fornecedor'></Field>
                    <Field name='city' component={LabelAndInput} readOnly={readOnly}
                        label='Cidade' cols='12 3' placeholder='Informe o endereço'></Field>
                        <Field name='district' component={LabelAndInput} readOnly={readOnly}
                        label='UF' cols='12 1' placeholder='UF'></Field>
                    <Field name='contact' component={LabelAndInput} readOnly={readOnly}
                        label='Número telefônico' cols='12 2' placeholder='DDD Número'></Field>
                        <Field name='econtact' component={LabelAndInput} readOnly={readOnly}
                        label='E-mail' cols='12 3' placeholder='Informe e-mail de contato'></Field>
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

ProvidersRegisterForm = reduxForm({ form: 'ProvidersRegisterForm', destroyOnUnmount: false })(ProvidersRegisterForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(ProvidersRegisterForm)