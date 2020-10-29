import { get } from 'lodash';
import React, {Component} from 'react';
import { Form, Row, Col, Button, Container} from 'reactstrap';
import { InputDate, InputNumber, InputSelect, RegularInput,InputFile } from '../../../reutilizables';

class Edit extends Component{
    componentDidMount(){
        const id_operativo = this.getId('id_operativo');
        this.handleChange({id_operativo})
        this.props.fetchOptions(); 
    }
    handleChange(change){
        const {loteActual} = this.props;
        Object.assign(loteActual, change)
        this.props.update(loteActual);
        this.forceUpdate();
    }
    handleFile(value){
        value ? this.file = {lote : value} : delete this.file;
        this.forceUpdate();
    }
    getFile(){
        return this.file;
    }
    handleClick(){
        this.file ? this.props.submit(this.getFile()) : this.props.submit()
    }
    getId(idToFind){
        const id = this.props.match.params[idToFind];
        return id
    }
    render(){
        const {
            descripcion,
            observacion,
            dominio,
            formato_del_archivo,
            cantidad_de_registros,
            fecha_carga_del_lote,
            fecha_inicio_codificacion,
            fecha_fin_codificacion,
            id_estado_lote
        } = this.props.loteActual;
        const {estados, formatos} = this.props
        return (
            <Container>
                <Row>
                    <Col sm={{offset:3, size:6}} >
                        <Form>
                            <Row>
                                <Col sm={{offset:0.5, size:11}}>
                                    <RegularInput 
                                        label='descripcion'
                                        value={descripcion}
                                        onChange={({target:{value}}) => this.handleChange({descripcion:value})}
                                    />
                                    <RegularInput
                                        label='observacion'
                                        value={observacion}
                                        onChange={({target:{value}}) => this.handleChange({observacion:value})}
                                    />
                                    <RegularInput
                                        label='dominio'
                                        value={dominio}
                                        onChange={({target:{value}}) => this.handleChange({dominio:value})}
                                    />
                                    <InputSelect
                                        label='formato_del_archivo'
                                        values={formatos}
                                        selectedOne={formato_del_archivo}
                                        onChange={({target:{value}}) => this.handleChange({formato_del_archivo:value})}
                                    />
                                    <InputNumber
                                        label='cantidad_de_registros'
                                        value={cantidad_de_registros}
                                        onChange={({target:{value}}) => this.handleChange({cantidad_de_registros:value})}
                                    />
                                    <InputDate
                                        label='fecha_carga_del_lote'
                                        value={fecha_carga_del_lote}
                                        onChange={({target:{value}}) => this.handleChange({fecha_carga_del_lote:value})}
                                    />
                                    <InputDate
                                        label='fecha_inicio_codificacion'
                                        value={fecha_inicio_codificacion}
                                        onChange={({target:{value}}) => this.handleChange({fecha_inicio_codificacion:value})}
                                    />
                                    <InputDate
                                        label='fecha_fin_codificacion'
                                        value={fecha_fin_codificacion}
                                        onChange={({target:{value}}) => this.handleChange({fecha_fin_codificacion:value})}
                                    />
                                    <InputSelect
                                        label='id_estado_lote'
                                        values={estados}
                                        selectedOne={id_estado_lote}
                                        onChange={({target:{value}}) => this.handleChange({id_estado_lote:value})}
                                    />
                                    <InputFile
                                        name = 'lote'
                                        onChange = {({target : {files}})=>this.handleFile(files[0])}
                                    />
                                    <Button
                                        onClick={()=>this.handleClick()}
                                    >
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Edit;