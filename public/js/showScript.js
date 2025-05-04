const data = document.getElementById("my-data");
const listing = JSON.parse(data.dataset.listing);
const mapToken = JSON.parse(data.dataset.map);
const btn = document.querySelector(".btn-del");
const alert = document.querySelector(".alert-danger");
const alertBtns = document.querySelectorAll(".btn-alert");
const body = document.querySelector("body");

// Map
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 12, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${listing.location}</h3><p>Exact Location provided after booking</p>`
    )
  )
  .addTo(map);

// Delete Popup
btn.addEventListener("click", () => {
  alert.style.display = "inline";
  body.style.overflow = "hidden";
});

for (eachBtn of alertBtns) {
  eachBtn.addEventListener("click", () => {
    alert.style.display = "none";
    body.style.overflow = "auto";
  });
}
