![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Ember](https://img.shields.io/badge/ember-1C1E24?style=for-the-badge&logo=ember.js&logoColor=#D04A37)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Program-AR/pilas-bloques/issues)
[![open issues](https://badgen.net/github/open-issues/Program-AR/pilas-bloques)](https://github.com/Program-AR/pilas-bloques/issues)
![downloads](https://img.shields.io/github/downloads/Program-AR/pilas-bloques/total.svg)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

[:gb: Read in English](https://github.com/Program-AR/pilas-bloques/blob/develop/README_en.md)
_____________

# Pilas Bloques - Una herramienta para aprender a programar

<p align="center">
  <img src="https://pilasbloques.program.ar/online/imagenes/main-logo.png"/>
</p>

## Sobre la aplicación

Pilas Bloques es una aplicación para aprender a programar, desarrollada especialmente para el aula. 
Se proponen desafíos con diversos niveles de dificultad para acercar a las y los estudiantes al mundo de la programación por medio de bloques. 

![](https://github.com/Program-AR/pilas-bloques/blob/master/screenshots/desafios.png)
![](https://github.com/Program-AR/pilas-bloques/blob/master/screenshots/editor.png)

### ¿Qué es programar por medio de bloques? 

Es desarrollar programas con acciones e instrucciones incorporadas en bloques o piezas prediseñadas. El resultado de encastrar los bloques entre sí es el programa que resuelve el problema ó desafío planteado. 

### ¿Por qué es positiva esta modalidad de aprendizaje? 

* Porque cada **concepto** abstracto asociado a la programación tiene su representación **visual**.
* Porque ahorra las **dificultades** que genera la sintaxis formal de un lenguaje **escrito** (¡y la frustración cuando cometemos un error al escribir!). Los bloques se seleccionan, arrastran, encastran y listo.

### ¿En qué se diferencia Pilas Bloques de otras herramientas? 

La principal diferencia es que esta plataforma fue pensada para acompañar una **secuencia didáctica** para el aprendizaje de la programación en la escuela. 

### ¿Qué es una secuencia didáctica?

Es el plan mediante el cual se propone aprender un tema. La secuencia didáctica de Pilas Bloques fue ideada y probada por docentes e investigadores argentinos. Hoy en día, esta propuesta se está profundizando y ampliando. Conocé más sobre las iniciativas que estamos abordando [acá](https://program.ar/mision/). 

### ¿Quién puede hacer los desafíos de Pilas Bloques? 

Los desafíos pueden ser realizados por niños de 3 a 99 años ;) . Sin embargo, actualmente poseemos acompañan dos manuales para docentes orientados a la **primaria**, por lo que los niños entre 5 y 8 años podrán aprovechar mejor las actividades del Primer Ciclo, y los niños entre 9 y 12 años podrán aprovechar mejor las actividades del Segundo Ciclo. 

### ¿Y cualquiera puede hacer los desafíos por su cuenta?

La herramienta está pensada como **ayuda al docente y al alumno** en el proceso de aprendizaje de la programación en un entorno escolar. En la secuencia didáctica que se plantea, la **indagación** autodidacta es fundamental. Nuestra recomendación, no obstante, es que el docente sea el que **guíe** y asista el proceso de aprendizaje del alumno. 


## Cómo contribuír

En la guia de [CONTRIBUTING](https://github.com/Program-AR/pilas-bloques/blob/develop/CONTRIBUTING.md) tenes toda la informacion necesaria para contribuir al proyecto!

## Cómo instalar el entorno de desarrollo

Para colaborar en Pilas Bloques vas a tener que instalar [Git](https://git-scm.com/) y clonar el repositorio de [Pilas Bloques](https://github.com/Program-AR/pilas-bloques):

```
git clone https://github.com/Program-AR/pilas-bloques.git
```

### Pre-requisitos
  
* Node. La version requerida para el proyecto está en el archivo `.nvmrc`.

  Debian/Ubuntu:
  ```
  git clone https://github.com/nvm-sh/nvm.git ~/.nvm
  source ~/.nvm/nvm.sh
  source ~/.nvm/install.sh
  nvm install .
  ```

### Usá la version de NodeJS de Pilas Bloques:
```
nvm use
```
  
### Instalá las dependencias del proyecto:
```
npm install
```

## Comandos comunes de desarrollo

### Correr todos los tests:
```
npm test
```

### Levantar Pilas Bloques:
```
npm run start
```

### Buildear Pilas Bloques:

```
npm run build
```

### Sobre los grupos experimentales:

Pilas Bloques puede compilarse de forma distinta dependiendo del grupo experimental a construir. Eso se logra seteando la variable de entorno `EXPERIMENT_GROUP` al buildear o compilar:

```
EXPERIMENT_GROUP=treatment npm run start
```

Los grupos experimentales pueden ser: `notAffected`, `control`, `treatment` y `autoassign`.

- `notAffected`: (default) no muestra ningún tipo de feedback sobre la solución propuesta.
- `control`: al finalizar un desafío muestra las expectativas existentes para el mismo, sin informar si se cumplieron o no.
- `treatment`: tiene un período de entrenamiento en el cual muestra las expectativas existentes sobre el desafío, junto con una barra de progreso para las que se cumplieron. Se agrega feedback sobre los bloques. Una vez terminado el período de entrenamiento pasa a tener un comportamiento similar a *control*.
- `autoassign`: asigna aleatoriamente un grupo experimental en tiempo de ejecución (elige entre `control` y `treatment).

### Preparar el backend (solo necesario para cosas de usuarios y eso):

Para tener un backend para probar cosas de usuarios y guardar desafios es necesario tener levantado los proyectos de [Pilas Bloques API](https://github.com/Program-AR/pilas-bloques-api), [Pilas Bloques Analytics](https://github.com/Program-AR/pilas-bloques-analytics) y una base de datos [MongoDB](https://www.mongodb.com/).

### Licencia

Copyright © 2021, [Program-AR](http://program.ar), All Rights Reserved.

Licensed under the terms of [GNU General Public License v3.0](https://github.com/Program-AR/pilas-bloques/blob/master/LICENSE) license.

### Registro de cambios
[aquí](notasDeVersion.md)
