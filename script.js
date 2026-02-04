filterSelection("all")
function filterSelection(c) {
  var x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
  }
}

var wrapper = document.querySelector(".filter-wrapper");
if (wrapper) {
    var btns = wrapper.getElementsByClassName("filter-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            var current = wrapper.getElementsByClassName("active");
            if (current.length > 0) current[0].classList.remove("active");
            this.classList.add("active");
        });
    }
}

var accHeaders = document.getElementsByClassName("accordion-header");
for (var i = 0; i < accHeaders.length; i++) {
    accHeaders[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
        let icon = this.querySelector(".icon");
        icon.innerHTML = this.parentElement.classList.contains("active") ? "−" : "+";
    });
}

let topBtn = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };


// Funktion für den Produkt-Slider
function moveSlider(direction) {
    const track = document.getElementById('sliderTrack');
    
    // Wir berechnen die Weite einer Karte dynamisch
    // Falls keine Karte da ist, nehmen wir einen Standardwert
    const card = track.querySelector('.product-card');
    const scrollStep = card ? card.offsetWidth + 20 : 270; 

    track.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth'
    });
}

// Falls du die Funktion später erweitern willst, kannst du sie hier exportieren 
// oder weitere Event-Listener hinzufügen.

function filterSelection(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    const track = document.getElementById('sliderTrack');

    // 1. Buttons optisch aktualisieren (active Klasse)
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Sucht den Button, der geklickt wurde
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // 2. Produkte filtern
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block'; // Alle zeigen
        } else {
            // Prüfen, ob die Karte die Kategorie-Klasse hat
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none'; // Verstecken
            }
        }
    });

    // 3. Slider zurück auf Anfang setzen, damit es keine Lücken gibt
    track.scrollTo({ left: 0, behavior: 'smooth' });
}