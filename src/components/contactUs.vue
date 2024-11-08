<template>
    <form @submit.prevent="mostrarPopUp">
    <h1 style="margin-top: 55px; color: white; text-shadow: 0 0 6px #ff004c; font-family: 'Allura';"> Contate-nos </h1>
        <div style="background-color: transparent; display: flex; height: 490px; justify-content: center; align-items: center; ">
        <div class="box1">
        <div>
            <p class="subtitulo">E-mail</p>
        <textarea name="nome" id="" ></textarea>
        </div>

        <div>
            <p class="subtitulo">Assunto</p>
            <textarea name="nome" id="" ></textarea>
            
            
        </div>
        <div>
            <p class="subtitulo">Mensagem</p>
            <textarea typeof="" name="" id="" ></textarea>
    
        </div>
       <button type="submit" class="botao"> Enviar </button>
        </div>
      </div>
      <div v-if="popupVisivel" class="popup" style="background-color: peachpuff; border: 2px solid white; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
">
        <div class="popup-content">
          <p>Mensagem Enviada!</p>
          <button @click="fecharPopUp">Fechar</button>
        </div>
      </div>
    </form>
    
</template>

<script>
  export default {
    data() {
      return {
        popupVisivel: false
      };
    },
    methods: {
      mostrarPopUp() {
        this.popupVisivel = true;
      },
      fecharPopUp() {
        this.popupVisivel = false;
      }
    }
  };
  </script>

<style>
.subtitulo{
    color: rgb(255, 255, 255);
    font-family: 'Allura';
}
.box1{
    background-color: #ff89a3;
    width: 500px;
    height: 450px;
    border-radius: 20px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.219), 0 6px 10px 0 rgba(0, 0, 0, 0.151);
}

.botao{
    background-color: rgb(255, 0, 64);
    border-color: white;
    border-radius: 10px;
    width: 110px;
    height: 50px;
    margin-top: 40px;
    color: white;
}


.popup .popup-content {
    background-color: rgb(255, 167, 218);
    color: rgb(255, 255, 255);
    text-shadow: 0 0 3px rgb(255, 136, 0);
}

</style>