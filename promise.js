const container = document.querySelector(".container1");

const inputBox = document.querySelector(".input-search");
const searchBottom = document.querySelector(".cheks");
// getAnyCountry('')

searchBottom.addEventListener("click", function () {
  const inputSearch = document.querySelector(".input-search").value;

  if (!inputSearch) {
    document.qu;
  }
  const countryFetch = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        getAnyCountry(data[0]);
      });
  };
  countryFetch(inputSearch);
});

const getAnyCountry = (data) => {
  document.querySelector(".input-search").value = "";

  const html = `

  <div class="row  mb-3">
  <div class="col-12 me-3">
  <div class=" card m-auto mt-5 mb-5  shadow border" style="width: 20rem;">
  <img src="${data.flag}" class="card-img-top" height="200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <h6 class="card-title text-muted">Region: ${data.region}</h6>
    <h6 class="card-title text-muted">Sub-Region: ${data.subregion}</h6>
    <div class="d-flex">
        <p class="me-3">population:</p>
        <p  class="fw-bolder">${(+data.population / 1000000).toFixed(
          2
        )}M people</p>
    </div>
    <div class="d-flex">
        <p class="me-3">language:</p>
        <p  class="fw-bolder">${data.languages[0].name}</p>
    </div>
    <div class="d-flex">
        <p class="me-3">currency:</p>
        <p class="fw-bolder">${data.currencies[0].name}</p>
        
    </div>
    <div>
    <div class="d-flex">
    <p class="me-3">Capital:</p>
    <p class="fw-bolder">${data.capital}</p>
    </div>

    </div>

</div>
</div>
</div>
  </div>
 
  `;
  container.insertAdjacentHTML("afterbegin", html);
};
