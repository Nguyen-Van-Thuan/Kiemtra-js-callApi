//Call API
async function callApi() {
  const response = await axios.get('https://deploy-jsonser-vercel.vercel.app/elephantsArray')
  const listData = response.data
  return listData
}
//Thực thi
callApi().then(res => {
  let htmlCode = ``;
  res?.map(item => {
    console.log(item);
    htmlCode += `
    <div class="col-12 col-sm-6 col-md-3">
      <div class="card">
        <img
          class="card-img-top"
          src="${item.pictureUrl}"
          alt="${item.imageAlt}"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">${item.title}</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect
            and engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
    `
  });
  const elephantCards = document.querySelector(".all-elephant-cards");
  elephantCards.innerHTML = htmlCode;
})