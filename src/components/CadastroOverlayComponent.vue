<template>
    <div class="popup" :class="{ 'active': showPopup, 'hidden': hidden }">
        <div class="close-btn" @click="fecharPopup">&times;</div>
        <div class="form">
            <h2>Cadastro de MOVIMENTAÇÃO</h2>
            <div class="form-element">
                <label for="entrada">Entrada</label>
                <input type="text" id="entrada" placeholder="Insira a data de entrada" />
            </div>
            <div class="form-element">
                <label for="condutor">Condutor</label>
                <input type="text" id="condutor" placeholder="Insira o nome do condutor" />
            </div>
            <div class="form-element">
                <label for="veiculo">Veículo</label>
                <input type="text" id="veiculo" placeholder="Insira a placa do veículo" />
            </div>
            <div class="form-element">
                <button @click="fecharPopup">Concluir</button>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CadastroOverlayComponent',
    props: {
        showPopup: {
            type: Boolean,
            default: false
        },
        hidden: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        fecharPopup() {
            this.$emit('closePopup');
        }
    }
});
</script>
  
<style lang="scss">
.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.25);
    width: 480px;
    padding: 20px 30px;
    background: #fff;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

.popup.active {
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
    background: #888;
    color: #eee;
    text-align: center;
    line-height: 15px;
    border-radius: 15px;
    cursor: pointer;
}

.form h2 {
    text-align: center;
    color: #222;
    margin: 10px 0 20px;
    font-size: 25px;
}

.form-element {
    margin: 15px 0;
}

label {
    font-size: 14px;
    color: #222;
}

input[type='text'] {
    margin: auto;
    margin-top: 5px;
    display: block;
    width: 80%;
    padding: 10px;
    outline: none;
    border: 1px solid #aaa;
    border-radius: 5px;
}

button {
    margin: auto;
    width: 20%;
    height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    background: #222;
    color: #f5f5f5;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    background: #333;
}

button:active {
    background: #111;
}

.hidden {
    display: none;
}
</style>