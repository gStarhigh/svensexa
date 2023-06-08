// Hämta listelementen och checkboxarna
var listItems = document.querySelectorAll('#checkboxList li');
var checkboxes = document.querySelectorAll('#checkboxList input[type="checkbox"]');

// Lägg till händelselyssnare på listelementen
listItems.forEach(function (item) {
    item.addEventListener('click', function () {
        // Byt checkboxens markeringsstatus när listelementet klickas på
        var checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    });
});