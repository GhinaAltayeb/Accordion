const accDiv = document.querySelector(".acc-div");

accDiv.addEventListener("click", (e) => {
  const head = e.target.closest(".acc-head");
  if (!head) return;

  const btn = head.querySelector(".btn");
  const card = head.closest(".acc-card");
  const content = card.querySelector(".acc-content");
  const isOpen = !content.classList.contains("hidden");

  accDiv.querySelectorAll(".acc-card").forEach((card) => {
    card.querySelector(".acc-content").classList.add("hidden");
    card.querySelector(".acc-head .btn").innerHTML = "+";
  });

  if (!isOpen) {
    content.classList.remove("hidden");
    btn.innerHTML = "-";
    return;
  }
});
