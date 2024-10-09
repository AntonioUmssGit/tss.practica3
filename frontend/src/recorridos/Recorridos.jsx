import { InputDataTable } from "../componets/tables/InputDataTable";
import "./Recorridos.css";
export const Recorridos = () => {

    const handleSendData = async (data) => {
        try {
          console.log("mandar al backend la peticio")
          console.log(data)
        } catch (error) {
          console.error('Error al enviar los datos:', error);
        }
      };

    return(<>
        <div className = "contaimerRecorridos">
            <h1>Recorridos Simulacion</h1>
            <h2>Lista de Sucursales</h2>
            <InputDataTable onSendData={handleSendData}/>
        </div>    
    </>)
}