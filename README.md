# ECO 2025 - Encuesta de Cultura Organizacional y Bienestar Laboral

Webapp para el Gobierno de la Ciudad de Buenos Aires (GCBA) que permite mostrar información sobre la encuesta ECO 2025 y publicar resultados, informes y tableros interactivos.

## Características

- ✅ Autenticación con login (mock, preparado para backend real)
- ✅ Diseño "one-screen" sin scroll en el body
- ✅ Navegación por rutas protegidas
- ✅ Configuración escalable para futuras encuestas
- ✅ Diseño responsive (desktop y mobile)
- ✅ Accesibilidad (contraste, foco, navegación por teclado)

## Stack Tecnológico

- **Vite** - Build tool
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **React Router** - Enrutamiento
- **Tailwind CSS v4** - Estilos utilitarios
- **CSS Variables** - Tema personalizable

## Estructura del Proyecto

```
eco-2025/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.tsx
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── PageShell.tsx
│   │   └── ui/
│   │       └── CardButton.tsx
│   ├── config/
│   │   └── survey.ts          # Configuración escalable de la encuesta
│   ├── pages/
│   │   ├── Portada.tsx
│   │   ├── Login.tsx
│   │   ├── Home.tsx
│   │   ├── Introduccion.tsx
│   │   ├── Metodologia.tsx
│   │   ├── Cuestionario.tsx
│   │   ├── Informes.tsx
│   │   └── Tablero.tsx
│   ├── router/
│   │   └── index.tsx
│   ├── utils/
│   │   └── auth.ts            # Utilidades de autenticación
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Instalación

1. Clonar el repositorio o descargar el proyecto
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

Editar `.env` con las credenciales deseadas (por defecto: `admin` / `admin123`)

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

O según la configuración del proyecto:

```bash
npm start
```

5. Abrir en el navegador: `http://localhost:5173`

## Rutas

- `/` - Portada (público)
- `/login` - Login (público)
- `/home` - Home post-login (protegido)
- `/introduccion` - Introducción (protegido)
- `/metodologia` - Metodología (protegido)
- `/cuestionario` - Cuestionario (protegido)
- `/informes` - Informes (protegido)
- `/tablero` - Tablero Looker Studio (protegido)

## Autenticación Mock

Por defecto, las credenciales son:
- Usuario: `admin`
- Contraseña: `admin123`

Se pueden cambiar mediante variables de entorno:
- `VITE_ECO_USER` - Usuario válido
- `VITE_ECO_PASS` - Contraseña válida

El token de sesión expira después de 8 horas.

## Escalabilidad

El proyecto está diseñado para ser fácilmente escalable. Para crear una nueva encuesta (ej: ECO 2026):

1. Editar `src/config/survey.ts` con los nuevos datos
2. (Opcional) Crear una nueva configuración y cambiar la importación en los componentes

El archivo de configuración contiene:
- Nombre y año de la encuesta
- Textos introductorios
- Dimensiones evaluadas
- Propósitos de la encuesta
- URL de Looker Studio
- Rutas personalizadas

## Personalización

### Colores

Los colores se definen en `tailwind.config.js` y se usan como variables CSS en `src/index.css`:

- Primary Blue: `#1050A0`
- Deep Blue: `#003080`
- Mid Blue: `#2060B0`
- Accent Gold: `#C09010`
- Background: `#F4F6F8`
- Surface: `#FFFFFF`

### Looker Studio

Para embebir un tablero de Looker Studio:

1. Publicar el tablero en Looker Studio
2. Copiar la URL del iframe
3. Actualizar `lookerUrl` en `src/config/survey.ts`

## Construcción para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

## Próximos Pasos

- [ ] Integrar backend real para autenticación
- [ ] Conectar con API para informes dinámicos
- [ ] Agregar PDF real del cuestionario
- [ ] Implementar sistema de roles y permisos
- [ ] Agregar más métricas y visualizaciones

## Licencia

Este proyecto es propiedad del Gobierno de la Ciudad de Buenos Aires (GCBA).


