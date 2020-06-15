Español | [English](./README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

## Introducción

[vue-element-admin](https://panjiachen.github.io/vue-element-admin) es una interfáz de administración preparada para producción. Está basada en [vue](https://github.com/vuejs/vue) y usa [element-ui](https://github.com/ElemeFE/element) como conjunto de herramientas de interfáz de usuario.

Vue Element Admin es una solución práctica basada en la nueva plataforma de desarrollo de vue, construida con soporte a i18 para el manejo de múltiples lenguajes, plantillas estándares para aplicaciones de negocio y un conjunto de asombrosas características. Esta herramienta ayuda a construir largas y complejas Aplicacones de una sola página (SPA). Creo que lo que necesites hacer, este proyecto te ayudará.

- [Vista Prévia de la Aplicación](https://panjiachen.github.io/vue-element-admin)

- [Documentación](https://panjiachen.github.io/vue-element-admin-site/)

- [Canal de Gitter](https://gitter.im/vue-element-admin/discuss)

- [Para Donaciones](https://panjiachen.github.io/vue-element-admin-site/donate/)

- [Enlace de Wiki](https://github.com/PanJiaChen/vue-element-admin/wiki)

- [Canal de Gitee](https://panjiachen.gitee.io/vue-element-admin/)

- Plantilla base recomendada para usar: [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)
- Aplicación de Escritorio: [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)
- Plantilla de Typescript: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (Créditos: [@Armour](https://github.com/Armour))
- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

**Después de la versión `v4.1.0+`, la rama por defecto master no tendrá soporte para i18n. Por favor use [i18n](https://github.com/PanJiaChen/vue-element-admin/tree/i18n), los cambios serán incluidos en la rama master**

**la versión actual es `v4.0+` construida con `vue-cli`. Si encuentra algún problema, por favor coloque un [issue](https://github.com/PanJiaChen/vue-element-admin/issues/new). Si desea usar la versión anterior, puede cambiar de rama a [tag/3.11.0](https://github.com/PanJiaChen/vue-element-admin/tree/tag/3.11.0), no relacionado con `vue-cli`**

**Este proyecto no está soportado para versiones muy viejas de navegadores (e.g. IE).**

## Preparación

Necesita instalar [node](https://nodejs.org/) y [git](https://git-scm.com/) localmente. El proyecto es basado en [ES2015+](https://es6.ruanyifeng.com/), [vue](https://cn.vuejs.org/index.html), [vuex](https://vuex.vuejs.org/zh-cn/), [vue-router](https://router.vuejs.org/zh-cn/), [vue-cli](https://github.com/vuejs/vue-cli) , [axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element), toda la solicitud de datos simulada se realiza a través de [Mock.js](https://github.com/nuysoft/Mock).
Entendiendo y aprendiendo esto pudiera ayudarle con su proyecto.

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/PanJiaChen/vue-element-admin/tree/CodeSandbox)

 <p align="center">
  <img width="900" src="https://wpimg.wallstcn.com/a5894c1b-f6af-456e-82df-1151da0839bf.png">
</p>

## Patrocinantes

Se un patrocinante y pon tu logo en nuestro README on GitHub con un enlace directo a tu sitio web. [[Se un Patrocinante]](https://www.patreon.com/panjiachen)

<a href="https://flatlogic.com/admin-dashboards?from=vue-element-admin"><img width="150px" src="https://wpimg.wallstcn.com/9c0b719b-5551-4c1e-b776-63994632d94a.png" /></a><p>Plantilla de Dashboard de administración hecha con Vue, React y Angular.</p>

## Características

```
- Iniciar / Cerrar Sesión

- Permisos de Authentication
  - Página de Permisos
  - Directivas de permisos
  - Página de configuración de permisos
  - Autenticación por dos pasos

- Construcción Multi-entorno
  - dev sit stage  producción

- Características Globales
  - I18n
  - Temas dinámicos
  - Dynamic sidebar (soporte a rutas multi-nivel)
  - Barra de rutas dinámica
  - Tags-view (Tab page Support right-click operation)
  - Svg Sprite
  - Datos de simulación con Mock
  - Pantalla completa
  - Responsive Sidebar

- Editor
  - Editor de Texto Enriquecido
  - Editor Markdown
  - Editor JSON

- Excel
  - Exportación a Excel
  - Carga de Excel
  - Visualización de Excel
  - Exportación como zip

- Tabla
  - Tabla Dinámica
  - Tabla con Arrastrar y Soltar
  - Tabla de edición en línea

- Páginas de Error
  - 401
  - 404

- Componentes
  - Carga de Avatar
  - Botón para subir al inicio
  - Arrastrar y Soltar (Diaglogo)
  - Arrastrar y Soltar (Seleccionar)
  - Arrastrar y Soltar (Kanban)
  - Arrastrar y Soltar (Lista)
  - Panel de división
  - Componente para soltar archivos
  - Adhesión de objetos
  - Contador hasta

- Ejemplo Avanzado
- Registro de Errores
- Tablero de indicadores
- Página de Guías
- ECharts (Gráficos)
- Portapapeles
- Convertidor de Markdown a html
```

## Iniciando

```bash
# clone el proyecto
git clone https://github.com/PanJiaChen/vue-element-admin.git

# vaya al directorio clonado
cd vue-element-admin

# instale las dependencias
npm install

# corra el proyecto como desarrollador
npm run dev
```

Automáticamente se abrirá el siguiente enlace en su navegador http://localhost:9527

## Construcción

```bash
# Construcción para entornos de prueba
npm run build:stage

# Construcción para entornos de producción
npm run build:prod
```

## Avanzado

```bash
# Vista previa con efectos de entorno
npm run preview

# Vista previa  con efectos + análisis de recursos estáticos
npm run preview -- --report

# Chequeo de formato de código
npm run lint

# Chequeo de formato de código y auto-corrección
npm run lint -- --fix
```

Vaya a [Documentación](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) para mayor información

## Registro de Cambios

Los cambios detallados por cada liberación se encuentran en [notas de liberación](https://github.com/PanJiaChen/vue-element-admin/releases).

## Demostración en línea

[Vista Prévia de la Aplicación](https://panjiachen.github.io/vue-element-admin)

