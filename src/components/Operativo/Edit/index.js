import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    updateOperativo,
    submitOperativoRequested,
    fetchOneOperativoRequested
} from '@actions/operativo';

import {fetchOptionsRequested} from '@actions/options';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    operativoActual: get(state, 'operativo.operativoActual'),
    estados: get(state, 'options.estadosOperativos'),
    formatos: get(state, 'options.formatos')
});

const mapDispatchToProps = dispatch => ({
    update: change => dispatch(updateOperativo(change)),
    submit: () => dispatch(submitOperativoRequested()),
    fetchOne: id => dispatch(fetchOneOperativoRequested(id)),
    fetchOptions: () => dispatch(fetchOptionsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
