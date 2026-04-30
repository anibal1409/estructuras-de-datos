import sys  # Importa utilidades para medir tamano aproximado en memoria.
import time  # Importa utilidades para medir tiempo de ejecucion.

N = 100000  # Define cantidad de elementos para la prueba.

inicio_lista = time.perf_counter()  # Marca tiempo inicial para lista dinamica.
lista_dinamica = []  # Crea lista vacia (estructura dinamica).
for i in range(N):  # Repite N inserciones.
    lista_dinamica.append(i)  # Inserta elemento al final de la lista.
fin_lista = time.perf_counter()  # Marca tiempo final de insercion en lista.

inicio_tupla = time.perf_counter()  # Marca tiempo inicial para tupla (inmutable).
tupla_estatica = tuple(range(N))  # Construye tupla con N elementos.
fin_tupla = time.perf_counter()  # Marca tiempo final de construccion de tupla.

print(f"Tiempo lista dinamica: {fin_lista - inicio_lista:.6f} s")  # Muestra tiempo de lista.
print(f"Tiempo tupla: {fin_tupla - inicio_tupla:.6f} s")  # Muestra tiempo de tupla.
print(f"Tamano lista (bytes): {sys.getsizeof(lista_dinamica)}")  # Tamano base de lista.
print(f"Tamano tupla (bytes): {sys.getsizeof(tupla_estatica)}")  # Tamano base de tupla.
