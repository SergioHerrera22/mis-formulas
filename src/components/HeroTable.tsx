import { useState } from "react";

// File: src/components/HeroTable.tsx

export default function HeroTable() {
  const [formulas, setFormulas] = useState([
    {
      nombre: "Blanco Banchisa",
      codigo: "249",
      variante: "original",
      año: "2004",
      marca: "Toyota",
      observaciones: "Agregar 1.5g de blanco",
    },
    {
      nombre: "Rojo Flash",
      codigo: "a1a1",
      variante: "2",
      año: "1999",
      marca: "Ford",
      observaciones: "Restarle 0.4g de negro",
    },
    {
      nombre: "Prata Light",
      codigo: "a7x",
      variante: "original",
      año: "2012",
      marca: "Fiat",
      observaciones: "Sale igual",
    },
    {
      nombre: "Rojo Flash",
      codigo: "a1a1",
      variante: "2",
      año: "1999",
      marca: "Ford",
      observaciones: "Restarle 0.4g de negro",
    },
    {
      nombre: "Prata Light",
      codigo: "a7x",
      variante: "original",
      año: "2012",
      marca: "Fiat",
      observaciones: "Sale igual",
    },
  ]);

  const misformulas = formulas.map((formula) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-center">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {formula.nombre}
        </th>
        <td className="px-6 py-4">{formula.codigo}</td>
        <td className="px-6 py-4">{formula.variante}</td>
        <td className="px-6 py-4">{formula.año}</td>
        <td className="px-6 py-4">{formula.marca}</td>
        <td className="px-6 py-4">{formula.observaciones}</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    );
  });

  const addFormula = () => {
    // Aquí puedes agregar la lógica para agregar una nueva fórmula
    const newFormula = {
      nombre: "Blanco Banchisa",
      codigo: "249",
      variante: "original",
      año: "2004",
      marca: "Toyota",
      observaciones: "Agregar 1.5g de blanco",
    };
    setFormulas([...formulas, newFormula]);
  };

  return (
    <div>
      <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Fórmulas mas usadas
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400 mb-6">
              Consulta rápida de las fórmulas de colores automotrices más
              frecuentes. Incluye nombre del color, descripción de la variante y
              observaciones clave para su preparación.
            </p>
            <button
              className="bg-blue-500 text-white font-bold py-1 px-2 rounded pointer hover:bg-blue-700"
              onClick={addFormula}
            >
              Nueva Fórmula
            </button>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre del Color
              </th>
              <th scope="col" className="px-6 py-3">
                Código de Color
              </th>
              <th scope="col" className="px-6 py-3">
                Variante
              </th>
              <th scope="col" className="px-6 py-3">
                Año
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Observaciones
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{misformulas}</tbody>
        </table>
      </div>
    </div>
  );
}
