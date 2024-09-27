<template>
  <center style="background-color: pink; height:500px;">
    <nav>
      <router-link class="botao" to="/circulo">Circulo  </router-link>
      <router-link class="botao" to="/trapezio">Trapezio  </router-link>
      <router-link class="botao" to="/triangulo">Triangulo </router-link>
      <router-link class="botao" to="/aaaa"> Aaaa </router-link>
    </nav>
    <router-view></router-view>
  </center>
</template>

<script>
export default{
  name: 'App'
}
</script>

<style>
  .botao{
    margin:20px;
    text-decoration: none;
    color: black;
  }
</style>
