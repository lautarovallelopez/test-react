import {connect} from 'react-redux';
import get from 'lodash/get';
import {fetchLotesRequested} from '@actions/lote';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    formHeaders : get(state, 'lote.formHeaders'),
    tableHeaders : get(state, 'lote.tableHeaders'),
    lotes : get(state, 'lote.lotes')
});

const mapDispatchToProps = dispatch => ({
    fetchLotes : id_operativo => dispatch(fetchLotesRequested(id_operativo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
