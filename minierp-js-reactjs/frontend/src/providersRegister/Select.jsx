import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList } from "./providersRegisterActions";
import Grid from '../common/layout/grid'
import { Field } from 'redux-form'

class SelectProvider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    selectFieldValue: '',
  }
  componentWillMount() {
    this.props.getList()
  }

  handleChange = (e) => {
    this.setState({ selectFieldValue: e.target.value })
  }

  handleClick = () => {
    console.log(this.state)
  }
  handleSubmitForm = (event) => {
    // para prever que a página seja atualizada
    event.preventDefault();
    console.log(this.state);
  };
  renderRows() {
    const list = this.props.list || []
    return list.map(pr => (
      <option key={pr._id} value={pr.name}>
        {pr.name}
      </option>))
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <form onSubmit={this.handleSubmitForm}>
          <label>Fornecedor</label>
          <Field
            name='providerSelected'
            component='select'
            style={{ width: "100%", height: 33 }}
            value={this.state.selectFieldValue}
            onChange={this.handleChange}
          >
            <option value="">- Selecionar -</option>
            {this.renderRows()}

          ))
        </Field>

        </form>



      </Grid>
    )

  }

}
const mapStateToProps = (state) => ({ list: state.providersRegister.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SelectProvider);


