function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';

    function calcular(num1, num2, operacao) {
        let resultado;

        switch(operacao) {
            case SOMA:
                resultado = num1 + num2;
                break;
            case SUBTRACAO:
                resultado = num1 - num2;
                break;
            case DIVISAO:
                resultado = num1 / num2;
                break;
            case MULTIPLICACAO:
                resultado = num1 * num2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenar(numAtual, numConcat) {
        // caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        // primeiro dígito for '.', concatena '0' antes do '.'
        if (numConcat === '.' && numAtual === '') {
            return numAtual = 0.;
        }
        // caso '.' digitado e já contenha ponto, apenas retornar
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenar,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];
}

export default CalculadoraService;