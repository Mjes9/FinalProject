const collection = [  { name: "Cameron", franchise: "Camera Verse", rating: 6, notes: "Cool Starlight", img: "https://via.placeholder.com/150" },  { name: "Mjes", franchise: "Camera Verse", rating: 7, notes: "Cool Valgonian", img: "https://via.placeholder.com/150" },  { name: "Credence", franchise: "TMJ", rating: 10, notes: "Cute bean", img: "https://via.placeholder.com/150" },  { name: "Katie", franchise: "TMJ", rating: 9, notes: "Cool gamer girl", img: "https://via.placeholder.com/150" }];
//RENDER FUNCTION
function renderCollection(items) {
const display = document.getElementById('collection-display');
display.innerHTML = ''; // clear everything
items.forEach((item) => {
display.innerHTML += `
<div class="item-card">
<h3>${item.name}</h3>
<p>Franchise: ${item.franchise}</p>
<p>Rating: ${item.rating}/10</p>
<p>Notes: ${item.notes}</p>
<img src="${item.img || 'https://via.placeholder.com/150'}" alt="${item.name}">
</div>
`;
});
}
// Call it on page load:
renderCollection(collection);