import {connect} from 'react-redux';
import get from 'lodash/get';
import {fetchEstructuraOperativoRequested} from '@actions/estructuraOperativo';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    estructura : get(state, 'estructuraOperativo.estructura'),
    tableHeaders : get(state, 'estructuraOperativo.tableHeaders'),
    formHeaders : get(state, 'estructuraOperativo.formHeaders')
});

const mapDispatchToProps = dispatch => ({
    fetchEstructura : id_operativo => dispatch(fetchEstructuraOperativoRequested(id_operativo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
