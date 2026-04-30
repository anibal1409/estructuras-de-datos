#include <iostream> // Incluye entrada/salida estandar.
#include <vector>   // Incluye contenedor dinamico vector.
using namespace std; // Permite usar nombres estandar sin prefijo std::.

int globalEstatica = 42; // Variable global: vive en segmento estatico.

int main() { // Punto de entrada del programa.
  int localPila = 10; // Variable local: vive en la pila (stack).
  int* enHeap = new int(25); // Reserva memoria dinamica en heap e inicializa con 25.
  vector<int> dinamico = {1, 2, 3}; // Estructura dinamica administrada por la STL.

  cout << "Valor global: " << globalEstatica << "\n"; // Muestra valor global.
  cout << "Valor local: " << localPila << "\n"; // Muestra valor local.
  cout << "Valor heap: " << *enHeap << "\n"; // Desreferencia puntero para leer heap.
  cout << "Tamano vector: " << dinamico.size() << "\n"; // Consulta cantidad de elementos.

  cout << "Direccion global: " << &globalEstatica << "\n"; // Imprime direccion de global.
  cout << "Direccion local: " << &localPila << "\n"; // Imprime direccion de local.
  cout << "Direccion heap: " << enHeap << "\n"; // Imprime direccion reservada en heap.

  delete enHeap; // Libera memoria dinamica reservada con new.
  enHeap = nullptr; // Evita puntero colgante despues de liberar.
  return 0; // Finaliza el programa correctamente.
} // Fin de main.
