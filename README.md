### Nombre: Ariane Garrett Becerra

### Codigo: 54617

## Aplicación conectada a una base de datos para el guardado de datos
El siguiente repositorio contiene el proyecto de una aplicación hecha en React, que contiene un formulario que guarda datos dentro de un docker.

## Contraseña para el root
1234

## Requisitos para ejecutar el proyecto en Windows:
* Windows 11 de 64 bits: versión Home o Pro 21H2 o superior, o versión Enterprise o Education 21H2 o superior.
* Windows 10 de 64 bits: versión Home o Pro 21H1 (compilación 19043) o superior, o versión Enterprise o Education 20H2 (compilación 19042) o superior.
* Habilitar la función WSL 2 en Windows.

Se requieren los siguientes requisitos de hardware para ejecutar WSL 2 en Windows 10:
* Procesador de 64 bits con Traducción de Direcciones de Segundo Nivel (SLAT).
* 4 GB de RAM del sistema.
* El soporte de virtualización a nivel de BIOS debe estar habilitado en la configuración del BIOS. Para obtener más información, consulta la sección de Virtualización.

## Ejecución local
1. Clonar el repositorio que contiene el docker con el siguiente comando:
```bash
https://github.com/arigabec/Garrett-DockerCompose.git
```

2. Ubica el proyecto en una carpeta que recuerdes e y ejecuta el comando para ubicarte en este directorio:
```bash
cd [nombre del directorio]
```
  
4. Levanta los servicios con los siguientes comandos:
```bash
docker-compose up
```
```bash 
docker-compose -f [nombre del archivo que tiene la configuracion del docker] up
```

6. Para detener los servicios:
```bash
docker-compose down
```
```bash
docker-compose -f [nombre del archivo que tiene la configuracion del docker] down
```
