import { Fragment, useCallback, useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {
    const { resultado, datos, cargando } = useCotizador();
    const { year, marca, plan } = datos;
    const yearRef = useRef(year);

    if (cargando || !marca || !year || !plan) return null;

    const nombreMarca = useCallback(
        MARCAS.find(m => m.id === Number(marca)) || { nombre: "Desconocida" },
        [resultado]);
    const nombrePlan = useCallback(
        PLANES.find(p => p.id === Number(plan)) || { nombre: "Desconocida" },
        [resultado]);

    return (
        <div className='border text-center rounded-lg bg-gray-100 mt-5 p-5 shadow'>
            <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
            
            <p className='my-2'>
                <span className='font-bold'>Marca:</span> {nombreMarca.nombre}
            </p>

            <Fragment>
            <p className='my-2'>
                <span className='font-bold'>Año:</span> {yearRef.current}
            </p>
            </Fragment>

            <p className='my-2'>
                <span className='font-bold'>Plan:</span> {nombrePlan.nombre}
            </p>

            <p className='my-2 text-2xl'>
                <span className='font-bold'>Cotización Total:</span> {resultado}
            </p>
        </div>
    );
};

export default Resultado;
