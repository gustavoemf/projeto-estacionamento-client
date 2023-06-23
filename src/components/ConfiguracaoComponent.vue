<template>
    <div id="header-configuracao">
        <h2>CONFIGURAÇÕES</h2>
        <div class="configuracao-buttons">
            <button type="submit" class="btn btn-success">Salvar</button>
        </div>
    </div>
    <div class="body-configuracao">
        <div class="form">
            <div class="form-valores">
                <div class="form-element">
                    <label for="inputsValorHora" class="form-label">Valor Hora:</label>
                    <input type="number" min="0" placeholder="Valor" id="inputsValorHora" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputValorMulta" class="form-label">Valor Multa:</label>
                    <input type="number" min="0" placeholder="Valor" id="inputValorMulta" class="form-control" />
                </div>
            </div>
            <div class="form-expedientes">
                <div class="form-element">
                    <label for="inputInicioExpediente" class="form-label">Início expediente:</label>
                    <input type="time" id="inputInicioExpediente" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputFimExpediente" class="form-label">Fim expediente:</label>
                    <input type="time" id="inputFimExpediente" class="form-control" />
                </div>
            </div>
            <div class="form-descontos">
                <div class="form-element">
                    <label for="inputTempoParaDesconto" class="form-label">Tempo para desconto:</label>
                    <input type="number" min="0" placeholder="Tempo" id="inputTempoParaDesconto" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputTempoGanhoDeDesconto" class="form-label">Tempo ganho de desconto:</label>
                    <input type="number" min="0" placeholder="Tempo" id="inputTempoGanhoDeDesconto" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputGerarDesconto" class="form-label">Gerar desconto</label>
                    <select id="inputGerarDesconto" class="form-select">
                        <option selected>Sim</option>
                        <option>Não</option>
                    </select>
                </div>
            </div>
            <div class="form-vagas">
                <div class="form-element">
                    <label for="inputVagasCarro" class="form-label">Vagas carros:</label>
                    <input type="number" min="0" placeholder="Quantidade" id="inputVagasCarro" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputVagasMoto" class="form-label">Vagas motos:</label>
                    <input type="number" min="0" placeholder="Quantidade" id="inputVagasMoto" class="form-control" />
                </div>
                <div class="form-element">
                    <label for="inputVagasVans" class="form-label">Vagas vans:</label>
                    <input type="number" min="0" placeholder="Quantidade" id="inputVagasVans" class="form-control" />
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
    overflow: hidden;
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
        color: rgb(33, 37, 41);
    }

    button {
        margin-left: 15px;
        width: 100px;
        height: 40px;
        color: white;
    }
}

.body-configuracao {
    .form {
        display: flex;
        flex-direction: column;

        .form-valores,
        .form-expedientes,
        .form-descontos,
        .form-vagas {
            display: flex;
            flex-direction: row;
            margin-left: 30px;
        }

        .form-element {
            margin: 20px 20px;

            label {
                color: black;
            }

            input {
                outline: none;
                box-shadow: none;
                border-color: #ced4da;
            }

            input,
            select {
                border: 1px solid black;
                padding-left: 10px;
            }
        }
    }
}

.form-select:focus {
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
</style>