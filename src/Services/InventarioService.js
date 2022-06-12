import { axiosInstance } from '../Helpers/axios-config';

const getInventarios = () => {
    return axiosInstance.get('inventario/listar',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const crearInventarios = (data) => {
    return axiosInstance.post('inventario/guardar',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editInventarios = (inventarioId, data) => {
    return axiosInstance.put(`inventario/editar/${inventarioId}`,data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    getInventarios, crearInventarios, editInventarios
}
