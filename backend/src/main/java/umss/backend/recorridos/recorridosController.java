package umss.backend.recorridos;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class recorridosController {
    
    @PostMapping("/ordenar")
    public List<Sucursal> ordenarRecorridos(@RequestBody List<Sucursal> sucursales){
        return null;
    }
}
