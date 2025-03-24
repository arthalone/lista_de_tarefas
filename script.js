document.addEventListener("DOMContentLoaded", function() {
  const tarefaInput = document.getElementById("tarefaInput");
  const addBotao = document.getElementById("addBotao");
  const tarefaLista = document.getElementById("tarefaLista");
  const delSelecaoBotao = document.getElementById("delSelecao");

  function addTarefa() {
    const tarefaText = tarefaInput.value.trim();
    if (!tarefaText) {
      alert("Por favor, digite uma tarefa!");
      return;
    }

    const li = document.createElement("li");
    
    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    // Texto da tarefa
    const span = document.createElement("span");
    span.textContent = tarefaText;

    // Botão de excluir
    const delBotao = document.createElement("button");
    delBotao.textContent = "Excluir";
    delBotao.className = "delBotao";
    delBotao.addEventListener("click", () => li.remove());

    // Marcar como concluída
    checkbox.addEventListener("change", function() {
      span.classList.toggle("completed", this.checked);
    });

    // Montagem do item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBotao);
    tarefaLista.appendChild(li);

    tarefaInput.value = "";
  }

  // Excluir selecionados
  delSelecaoBotao.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    checkboxes.forEach(checkbox => {
      checkbox.closest("li").remove();
    });
  });

  // Adicionar com Enter
  tarefaInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTarefa();
  });

  // Adicionar com botão
  addBotao.addEventListener("click", addTarefa);
});