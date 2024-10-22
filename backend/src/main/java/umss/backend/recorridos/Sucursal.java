package umss.backend.recorridos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sucursal {
    private int id;
    private int numRecorrido;
    private int distanciaRecorrida;
}
