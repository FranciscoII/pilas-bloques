import { scheduleOnce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['pilas-canvas'],
  classNameBindings: ['media.isMobile:media-mobile'],
  iframeElement: null,
  challenge: null,
  pilas: null,       /* Se espera que este atributo se defina al
                      * llamar al componente y es obligatorio. */

  didInsertElement() {
    scheduleOnce('afterRender', this, this.initElement);
  },

  willDestroyElement() {
    if (this.pilas) {
      this.pilas.liberarRecursos();
    }
  },

  sceneConstructor(){
    return this.challenge && this.challenge.escena;
  },

  initElement() {
    
    let iframeElement = this.element.querySelector('#innerIframe');

    this.set("iframeElement", iframeElement);

    this.iframeElement.onload = () => {

      if (this.pilas) {
        this.pilas.inicializarPilas(iframeElement, {width: 420, height: 480},this.challenge).
          then((pilas) => {

            if (this.sceneConstructor()) {
              this.pilas.inicializarEscena(iframeElement, this.sceneConstructor());
            } else {
              console.warn("No especificó una escena para cargar en pilas-canvas.");
            }

            /*
             * Invoca a la acción "onReady" que envía el objeto pilas listo
             * para ser utilizado.
             *
             */
            if (this.onReady) {
              this.onReady(pilas);
            } else {
              //console.warn("Se a iniciado el componente pilas-canvas sin referencia a la acción onLoad.");
            }
          });
      } else {
        console.warn("No has enviado el objeto pilas.");
      }

      // onLoad solo se utiliza dentro de la batería de tests. Este
      // componente se tendría que usar mediante el servicio "pilas"
      // en cualquier otro lugar.
      if (this.onLoad)
        this.onLoad({iframeElement});

    };

  },

  reloadIframe(onLoadFunction) {
    this.iframeElement.onload = onLoadFunction;
    this.iframeElement.contentWindow.location.reload(true);
  },

  actions: {
    execute(code) {
      this.reloadIframe(() => {
        alert("Ha cargado el código y está todo listo!");
        this.iframeElement.contentWindow.eval(code);
      });
    },
    clear() {
      this.reloadIframe();
    },
    quitFullscreen() {
      this.set('inFullScreen', false);
    },
    enterFullscreen() {
      this.set('inFullScreen', true);
    }
  }

});
