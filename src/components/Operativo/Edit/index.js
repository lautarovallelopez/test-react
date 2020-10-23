import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    updateOperativo,
    submitOperativoRequested,
    fetchOneOperativoRequested
} from '@actions/operativo';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    operativoActual: get(state, 'operativo.operativoActual'),
    estados: get(state, 'operativo.estados'),
    formatos: get(state, 'operativo.formatos')
});

const mapDispatchToProps = dispatch => ({
    update: change => dispatch(updateOperativo(change)),
    submit: () => dispatch(submitOperativoRequested()),
    fetchOne: id => dispatch(fetchOneOperativoRequested(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
