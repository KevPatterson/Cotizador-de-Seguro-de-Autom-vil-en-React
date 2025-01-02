import {createContext, useState} from 'react'
import {obtenerDiferenciaDeAnios, calcularMarca, calcularPlan, formatearDinero} from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000;
    
        const year = Number(datos.year);
        const marca = Number(datos.marca);
        const plan = datos.plan;
    
        // Validación de inputs
        if (!year || !marca || !plan) {
            setResultado(0);
            return;
        }
    
        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaDeAnios(year);
    
        // Restar 3% por año
        resultado -= ((diferencia * 3) * resultado) / 100;
    
        // Aplicar incremento por marca
        resultado *= calcularMarca(marca);
    
        // Aplicar incremento por plan
        resultado *= calcularPlan(plan);
    
        // Formatear resultado
        resultado = parseFloat(resultado.toFixed(2));
        setCargando(true);
        setTimeout(() => {
            setResultado(formatearDinero(resultado));
            setCargando(false);
        }, 3000);
    };
    

    return (
        <CotizadorContext.Provider value={{
            datos, 
            handleChangeDatos, 
            error, 
            setError,
            cotizarSeguro,
            resultado,
            cargando,
            }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {CotizadorProvider}

export default CotizadorContext