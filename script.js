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
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    // texto da tarefa;
    const span = document.createElement("span");
    span.textContent = tarefaText;

    // botão de excluir individualmente;
    const delBotao = document.createElement("button");
    delBotao.textContent = "Excluir";
    delBotao.className = "delBotao";
    delBotao.addEventListener("click", () => li.remove());

    // marcar tarefa como concluída;
    checkbox.addEventListener("change", function() {
      span.classList.toggle("completed", this.checked);
    });

    // montagem do li;
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBotao);
    tarefaLista.appendChild(li);

    tarefaInput.value = "";
  }

  // excluir tarefas selecionadas;
  delSelecaoBotao.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    checkboxes.forEach(checkbox => {
      checkbox.closest("li").remove();
    });
  });

  tarefaInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTarefa();
  });

});