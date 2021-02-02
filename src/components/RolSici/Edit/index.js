import {connect} from 'react-redux';
import get from 'lodash/get';
import {
    updateRolSici
} from '@actions/rolSici';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    rolActual: get(state, 'rolSici.rolActual')
});

const mapDispatchToProps = dispatch => ({
    update: change => dispatch(updateRolSici(change))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
