import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateFile} from '@actions/file';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class InputFile extends Component{
    handleChange(event){
        const {target:{files}} = event;
        const file = files[0];
        this.props.update(file);
    }
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input
                        onChange={(event)=>this.handleChange(event)}
                        type="file"
                        name="file"
                        id="exampleFile" 
                    />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button>subir</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    update : file => dispatch(updateFile(file))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);