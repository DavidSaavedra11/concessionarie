import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="m-3 text-center text-3xl font-extrabold text-gray-900 ">
        Inicia sesion en tu cuenta
      </h2>
      <form className="mt-8 max-w-md">
        <div>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="email"
            placeholder="correo@correo.com"
            required
          />

          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              id="recuerdame"
              name="recuerdame"
              className="h-4 w-4 text-indigo-600 focus:ring-green-500  border-gray-300 rounded"
            />
            <label
              htmlFor="recuerdame"
              className="ml-2 block text-sm text-gray-900 "
            >
              Recuerdame
            </label>
          </div>
          <div className="text-sm">
            <Link to="/">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>

        <div>
          <Link to="/admin/">
            <button type="submit">Iniciar Sesion</button>
          </Link>
        </div>
        <div>
          <button>Continua con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
