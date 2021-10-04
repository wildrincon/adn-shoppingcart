import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { connect } from 'react-redux';

import { GestionProductos } from '../containers/GestionProductos';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.productos;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
})(GestionProductos);
