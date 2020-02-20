/*
    eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Nav,
    Navbar,
    NavbarToggler,
    Collapse,
    Media,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Col,
    Row,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPowerOff,
    faUserCircle,
    faUser,
    faTabletAlt,
    faKey
} from '@fortawesome/free-solid-svg-icons';
import IntersectionVisible from 'react-intersection-visible';

import User from '@model/user';
import logo from '@root/public/images/logoIndecRight-235.png';
import {requestSignOut} from '@actions';
import fromState from '@selectors';
import NavItems from './Routes/NavItems';

class Header extends Component {
    static propTypes = {
        user: PropTypes.instanceOf(User).isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }),
        assignmentType: PropTypes.arrayOf(
            PropTypes.shape({})
        ),
        currentOperative: PropTypes.shape({}),
        requestSignOut: PropTypes.func.isRequired
    };

    static defaultProps = {
        history: null,
        assignmentType: [],
        currentOperative: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isCollapse: true,
            dropdownOpen: false,
            isVisible: true
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    onHide() {
        this.setState(() => ({isVisible: false}));
    }

    onShow() {
        this.setState(() => ({isVisible: true}));
    }

    toggleNavbar() {
        this.setState(prevState => ({
            isCollapse: !prevState.isCollapse
        }));
    }

    redirect(to) {
        const {history} = this.props;
        history.push(to);
    }

    render() {
        const {user, currentOperative, assignmentType} = this.props;
        const {isVisible} = this.state;

        return (
            <div>
                <IntersectionVisible
                    onHide={e => this.onHide(e)}
                    onShow={e => this.onShow(e)}
                >
                    <Row>
                        <Col sm={12}>
                            <a onClick={() => this.redirect('/')}>
                                <Media object src={logo}/>
                            </a>
                        </Col>
                    </Row>
                    <header className="hidden-print">
                        <Navbar expand="lg" fixed={!isVisible ? 'top' : ''}>
                            <NavbarToggler onClick={() => this.toggleNavbar()}/>
                            <Collapse isOpen={this.state.isCollapse} navbar>
                                <NavItems
                                    redirect={route => this.redirect(route)}
                                    assignmentType={assignmentType}
                                    operative={currentOperative}
                                />
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink onClick={() => this.redirect('/misOperativos')}>
                                            <FontAwesomeIcon icon={faTabletAlt}/>
                                             &nbsp;MIS OPERATIVOS
                                        </NavLink>
                                    </NavItem>
                                    <Dropdown
                                        nav
                                        inNavbar
                                        isOpen={this.state.dropdownOpen}
                                        onMouseOver={this.onMouseEnter}
                                        onFocus={this.onMouseEnter}
                                        onMouseLeave={this.onMouseLeave}
                                        onClick={this.onMouseEnter}
                                    >
                                        <DropdownToggle nav caret>
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <h6>
                                                    <strong>
                                                        {user && `${user.name} ${user.surname}`}
                                                    </strong>
                                                </h6>
                                                <div className="p-3 bg-dark text-light">
                                                    <small className="text-small text-white">
                                                        Último ingreso
                                                        &nbsp;
                                                        <br/>
                                                        {new Date(user.lastAccess).toLocaleString('es-AR')}
                                                    </small>
                                                </div>
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.redirect('/account')}>
                                                <FontAwesomeIcon icon={faUser}/>
                                                &nbsp;&nbsp; Mis Datos
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.redirect('/account/password')}>
                                                <FontAwesomeIcon icon={faKey}/>
                                                &nbsp;&nbsp; Cambio Contraseña
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.props.requestSignOut()}>
                                                <FontAwesomeIcon icon={faPowerOff}/>
                                                &nbsp;&nbsp; Cerrar sesión
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </header>
                </IntersectionVisible>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = fromState.Session.getUser()(state);
    const currentOperative = fromState.Session.getCurrentOperative()(state);
    const assignmentType = fromState.StaticData.getAssignment()(state);

    return {
        user,
        currentOperative,
        assignmentType
    };
};

export default withRouter(connect(
    mapStateToProps,
    dispatch => ({
        requestSignOut: () => dispatch(requestSignOut())
    })
)(Header));
