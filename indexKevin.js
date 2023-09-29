const {createApp} = Vue;
createApp({
    data() {
        return {
          display: '',
        }
    },
      methods: {
        lidarBotao(value) {
          // console.log(numero);
          // if(this.display === '0'){
          //   this.display = numero;
          // } else {
          //   this.display += value;
          // }
          this.display += value;
        },
        limparDisplay() {
          this.display = '';
        },
        lidarDecimal(){
          console.log(".");
          if(!this.display.includes(".")){
            this.display += "."
          }
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