let loc = async function () {
    let resm = await fetch("https://ipinfo.io/json?token=YOUR_TOKEN_HERE");
    let data = await resm.json();
    console.log(data);
  
    let kardinata = data.loc.split(",");
  
    let body = document.querySelector("body");
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="info">
          <p><b>Kenglik:</b> ${kardinata[0]}</p>
          <p><b>Uzunlik:</b> ${kardinata[1]}</p>
          <p><b>Mamlakat:</b> ${data.country}</p>
          <p><b>Shahar:</b> ${data.city}</p>
          <p><b>IP Manzil:</b> ${data.ip}</p>
          <p><b>Internet provayder:</b> ${data.org}</p>
          <iframe 
              src="https://maps.google.com/maps?q=${kardinata[0]},${kardinata[1]}&z=14&output=embed"
              width="100%" height="250" style="border:none; margin-top:10px;">
          </iframe>
      </div>
    `;
  
    body.append(div);
  };
  
  let btn = document.querySelector(".click");
  btn.textContent = "locatsiya olish";
  btn.addEventListener("click", loc);
  