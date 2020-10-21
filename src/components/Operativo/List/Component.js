import React, {Component} from 'react';

class List extends Component{
    componentDidMount(){
        this.props.fetchOperativos();
    }
    render(){
        console.log(this.props.operativos);
        return(
            <h1>Estoy en list</h1>
        )
    }
}

export default List;
