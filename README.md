# Proyecto Short Url

Este proyecto es un acortador de URLs construido con Angular

## Pre-requisitos

- Node.js y npm instalados. Puedes descargarlos desde [aquí](https://nodejs.org/).
- Un token de acceso de Bitly. 

## Instalación

1. Instala las dependencias del proyecto con `npm install`.

2. Sustituye el token API de Bitly generado en envionments. (Ver sección "Configuración de Bitly API Token" a continuación).

5. Inicia la aplicación con `ng serve`.

6. Navega hasta `http://localhost:4200/` en tu navegador. La aplicación debería estar en ejecución.

## Configuración de Bitly API Token

Para usar la API de Bitly, necesitarás un token de acceso. Aquí te explicamos cómo conseguirlo:

1. Regístrate o inicia sesión en [Bitly](https://bitly.com/).

2. Ve a tu perfil y selecciona "Generic Access Token".

3. Introduce tu contraseña y haz clic en "Generate Token".

4. Copia el token generado.

5. En el proyecto Angular, busca las variables de entorno (por lo general, ubicado en `src/environments/environment.ts`) y reemplaza `'your-bitly-token'` con el token que acabas de generar.

```javascript
export const environment = {
  production: false,
  bitlyToken: 'your-bitly-token' // Reemplaza 'your-bitly-token' con tu token real
};
```