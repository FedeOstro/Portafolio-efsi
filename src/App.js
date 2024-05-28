import "./App.css";
import Seccion from "./components/Seccion";
import Imagen from "./foto.png";
import c from "./c.jpg"
import css from "./css.png"
import javascipt from "./javascript.png"
import html from "./html.jpg"
import fullstack from "./fullstack.png"
import remo from "./remoicon.jpg"
    function App() {
      return (
        <div>
          <header className="header">
            <h1>Federico Ostrovsky</h1>
            <nav>
              <ul>
                <li>
                  <a href="#Sobre mi">Sobre mi</a>
                </li>
                <li>
                  <a href="#Conocimientos">Conocimientos</a>
                </li>
                <li>
                  <a href="#Experiencia">Experiencia</a>
                </li>
                <li>
                  <a href="#Educación">Educación</a>
                </li>
                <li>
                  <a href="#Certificaciones">Certificaciones</a>
                </li>
                <li>
                  <a href="#Contacto">Contactos</a>
                </li>
              </ul>
            </nav>
          </header>
      <div id="sobremi">
        <div className="centrador">
          <Seccion className="Sobre mí"></Seccion>
          <div class="perfil">
          <img src={Imagen} alt="imagen"></img>
          <p>
            <h2>¡Hola! Soy Federico Ostrovsky</h2>
            Soy Federico Ostrovsky, un entusiasta de la programación y el remo. Me sumerjo tanto en el código como en las aguas, encontrando inspiración en cada remada y línea de código. Mi pasión por el remo no solo me mantiene en forma física, sino que también alimenta mi creatividad y determinación en el mundo del desarrollo de software. Desde las tranquilas aguas del río hasta la complejidad de los algoritmos, busco el equilibrio perfecto entre la fuerza física y la agilidad mental. ¡Únete a mí en este viaje donde los desafíos del remo se entrelazan con los del código, creando un universo de superación y logros!{" "}
          </p>
          </div>
          <Seccion className="Conocimientos"> </Seccion>
          <div class="contenedor">
            <h3>Gracias a la institucion secundaria a la que voy pude aprender lo siguientes lenguajes de programaci</h3>
            <img src={c} alt="c"></img>
            <img src={css} alt="css"></img>
            <img src={javascipt} alt="javascipt"></img>
            <img src={html} alt="html"></img>
          </div>
          <Seccion className="Experiencia"></Seccion>
        <div class="cards">
          <div class="cardexp">
              <div class="headerCard"> 
                <div class="text">
                <h2>Trabajo en clase</h2>
                <h6>Proyectos full stack para la escuela</h6>
                </div>  
                <img src={fullstack} alt="fullstack"></img>
                </div>
                  <div class="datacard">
                    <p>
                      Durante mi trayectoria académica, tuve la oportunidad de sumergirme en el mundo del desarrollo web full stack, participando activamente en proyectos escolares que abarcaban desde la conceptualización hasta la implementación. En estos proyectos, mi enfoque se centró en la creación de soluciones robustas y funcionales mediante el uso de una variedad de tecnologías.</p>
                      <p>En la fase inicial de cada proyecto, colaboré estrechamente con mis compañeros de equipo para definir los objetivos y requisitos del sistema. Utilizando HTML y CSS, diseñamos interfaces de usuario intuitivas y atractivas que reflejaban las necesidades y preferencias de nuestros usuarios finales. La combinación de estas tecnologías nos permitió construir una base sólida para la experiencia de usuario, garantizando la accesibilidad y la usabilidad en todos nuestros proyectos.
                    </p>
                  </div>
          </div>
          <div class="cardexp">
              <div class="headerCard"> 
                <div class="text">
                <h2>Entrenador de remo</h2>
                <h6>Escula de remo en hacoaj para menores</h6>
                </div>  
                <img src={remo} alt="fullstack"></img>
                </div>
                  <div class="datacard">
                    <p>
                    Como entrenador de remo para menores, mi labor se centra en guiar y cultivar el potencial de jóvenes entusiastas en el apasionante mundo de este deporte acuático. Mi trabajo abarca una amplia gama de responsabilidades, desde impartir técnicas fundamentales hasta fomentar un ambiente de equipo sólido y motivador.</p>
                      <p>En primer lugar, me comprometo a enseñar las habilidades básicas del remo de manera segura y efectiva. Esto implica proporcionar instrucciones claras sobre la postura adecuada, el manejo del equipo y las técnicas de remo apropiadas para cada etapa de desarrollo de los jóvenes atletas. Además, superviso de cerca su progreso individual, ofreciendo retroalimentación constructiva para ayudarles a perfeccionar su técnica y mejorar su rendimiento en el agua.
                    </p>
                  </div>
         </div>
        </div>
          <Seccion className="Educación"></Seccion>
            

          <Seccion className="Certificaciones"></Seccion>
          

          <Seccion className="Contacto"></Seccion>
         
        </div>
      </div>
    </div>
  );
}

export default App;
