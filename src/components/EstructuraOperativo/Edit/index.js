import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    updateCampo,
    submitCampoRequested,
    fetchOneCampoRequested
} from '@actions/estructuraOperativo';

import {fetchOptionsRequested} from '@actions/options';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    campoActual : get(state, 'estructuraOperativo.campo'),
    entradasCampos : get(state, 'options.entradasCampos')
});

const mapDispatchToProps = dispatch => ({
    update : updates => dispatch(updateCampo(updates)),
    fetchOptions : () => dispatch(fetchOptionsRequested()),
    submit: ()=>dispatch(submitCampoRequested()),
    fetchOne: id_estructura => dispatch(fetchOneCampoRequested(id_estructura))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
