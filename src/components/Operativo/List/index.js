import {connect} from 'react-redux';
import get from 'lodash/get';

import {fetchOperativosRequested} from '@actions/operativo';
import {fetchOptionsRequested} from '@actions/options';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    operativos: get(state, 'operativo.operativos', 'No hay operativos'),
    tableHeaders: get(state, 'operativo.tableHeaders', 'No hay operativos'),
    formHeaders: get(state, 'operativo.formHeaders')
});

const mapDispatchToProps = dispatch => ({
    fetchOperativos: () => dispatch(fetchOperativosRequested()),
    fetchOptions: () => dispatch(fetchOptionsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
