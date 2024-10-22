import React, { useState, useEffect } from "react";
import "./InputDataTable.css";

export const InputDataTable = ({ data, onSendData }) => {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...tableData];
    newData[index][name] = value;
    setTableData(newData);
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
          {tableData.map((row, index) => (
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
      <button className="styleButton" onClick={() => onSendData(tableData)}>
        Mejorar Recorrido
      </button>
    </div>
  );
};
