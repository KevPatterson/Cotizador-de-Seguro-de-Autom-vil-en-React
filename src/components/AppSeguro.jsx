import useCotizador from '../hooks/useCotizador';
import Formulario from './Formulario';
import Spinner from './Spinner';
import Resultado from './Resultado';

const AppSeguro = () => {
    const { resultado, cargando } = useCotizador();

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex flex-col items-center">
            {/* Encabezado */}
            <header className="my-10 text-center">
                <h1 className="text-white text-4xl font-extrabold tracking-wide drop-shadow-lg">
                    Cotizador de Seguros de Autos
                </h1>
            </header>

            {/* Contenido Principal */}
            <main className="bg-white w-full max-w-3xl mx-auto shadow-lg p-10 rounded-lg">
                <Formulario />
                {cargando ? <Spinner /> : resultado !== 0 && <Resultado />}
            </main>
        </div>
    );
};

export default AppSeguro;
