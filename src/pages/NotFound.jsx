import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate();
  return (
    <section className="bg-white lg:bg-gray-900">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <img src="/image/error.svg" alt="" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  lg:text-white md:text-3xl">
            Página no encontrada
          </h1>
          <p className="mt-4 text-gray-500 lg:text-white">
            La página que estás buscando no existe. Aquí hay algunos enlaces
            útiles:
          </p>

          <div className="w-full mt-6 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate("/")}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Llévame a la pagina principal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
