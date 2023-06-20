<template>
    <div id="header-configuracao">
        <h2>CONFIGURAÇÕES</h2>
        <div class="configuracao-buttons">
            <button type="button" class="btn btn-info">Salvar</button>
            <button type="button" class="btn btn-light" style="background-color: #aaa;">Cancelar</button>
        </div>
    </div>
    <div class="body-configuracao">
        <div class="form">
            <div class="form-valores">
                <div class="form-element">
                    <label for="valorHora">Valor Hora:</label>
                    <input type="text" id="valorHora" placeholder="Valor da hora" />
                </div>
                <div class="form-element">
                    <label for="valorMulta">Valor Multa:</label>
                    <input type="text" id="valorMulta" placeholder="Valor da multa" />
                </div>
            </div>
            <div class="form-expedientes">
                <div class="form-element">
                    <label for="inicioExpediente">Início expediente:</label>
                    <input type="text" id="inicioExpediente" placeholder="Horas para início do expediente" />
                </div>
                <div class="form-element">
                    <label for="fimExpediente">Fim expediente:</label>
                    <input type="text" id="fimExpediente" placeholder="Horas para fim do expediente" />
                </div>
            </div>
            <div class="form-gerar-desconto">
                <div class="form-element">
                    <label for="gerarDesconto">Gerar desconto:</label>
                    <input type="text" id="gerarDesconto" placeholder="Gerar desconto?" />
                </div>
            </div>
            <div class="form-descontos">
                <div class="form-element">
                    <label for="tempoParaDesconto">Tempo para desconto:</label>
                    <input type="text" id="tempoParaDesconto" placeholder="Tempo para desconto" />
                </div>
                <div class="form-element">
                    <label for="tempoGanhoDeDesconto">Tempo ganho de desconto:</label>
                    <input type="text" id="tempoGanhoDeDesconto" placeholder="Tempo ganho de desconto:" />
                </div>
            </div>
            <div class="form-vagas">
                <div class="form-element">
                    <label for="vagasCarro">Valor Hora:</label>
                    <input type="text" id="vagasCarro" placeholder="Quantidade de vagas" />
                </div>
                <div class="form-element">
                    <label for="vagasMoto">Valor Hora:</label>
                    <input type="text" id="vagasMoto" placeholder="Quantidade de vagas" />
                </div>
                <div class="form-element">
                    <label for="vagasVans">Valor Hora:</label>
                    <input type="text" id="vagasVans" placeholder="Quantidade de vagas" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CadastroHeaderComponent"
});
</script>
  
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#header-configuracao {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 15px;
    margin: 0px 30px;
    border-bottom: 1px black solid;

    .configuracao-buttons {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        margin-right: 30px;
    }

    h2 {
        margin-left: 30px;
    }

    button {
        margin-left: 15px;
        width: 100px;
        height: 40px;
        color: black;
        font-weight: bold;
    }
}

@media only screen and (max-width: 500px) {
    #header-configuracao {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        margin-left: 30px;
    }
}

.body-configuracao {
    .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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
            width: 20%;
            padding: 10px;
            outline: none;
            border: 1px solid #aaa;
            border-radius: 5px;
        }
    }
}
</style>