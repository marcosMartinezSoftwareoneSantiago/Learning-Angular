# Learning Angular

## 1.- Crea una aplicación con angular para una página web que sea como la captura adjunta. La aplicación tendrá como componentes 

    1- HeaderComponent (parte superior)

    2- BodyComponent(cuerpo de la página) 

      2.1. BuscadorComponent(Estará dentro del BodyComponent)

    3- FooterComponent 

      3.1. RedesSocialesComponent (dentro del FooterComponent)

      3.2 LegalPagesComponent(dentro del FooterComponen)


    Un total de 6 componentes Los textos del header (casachollo,Comprar, Alquilar,...) serán enviados desde typescript y renderizados en el html con la interpolación de variables. El copyright en vez de tener FP DUAL - Santiago de Compostela, tendrá tu nombre y apellidos y serán enviados también a través de typescript al html a través de la interpolación de variables. Para subir la aplicación, en formato comprimido y sin la carpeta node_modules.


## 2.- Crea una aplicación con angular con un componente: "home" que tenga un formulario con un campo "email".

    Utiliza el módulo de angular FormsModule para capturar la información del formulario (el email) usando la directiva ngModel en un evento submit. 
    Imprime el email por la consola del navegador


## 3.- Crea una aplicación con angular que tenga un componente llamado cardComponent. 

    Este componente tendrá un botón y un card de bootstrap. Cada vez que se hace click en el botón se renderizará el card donde cambiará el número que aparece en el cuerpo del card tal y como ves en la captura de vídeo cada vez que se haga click en el botón.


## 4.- Crea una aplicación con angular que tenga un componente "listaCompnent" con un botón que al hacer click en él renderice una tabla con 2 empleados que estén dentro de un array de objetos. 

    Los objetos tendrán como claves:

      nombreCompleto,

      sueldo
      
      y antiguedad.

      Si le volvemos a dar click en el botón se debe ocultar y así sucesivamente ( ver captura de vídeo)
      
El texto del botón será "Mostrar la tabla" cuando esté oculta y "Ocultar tabla" cuanto esté visible.

Usa bootstrap, eventos e interpolación de variables.

## 5.- Crea una aplicación con angular con un componente (ponle el nombre que quieras).

  Trata de replicar lo que ves en la captura de vídeo. El ejercicio hace uso del data binding

## 6.- Crea una aplicación con angular que realice una petición http GET a la siguiente *[url](https://jsonplaceholder.typicode.com/users)*

    Renderiza la información recibida del servidor en un html a través de una ista desordenada

## 7.- Crea una aplicación con angular que tenga una formulario con tres inputs.

    Genera un evento submit asociado al formulario que imprima por consola los valores de los input

## 8.- Crea una aplicación con angular con las siguientes rutas:

    /lista   ( renderiza un array que venga de typescript en una tabla )

    /form (tiene un formulario  con un input para el email que al ser enviado imprime por consola "Has enviado el formulario...")