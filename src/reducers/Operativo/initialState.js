export default {
    operativos : [],
    formHeaders : [
        'id_operativo',
        'id_fuente',
        'descripcion',
        'observacion',
        'dominio',
        'fecha_llegada_paquete',
        'formato_del_archivo',
        'total_registros',
        'contacto_operativo',
        'mail_contacto',
        'fecha_inicio_codificacion',
        'fecha_fin_codificacion',
        'fecha_entrega_operativo',
        'id_estado_operativo',
        'calidad_operativo',
        'nivel_error_operativo',
        'fecha_alta'
    ],
    tableHeaders : [
        'descripcion',
        'fecha_llegada_operativo',
        'total_registros_operativo',
        'fecha_inicio_codificacion',
        'fecha_fin_codificacion',
        'id_estado_operativo',
        'calidad_total_operativo',
        'nivel_error_operativo'
    ],
    operativoActual : {
        descripcion : null,
        observacion : null,
        dominio : null,
        fecha_llegada_paquete : null,
        formato_del_archivo : null,
        total_registros : null,
        contacto_operativo : null,
        mail_contacto : null,
        fecha_inicio_codificacion : null,
        fecha_fin_codificacion : null,
        fecha_entrega_operativo : null,
        id_estado_operativo : null,
        calidad_operativo : null,
        nivel_error_operativo : null
    }
}
