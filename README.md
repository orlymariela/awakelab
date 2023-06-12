# awakelab

En primer lugar, opté por utilizar Create React App (CRA) en lugar de Vite debido a su estabilidad y comunidad sólida detrás. Esto me permitió reducir el tiempo necesario para configurar el proyecto inicialmente y utilizar recursos disponibles en la amplia documentación que CRA ofrece. Si bien es cierto que Vite es más rápido y óptimo para proyectos pequeños o medianos, consideré que CRA era adecuado para este proyecto dado su madurez y fácil personalización según las necesidades del mismo.

Respecto al enrutamiento, consideré fundamental el uso de React Router ya que facilita la creación de aplicaciones multipágina mediante la definición de diferentes caminos URL asociados con los componentes correspondientes mediante elementos Route. Para mantener una estructura organizada del proyecto, utilicé rutas lógicas y descriptivas lo cual favorece un código limpio e escalable.

En lo relacionado al componente inicial (Books), utilicé hooks como useEffect(), useMemo() y useTable() sugeridos por la documentación oficial de react-table ya que permiten mejorar notablemente nuestro código haciéndolo más legible e escalable basándonos principalmente en estados e ingresos (props).

Por otro lado, agregué una Navbar con un estilo sencillo pero efectivo que proporciona al usuario una forma fácil de navegar dentro del sitio web permitiendo desplazarse entre las diferentes páginas existentes.

Respecto a Tailwind elegí usarla dado mi comodidad previa con esta librería CSS . Creo que ofrece todas las clases necesarias para diseñar la interfaz de usuario sin necesidad de agregar clases personalizadas.

En cuanto a posibles mejoras, considero que podría agregar una página 404 o un mensaje de error cuando alguien visite una ruta incorrecta. También se podría optimizar el rendimiento usando lazy-loading para evitar la carga inicial completa de componentes no esenciales. 

De igual manera, otra posible mejora sería agregar estilos más únicos y atractivos para ofrecer una experiencia del usuario aún más sobresaliente.

Es importante mencionar que, aunque el plazo establecido fue corto en relación a mi vida personal, creo que con más tiempo y experiencia en las librerías utilizadas en este proyecto, mi flujo de trabajo y desarrollo serían aún mejores.