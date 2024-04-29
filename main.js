let btn = document.querySelector("button");
let parent = document.getElementById("up");
let form = document.getElementsByTagName("form")[0];
let inp = document.getElementById("input");

btn.addEventListener("click", (eo) => {
    eo.preventDefault();
    let newTask = `    <div class="task">
<i class="fa-solid fa-star star"></i>
<p lang="ar" class="para">${inp.value}</p>
<div class="emo">
<i class="fa-solid fa-trash-can can"></i>
<i class="fa-solid fa-face-angry angry"></i>
</div>
</div>`;
    parent.innerHTML += newTask;
});

up.addEventListener("click", (eo) => {
    if (eo.target.className == "fa-solid fa-trash-can can") {
        eo.target.parentElement.parentElement.remove();
    } else if (eo.target.className == "fa-solid fa-face-angry angry") {
        eo.target.parentElement.parentElement
            .getElementsByClassName("para")[0]
            .classList.add("line");
        eo.target.className = "fa-solid fa-heart heart";
    } else if (eo.target.className == "fa-solid fa-heart heart") {
        eo.target.parentElement.parentElement
            .getElementsByClassName("para")[0]
            .classList.remove("line");
        eo.target.className = "fa-solid fa-face-angry angry";
    } else if (eo.target.className == "fa-solid fa-star star") {
        eo.target.classList.add("orange");
        parent.prepend(eo.target.parentElement);
    } else if (eo.target.className == "fa-solid fa-star star orange") {
        eo.target.classList.remove("orange");
    }
});

btn.addEventListener("click", () => {
    inp.value = "";
});
