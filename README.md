# 🎬 Movie Finder App

Aplicación web desarrollada con **React + TypeScript**, que permite a los usuarios autenticarse, explorar películas populares y realizar búsquedas de manera rápida y sencilla consumiendo la API de [The Movie Database (TMDb)](https://www.themoviedb.org/).

Diseñada con foco en **performance, accesibilidad y buenas prácticas de arquitectura frontend**.

Este proyecto corresponde a una prueba técnica.

---

ℹ️ **Nota importante**:  
Para efectos prácticos de la evaluación, el archivo `.env` fue subido directamente al repositorio y se está utilizando **mock-axios** en todos los ambientes con el fin de simular correctamente el proceso de login.

📌 **Credenciales de prueba:**

- Usuario: `prueba@gmail.com`
- Contraseña: `123456`

---

## ✨ Características principales

- 🔐 **Autenticación de usuarios** con manejo de token.
- 🎥 **Exploración de películas populares** con paginación.
- 🔎 **Buscador de películas** por nombre.
- ⚡ **Manejo eficiente de estado y cache** con React Query + Redux Toolkit.
- 🖼️ **Optimización de imágenes** (`lazy loading`, tamaños definidos).
- 📱 **Diseño responsivo y accesible** con métricas Lighthouse 90+.
- 🧪 **Mock API** en entorno de desarrollo para pruebas locales.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Estado**: Redux Toolkit, React Query
- **Ruteo**: React Router DOM
- **HTTP Client**: Axios
- **UI/UX**: React Toastify, CSS con metodología BEM
- **Testing & DevTools**: React Query Devtools, Mock API
- **Iconos**: React Icon

---

## 📂 Estructura del proyecto

```bash
src/
 ├── api/               # Configuración de API y mock
 ├── assets/            # Recursos estáticos
 ├── components/        # Componentes reutilizables
 ├── hooks/             # Hooks personalizados
 ├── pages/             # Vistas principales
 ├── routes/            # Rutas privadas y públicas
 ├── services/          # Lógica de negocio (auth, movies)
 ├── store/             # Redux Toolkit slices
 ├── App.tsx            # Rutas principales
 ├── AppProviders.tsx   # Providers globales (Redux, QueryClient, Router)
 └── main.tsx           # Entry point
```

## ⚙️ Instalación y uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tuusuario/movie-finder.git
cd movie-finder
```

### 2️⃣Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con lo siguiente:

```env
VITE_PUBLIC_AUTH_API=http://localhost:5173

VITE_PRIVATE_MOVIE_API=https://api.themoviedb.org/3

VITE_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA5YzFjNmNkYTExZjdlNjkxNzA1NWUwNGMxMzY5OCIsIm5iZiI6MTc1NTIwODc0OS4yMzMsInN1YiI6IjY4OWU1YzJkZjdjODM0ZWJkM2M3MTA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fr5vNeRhX-sinWZuW1cbeIUlx2NGiJqO4eciEWzfmK4

VITE_PATH_IMG=https://image.tmdb.org/t/p/w300
```

👉 Puedes conseguir tu **TOKEN** en [TMDb API](https://www.themoviedb.org/settings/api).

### 4️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
```

### 5️⃣ Compilar para producción

```bash
npm run build
npm run preview
```

## 📸 Capturas de pantalla

### Login

![Login Desktop Screenshot](./screenshots/login_desktop.png)
![Login Validation Screenshot](./screenshots/login_validation.png)

### Buscador de Películas

![Search Desktop Screenshot](./screenshots/search_home_desktop.png)

### Listado de Películas

![Movies Desktop Screenshot](./screenshots/home_desktop.png)

### Pagina de Error

![Error Screenshot](./screenshots/page_error.png)
