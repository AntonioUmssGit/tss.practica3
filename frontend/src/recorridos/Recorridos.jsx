import { InputDataTable } from "../componets/tables/InputDataTable";
import "./Recorridos.css";
export const Recorridos = () => {
    return(<>
        <div className = "contaimerRecorridos">
            <h1>Recorridos Simulacion</h1>
            <h2>Lista de Sucursales</h2>
            <InputDataTable/>
            <button>mejorar Recorrido</button>
        </div>    
    </>)
}