let taxSwitch = document.getElementById("switchCheckDefault");
let data = document.getElementById("my-data");
let allListings = JSON.parse(data.dataset.listing);

// Final Price Calculator
const finalPrice = () => {
  let newPrice = document.querySelectorAll("#final-tax-price");
  for (let i = 0; i < allListings.length; i++) {
    let listing = allListings[i];
    let listingPrice = listing.price;
    let GST = (18 * listingPrice) / 100;
    let newAmt = listingPrice + GST;
    newPrice[i].innerText = newAmt;
  }
};

// Tax Switch
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
  if (info.style.display === "inline") {
    finalPrice();
  }
});
