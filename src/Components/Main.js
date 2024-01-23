import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/styles/main.css";

export const Main = () => {
  return (
    <div className="flex flex-col my-8">
      <div className="flex flex-row justify-evenly">
        <NavLink to={"/estado"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseState</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseState Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook useState
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useState
              </span>
            </div>
          </div>
        </NavLink>
        <div>
        <NavLink to={"/efecto"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseEffect</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseEffect Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook useEffect
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useEffect
              </span>
            </div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/contexto"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseContext</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseContext Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook useContext
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useContext
              </span>
            </div>
          </div>
        </NavLink>
      </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <NavLink to={"/ref"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseRef</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseRef Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook useRef
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useRef
              </span>
            </div>
          </div>
        </NavLink>
        <div>
        <NavLink to={"/reducer"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseReductor</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseReducer Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook UseReducer
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useReducer
              </span>
            </div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/estado"}>
          <div class=" div-main max-w-sm rounded overflow-hidden shadow-lg">
            <div
              className="main-class flex justify-center text-center items-center h-48"
              style={{
                color: "white",
              }}
            >
              <h1>
                <b>UseState</b>
              </h1>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UseState Hook</div>
              <p class="text-gray-700 text-base">
                Este es un pequeño resumen con ejemplos en el que te explicare
                de una manera basica sobre como funciona el hook useState
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hook
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #useState
              </span>
            </div>
          </div>
        </NavLink>
      </div>
      </div>
    </div>
  );
};