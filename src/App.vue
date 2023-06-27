<template>
  <router-view />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  .remover-borda {
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
  }

  .select-formulario {
    width: 115px;
  }

  .margin-10 {
    margin-top: 10px;
  }

  .response-message {
    width: 50%;
    margin: auto;
    margin-top: 10px;
  }

  .corrige-checkbox-menor {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    input {
      margin: auto;
    }
  }
}
</style>
