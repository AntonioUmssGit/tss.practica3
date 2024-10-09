import React, { useState } from 'react';
import './InputDataTable.css';

export const InputDataTable = () => {
  const [data, setData] = useState([
    { id: 1, numeroRecorridos: 50, distanciaRecorrida: 30 },
    { id: 2, numeroRecorridos: 2, distanciaRecorrida: 30 },
    { id: 3, numeroRecorridos: 8, distanciaRecorrida: 20},
    { id: 4, numeroRecorridos: 72, distanciaRecorrida: 20 },
    { id: 5, numeroRecorridos: 12, distanciaRecorrida: 10},
    { id: 6, numeroRecorridos: 20, distanciaRecorrida: 10}
  ]);

  // Función para manejar los cambios en las celdas
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sucursal</th>
            <th>Número de Recorridos</th>
            <th>Distancia Recorrida (Km)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="number"
                  name="numeroRecorridos"
                  value={row.numeroRecorridos}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="distanciaRecorrida"
                  value={row.distanciaRecorrida}
                  onChange={(e) => handleInputChange(e, index)}
                  step="10"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
