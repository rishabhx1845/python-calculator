let exp = "";
const expr = document.getElementById("expression");
const result = document.getElementById("result");

function update() {
  expr.textContent = exp;

  fetch("/calculate", {
    method: "POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ expression: exp })
  })
  .then(res=>res.json())
  .then(data=>{
    result.textContent = data.result;
  });
}

document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("click", e=>{
    let v = e.target.innerText;

    if(["AC","⌫","="].includes(v)) return;

    exp += v;
    update();
  });
});

function clearScreen(){
  exp = "";
  update();
}

function backspace(){
  exp = exp.slice(0,-1);
  update();
}

function calculate(){
  update();
}
