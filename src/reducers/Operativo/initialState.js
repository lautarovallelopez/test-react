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
        'id_operativo',
        'descripcion'
    ],
    operativoActual : {
        descripcion : "",
        observacion : "",
        dominio : "",
        fecha_llegada_paquete : "",
        formato_del_archivo : "",
        total_registros : "",
        contacto_operativo : "",
        mail_contacto : "",
        fecha_inicio_codificacion : "",
        fecha_fin_codificacion : "",
        fecha_entrega_operativo : "",
        id_estado_operativo : "",
        calidad_operativo : "",
        nivel_error_operativo : "",
        fecha_alta : ""
    },
    estados : [],
    formatos : [
        {
            id : 'dbf',
            descripcion : 'dbf'
        },
        {
            id : 'csv',
            descripcion: 'csv'
        },
        {
            id : 'txt',
            descripcion : 'txt'
        }
    ]
}
