import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    fetchOneLoteRequested,
    updateLote,
    submitLoteRequested
} from '@actions/lote';
import {fetchOptionsRequested} from '@actions/options';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    loteActual : get(state, 'lote.loteActual'),
    formatos : get(state, 'options.formatos'),
    estados : get(state, 'options.estadosLotes')
});

const mapDispatchToProps = dispatch => ({
    fetchOne : id_lote => dispatch(fetchOneLoteRequested(id_lote)),
    update : updates => dispatch(updateLote(updates)),
    fetchOptions : () => dispatch(fetchOptionsRequested()),
    submit : (file={}) => dispatch(submitLoteRequested(file))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
