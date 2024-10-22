import { useState } from "react";
import "./Recorridos.css";
import { InputNumSuc } from "../componets/forms/InputNumSuc";
import { InputDataTable } from "../componets/tables/InputDataTable";

export const Recorridos = () => {
  const [tableData, setTableData] = useState([]);

  const handleSendData = async (data) => {
    /**try {
      console.log("Enviando datos al backend...");
      const response = await fetch("https://your-backend-url/api/ordenar-recorridos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la petición al backend");
      }

      const sortedData = await response.json();
      setTableData(sortedData); // Actualizar la tabla con los datos ordenados recibidos
      console.log("Respuesta del backend:", sortedData);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }*/
  };

  const handleCreateTable = (numSuc, disSuc) => {
    const newTableData = Array.from({ length: numSuc }, (_, index) => ({
      id: index + 1,
      numeroRecorridos: 0,
      distanciaRecorrida: disSuc,
    }));
    setTableData(newTableData);
  };

  return (
    <>
      <div className="contaimerRecorridos">
        <h1>Recorridos Simulación</h1>
        <h2>Lista de Sucursales</h2>
        <InputNumSuc onCreateTable={handleCreateTable} />
        <InputDataTable data={tableData} onSendData={handleSendData} />
      </div>
    </>
  );
};
