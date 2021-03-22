import React, {Component} from 'react';
import {connect} from 'react-redux';
import Ripple from '../General/Ripple';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {
  componentDidMount () {
    this.props.traerTodos ();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Ripple />;
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }

    return <Tabla />;
  };

  render () {
    // console.log (this.props.cargando);
    // console.log (this.props.error);
    return (
      <div>
        <h1>
          Usuarios
        </h1>
        {this.ponerContenido ()}
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect (mapStateToProps, usuariosActions) (Usuarios);
