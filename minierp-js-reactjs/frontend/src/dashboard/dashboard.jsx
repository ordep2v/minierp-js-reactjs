import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary, getSummaryEstoque } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
        this.props.getSummaryEstoque()

    }

    render() {
        const { credit, debt } = this.props.summary
        const { value, quantify } = this.props.summaryProducts
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 3' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 3' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 3' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                             
                    <Row>
                        <div style={{marginLeft: 14, fontSize: 22}}><p>Estoque</p></div>
                        <ValueBox cols='12 3' color='purple' icon='truck'
                            value={`${quantify} un`} text='Quantidade de produtos em estoque' />
                        <ValueBox cols='12 3' color='purple' icon='dollar'
                            value={`R$ ${value * quantify}`} text='Valor das mercadorias em estoque' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary, summaryProducts: state.dashboard.summaryProducts })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, getSummaryEstoque }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)