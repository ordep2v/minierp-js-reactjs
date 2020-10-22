import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../common/layout/grid";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Input from "../common/form/input";


class ProductList extends Component {
    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('ProductsRegisterForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('ProductsRegisterForm', this.props.field,index)
        }
    }
    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
        <td>
          <Field
            name={`${this.props.field}[${index}].name`}
            component={Input}
            placeholder="Informe o nome do produto"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].quantity`}
            component={Input}
            placeholder="Informe a quantidade em estoque"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].price`}
            component={Input}
            placeholder="Informe o preço unitário"
            readOnly={this.props.readOnly}
          />
        </td>

        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove(index)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
        ))
    }
    render() {
        return (
          <Grid cols={this.props.cols}>
            <fieldset>
              <legend>{this.props.legend}</legend>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor unitário</th>
                    <th className="table-actions">Ações</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </table>
            </fieldset>
          </Grid>
        );
      }
    }
    const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove},dispatch)
    export default connect(null, mapDispatchToProps)(ProductList)
    