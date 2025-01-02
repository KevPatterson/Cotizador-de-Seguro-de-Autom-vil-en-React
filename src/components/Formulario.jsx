import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(datos).some(valor => valor === '')) {
            setError('Por favor, rellena todos los campos');
            return;
        }

        setError('');
        cotizarSeguro();
    };

    return (
        <div>
            {error && <Error />}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="marca">
                        Marca:
                    </label>
                    <select
                        name="marca"
                        id="marca"
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-indigo-500"
                        onChange={handleChangeDatos}
                        value={datos.marca}
                    >
                        <option value="">-- Seleccione una marca --</option>
                        {MARCAS.map(marca => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="year">
                        Año:
                    </label>
                    <select
                        name="year"
                        id="year"
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-indigo-500"
                        onChange={handleChangeDatos}
                        value={datos.year}
                    >
                        <option value="">-- Seleccione un año --</option>
                        {YEARS.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Plan:</label>
                    <div className="flex gap-4">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="plan"
                                        value={plan.id}
                                        onChange={handleChangeDatos}
                                        className="focus:outline-indigo-500"
                                    />
                                    {plan.nombre}
                                </label>
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    type="submit"
                    value="Cotizar"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold py-3 rounded-md cursor-pointer transition-colors"
                />
            </form>
        </div>
    );
};

export default Formulario;
