import {connect} from 'react-redux';
import get from 'lodash/get';

import {
    fetchRolesSiciRequested,
    deleteRolSiciRequested
} from '@actions/rolSici';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    roles: get(state, 'rolSici.roles', 'No hay operativos'),
    tableHeaders: get(state, 'rolSici.tableHeaders', 'No hay operativos'),
    formHeaders: get(state, 'rolSici.formHeaders')
});

const mapDispatchToProps = dispatch => ({
    fetchRoles: () => dispatch(fetchRolesSiciRequested()),
    deleteRol: ids => dispatch(deleteRolSiciRequested(ids))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
