function generateCertificatesHTML(certificates) {
  let html = "";
  certificates.forEach((certificate) => {
    html += `
        <div class="card certificate" style="width: 30%; height: 100%">
          <img src="${certificate.imgSrc}" class="card-img-top" alt="certificate"/>
          <div class="card-body">
            <h5 class="card-title">${certificate.title}</h5>
            <p class="card-text">${certificate.text}</p>
            <button class="button">verify</button>
          </div>
        </div>
      `;
  });
  return html;
}

// function to generate HTML for carousel items
function generateCarouselItemsHTML(data) {
  let html = "";
  data.forEach((item, index) => {
    const certificatesHTML = generateCertificatesHTML(item.certificates);
    html += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="certificate_group ${item.group}">
            ${certificatesHTML}
          </div>
        </div>
      `;
  });
  return html;
}

// function to append generated HTML to carousel inner
function appendToCarouselInner(html) {
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.innerHTML = html;
}

function makeButtons(data) {
  const buttonParent = document.querySelector('.carousel-indicators');
  let html = '';
  data.forEach((item, index) => {
    const isActive = index === 0 ? 'active' : ''; // Add 'active' class to the first button
    html += `
      <button 
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="${index}"
        class="${isActive}"
        aria-label="Slide ${index + 1}"
        aria-current="${isActive ? 'true' : 'false'}"
      ></button>
    `;
  });
  buttonParent.innerHTML = html;
}

fetch("certificates.json")
    .then((response) => response.json())
    .then((data) => {
      const carouselItemsHTML = generateCarouselItemsHTML(data.jsonData); // Access jsonData directly
      appendToCarouselInner(carouselItemsHTML);
      makeButtons(data.jsonData);
    });