import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList,showUpdate,exclude } from "./productsRegisterActions";

class ProductsRegisterList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(pr => (
          <tr key={pr._id}>
            <td>{pr.name}</td>
            <td>{pr.quantify}</td>
            <td>{pr.value},00</td>
            <td>{pr.providerSelected}</td>
            <td>
              <button className="btn btn-warning" onClick={() => this.props.showUpdate(pr)}>
              <i className='fa fa-pencil'></i>
                </button>
                <button className="btn btn-danger" onClick={() => this.props.exclude(pr)}>
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
                <th>Quantidade</th>
                <th>Preço unitário(R$)</th>
                <th>Fornecedor</th>
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

const mapStateToProps = (state) => ({ list: state.productsRegister.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate,exclude }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductsRegisterList);