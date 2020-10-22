import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList, showUpdate, exclude } from "./clientsRegisterActions";

class ClientsRegisterList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {

        const list = this.props.list || []
        return list.map(cl => (
            <tr key={cl._id}>
                <td>{cl.name}</td>
                <td>{cl.address}</td>
                <td>{cl.contact}</td>
                <td>{cl.mail}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(cl)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.exclude(cl)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ list: state.clientsRegister.list });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getList, showUpdate, exclude }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ClientsRegisterList);