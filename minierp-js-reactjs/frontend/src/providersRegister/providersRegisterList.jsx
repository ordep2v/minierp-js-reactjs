import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList,showUpdate,exclude } from "./providersRegisterActions";

class ProvidersRegisterList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        
        const list = this.props.list || []
        return list.map(pv => (
          <tr key={pv._id}>
            <td>{pv.name}</td>
            <td>{pv.city}-{pv.district}</td>
            <td>{pv.contact}</td>
            <td>{pv.econtact}</td>
            <td>
              <button className="btn btn-warning" onClick={() => this.props.showUpdate(pv)}>
              <i className='fa fa-pencil'></i>
                </button>
                <button className="btn btn-danger" onClick={() => this.props.exclude(pv)}>
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
                <th>Cidade/UF</th>
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

const mapStateToProps = (state) => ({ list: state.providersRegister.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate,exclude }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProvidersRegisterList);