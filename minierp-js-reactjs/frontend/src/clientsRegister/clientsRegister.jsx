import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabHeader from '../common/tab/tabHeader'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import { init, create, update, exclude } from './clientsRegisterActions'

import List from './clientsRegisterList'
import Form from './clientsRegisterForm'

class ClientsRegister extends Component {
    componentWillMount() {
        this.props.init();
    }
    render() {
        return (
            <div>
                <ContentHeader title="Cadastrar Clientes" small="Cadastrar" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader
                                label="Incluir"
                                icon="plus"
                                target="tabCreate"
                            />
                            <TabHeader
                                label="Alterar"
                                icon="pencil"
                                target="tabUpdate"
                            />
                            <TabHeader
                                label="Excluir"
                                icon="trash-o"
                                target="tabDelete"
                            />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                    <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form
                                    onSubmit={this.props.create}
                                    submitLabel="Incluir"
                                    submitClass="info"
                                />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form
                                    onSubmit={this.props.update}
                                    submitLabel="Alterar"
                                    submitClass="info"
                                />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form
                                    onSubmit={this.props.exclude}
                                    submitLabel="Excluir"
                                    submitClass="danger"
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, exclude
}, dispatch)
export default connect(null, mapDispatchToProps)(ClientsRegister)