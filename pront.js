const btn = document.getElementById("btn");

const result = document.getElementById("result");

btn.addEventListener("click", async () => {

  result.innerHTML = "불러오는 중...";

  const nx = 60;
  const ny = 127;

  const response =
    await fetch(`/api/weather?nx=${nx}&ny=${ny}`);

  const data = await response.json();

  const items =
    data.response.body.items.item;

  let html = "";

  items.slice(0, 10).forEach(item => {

    html += `
      <p>
        ${item.category} :
        ${item.fcstValue}
      </p>
    `;
  });

  result.innerHTML = html;

});
