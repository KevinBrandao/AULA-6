const {createApp} = Vue;
createApp({
    data() {
        return {
          display: '',
        }
    },
      methods: {
        lidarBotao(value) {
          this.display += value;
        },
        limparDisplay() {
          this.display = '';
        },
        calcularResultado() {
          try {
            this.display = eval(this.display);
          } catch (error) {
            this.display = 'Erro';
          }
        },
      },
}).mount("#app")