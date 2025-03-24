document.addEventListener("DOMContentLoaded", function() {
  const tarefaInput = document.getElementById("tarefaInput");
  const addBotao = document.getElementById("addBotao");
  const tarefaLista = document.getElementById("tarefaLista");
  const delSelecaoBotao = document.getElementById("delSelecao");

    //adicionar nova tarefa;
  function addTarefa() {
    const tarefaText = tarefaInput.value.trim();
    if (!tarefaText) return;

    const li = document.createElement("li");

    //caixa de check para seleção;
    const checkbox = document.
  }

})