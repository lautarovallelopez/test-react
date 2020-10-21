import {connect} from 'react-redux';
import get from 'lodash/get';

import {fetchOperativosRequested} from '@actions/operativo';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    operativos: get(state, 'operativo.operativos', 'No hay operativos')
});

const mapDispatchToProps = dispatch => ({
    fetchOperativos: () => dispatch(fetchOperativosRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
