import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    updateRolSici,
    fetchOneRolSiciRequested
} from '@actions/rolSici';
import {
    fetchUsuariosRequested
}from '@actions/usuarios';
import {
    fetchTipoDeRolRequested
} from '@actions/tipoDeRol'
import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    rolActual: get(state, 'rolSici.rolActual'),
    usuarios: get(state, 'usuario.usuarios'),
    tipoDeRoles: get(state, 'tipoDeRol.tiposDeRoles')
});

const mapDispatchToProps = dispatch => ({
    update: change => dispatch(updateRolSici(change)),
    getOne: ids => dispatch(fetchOneRolSiciRequested(ids)),
    fetchUsuarios: () => dispatch(fetchUsuariosRequested()),
    fetchTipoDeRoles: ()=>dispatch(fetchTipoDeRolRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
