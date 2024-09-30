let perguntasPassadas = [];

export function perguntaSorteadas(idPergunta) {

    perguntasPassadas.push(idPergunta);
}

export function listaPerguntas() {

    return perguntasPassadas;
}

export function perguntaRepetida(idPergunta) {

    return perguntasPassadas.includes(idPergunta);
}

export function zerarPerguntas() {

    perguntasPassadas.splice(0, perguntasPassadas.length);
}