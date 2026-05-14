const collection = [  { name: "Cameron", franchise: "Camera Verse", gen: 1 },  { name: "Mjes", franchise: "Camera Verse", gen: 1 },  { name: "Credence", franchise: "TMJ", gen: 1 },  { name: "Katie", franchise: "TMJ", gen: 1 },];

function renderCollection(items) {
const display = document.getElementById('collection-display');
display.innerHTML = ''; // clear everything
items.forEach((item) => {
display.innerHTML += `
<div class="item-card">
<h3>${item.name}</h3>
<p>Franchise: ${item.franchise}</p>
<p>Rating: ${item.rating}/10</p>
</div>
`;
});
}
// Call it on page load:
renderCollection(collection);