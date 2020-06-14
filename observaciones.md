### Comentarios

Pieri, felicitaciones por un excelente trabajo. 

Como es habitual en vos, tu pagina esta impecablemente maquetada, con mucha atencion a detalles. Tu codigo es claro y prolijo, demostrando la comprension de los principios basicos de React y los temas vistos a lo largo del curso. 

Tus componentes son muy claros, todos hacen exactamente lo que se espera de ellos y el codigo es muy facil de recorrer y entender por su claridad. Sentite muy orgullosa, ya que tu app tiene una complejidad importante, pero el codigo es sencillo y al punto: un gran logro. 

Te dejo algunas observaciones que, como siempre en tu caso, aclaro que son solo para mejorar y que no desmerecen tu buen trabajo:

- Tenes algunos warnings en la consola que deberias eliminar lo antes posible: no queda bien que esten ahi para una persona que mira tu codigo con intenciones de contratarte. Te las voy mencionando a lo largo del codigo. 

- Tenes varios console.log olvidados a lo largo del trabajo, que tambien dan mala impresion en un trabajo terminado. 

- Varias veces usas componentes que no tienen contenido y escribis tanto la etiqueta de apertura como la de cierre. Por ejemplo <Card></Card>. Es mejor en esos casos escribirla resumida: <Card />

- Deberias sacar lo antes posible la API_KEY del codigo. Como comentamos en clase, esto es practicamente una contraseña, y no deberia nunca subirse a un repositorio publico. Si es solo para mostrar tu codigo en github, mi sugerencia es reemplazar el string que tiene la api key por un API_KEY y cualquier persona que te lea va a entender a que se refiere. Una mejor alternativa seria incluir una variable de entorno: no dejes de consultarme si te interesa hacerlo. 

- El substring "https://api.themoviedb.org/3/" se repite muchas, muchas veces a lo largo del codigo, y es logico ya que es la base de todas las url de nuestra api. Lo habitual y preferible en este caso es convertirla en una variable global. Por ejemplo en la carpeta /assets podemos hacer un archivo (lo usual es que se llame constants.js) y ahi asignarles una variable a estos strings que se usan siempre. Luego se lo exporta, y se lo importa en donde se necesite. 

Por ejemplo:


```js 
const API_URL = "https://api.themoviedb.org/3/";

export default API_URL
```

Y al usar la variable escribimos: 

```js
API URL + 'trending/movie/week?api_key=' + API_KEY 
```

- Tu tabulado es bastante desprolijo a veces y dificulta la lectura. Acostumbrate a mejorarlo antes del commit o a usar el "format document" de Visual Studio. 

- Dejo otros comentarios a lo largo del codigo. 




Para concluir, lograste hacer un trabajo excelente, Pieri. En todo momento, desde el comienzo del curso, demostraste un enorme talento y capacidad de trabajo para aplicar lo aprendido. Me alegra mucho que cierres un desempeño tan bueno con un trabajo de esta calidad. Felicitaciones!
