import java.util.ArrayList; // Importa lista dinamica para almacenar contactos.

class Contacto { // Define un tipo compuesto para un contacto.
    String nombre; // Guarda nombre del contacto.
    String telefono; // Guarda telefono del contacto.

    Contacto(String nombre, String telefono) { // Constructor que inicializa atributos.
        this.nombre = nombre; // Asigna parametro nombre al atributo.
        this.telefono = telefono; // Asigna parametro telefono al atributo.
    } // Fin del constructor.
} // Fin de clase Contacto.

public class agenda_dinamica { // Clase principal del ejemplo.
    public static void main(String[] args) { // Metodo de inicio del programa.
        ArrayList<Contacto> agenda = new ArrayList<>(); // Crea lista dinamica en heap.

        agenda.add(new Contacto("Ana", "0412-1111111")); // Inserta primer contacto.
        agenda.add(new Contacto("Luis", "0412-2222222")); // Inserta segundo contacto.
        agenda.add(new Contacto("Marta", "0412-3333333")); // Inserta tercer contacto.

        for (Contacto c : agenda) { // Recorre cada contacto almacenado.
            System.out.println(c.nombre + " -> " + c.telefono); // Muestra datos del contacto.
        } // Fin del recorrido.

        System.out.println("Total contactos: " + agenda.size()); // Imprime cantidad total.
    } // Fin de main.
} // Fin de clase principal.
