import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavbarText,
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    faPowerOff,
    faUserCircle,
    faUser,
    faTabletAlt,
    faKey
} from '@fortawesome/free-solid-svg-icons';
import IntersectionVisible from 'react-intersection-visible';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavItems from './Routes/NavItems';

class Header extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
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
        const {isVisible} = this.state;

        return (
            <div>
                <IntersectionVisible
                    onHide={e => this.onHide(e)}
                    onShow={e => this.onShow(e)}
                >
                    <header className="hidden-print">
                        <Navbar expand="lg">
                     
                            <NavbarToggler onClick={() => this.toggleNavbar()}/>
                            <Collapse isOpen={this.state.isCollapse}  style={{display:'inline'}}>
                                <NavItems
                                    redirect={route => this.redirect(route)}
                                />
                            </Collapse>
                        
                            <h1 style={{color: 'white'}} style={{color:'white', fontSize:'17px'}}>Sistema de Codificación Informatizada</h1>
                    
                            <ul className="navbar-nav nav-flex-icons">
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faPowerOff}/>
                                </li>
                            </ul>    
                        </Navbar>
                        
                    </header>
                </IntersectionVisible>
            </div>
        );
    }
}

export default withRouter(Header);
