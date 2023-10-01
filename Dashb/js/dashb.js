function closing() {
    var el = document.getElementById("btnn");
    kmela = document.getElementById("kmela");
    el.classList.toggle("btnn");
    kmela.classList.toggle("kmelahov");
}
function profl() {
    var cl = document.getElementById("prof");
    cl.classList.toggle("opa");

}
function clsmgt() {
    var cla = document.getElementById("addmgt");
    cla.classList.toggle("opa");
}
function clsti() {
    var cla = document.getElementById("addti");
    cla.classList.toggle("opa");

}
function addmgt() {
    // Recuperation bl Id
    let cont = document.getElementById('contcardmgt');
    let taswira = document.getElementById('taswira').value;
    let nom = document.getElementById('nom').value;
    let details = document.getElementById('details').value;

    // Nasna3 elements mte3i
    let card = document.createElement("div");
    let card_body = document.createElement("div");
    let disp = document.createElement("div");
    let fa1 = document.createElement("span");
    let fa2 = document.createElement("span");
    let fa3 = document.createElement("span");
    let fa4 = document.createElement("span");
    let fa5 = document.createElement("span");
    let trash = document.createElement("i");
    let img = document.createElement("img");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");
    let btn = document.createElement("button");

    // N3abi 'ktiba'
    img.src = taswira;
    card_title.innerHTML = nom;
    card_text.innerHTML = details;
    btn.innerHTML = "Go somewhere";

    // Add classes
    card.className = 'card';
    card.setAttribute("id", nom);
    card_body.className = 'card-body';
    trash.className = 'fa-solid fa-trash trash';
    img.className = 'card-img-top';
    disp.className = 'disp';
    fa1.className = 'fa fa-star fa-3x scl';
    fa2.className = 'fa fa-star fa-3x scl';
    fa3.className = 'fa fa-star fa-3x scl';
    fa4.className = 'fa fa-star fa-3x scl';
    fa5.className = 'fa fa-star fa-3x scl';
    card_title.className = 'card-title';
    card_text.className = 'card-text';
    btn.className = 'btn btn-primary plsbtn';

    // N3akabhom 
    cont.appendChild(card);
    card.appendChild(trash);
    card.appendChild(img);
    card.appendChild(card_body);
    card_body.appendChild(disp);
    disp.appendChild(card_title);
    disp.appendChild(fa1);
    disp.appendChild(fa2);
    disp.appendChild(fa3);
    disp.appendChild(fa4);
    disp.appendChild(fa5);
    card_body.appendChild(card_text);
    card_body.appendChild(btn);
    trash.addEventListener('click', function () {
        deleteItem(nom);
    });
    clsmgt();
    taswira = "";
    nom = "";
    details = "";
}

function addti() {
    //recuperation bl Id
    cont = document.getElementById('contcardti');
    let taswira = document.getElementById('taswirati').value;
    let nom = document.getElementById('nomti').value;
    let details = document.getElementById('detailsti').value;
    //nasna3 elements mte3i
    let card = document.createElement("div");
    let card_body = document.createElement("div");
    let img = document.createElement("img");
    let disp = document.createElement("div");
    let fa1 = document.createElement("span");
    let fa2 = document.createElement("span");
    let fa3 = document.createElement("span");
    let fa4 = document.createElement("span");
    let fa5 = document.createElement("span");
    let trash = document.createElement("i");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");
    let btn = document.createElement("btn");
    //n3abi 'ktiba'
    img.src = taswira
    card_title.innerHTML = nom;
    card_text.innerHTML = details;
    btn.innerHTML = "Go somewhere";
    //add class
    card.className = 'card';
    card.setAttribute("id", nom);
    card_body.className = 'card-body';
    trash.className = 'fa-solid fa-trash trash delete-button';
    img.className = 'card-img-top';
    disp.className = 'disp';
    fa1.className = 'fa fa-star fa-3x scl';
    fa2.className = 'fa fa-star fa-3x scl';
    fa3.className = 'fa fa-star fa-3x scl';
    fa4.className = 'fa fa-star fa-3x scl';
    fa5.className = 'fa fa-star fa-3x scl';
    card_title.className = 'card-title';
    card_text.className = 'card-text';
    btn.className = 'btn btn-primary plsbtn';
    //nrakabhom 
    cont.appendChild(card);
    card.appendChild(trash);
    card.appendChild(img);
    card.appendChild(card_body);
    card_body.appendChild(disp);
    disp.appendChild(card_title);
    disp.appendChild(fa1);
    disp.appendChild(fa2);
    disp.appendChild(fa3);
    disp.appendChild(fa4);
    disp.appendChild(fa5);
    card_body.appendChild(card_text);
    card_body.appendChild(btn);
    //id +
    trash.addEventListener('click', function () {
        deleteItem(nom);
    });

}
function deleteItem(itemId) {
    var itemToDelete = document.getElementById(itemId);
    if (itemToDelete) {
        itemToDelete.remove();
    }
}
function jareb(circ, cont) {
    circ = document.getElementById(circ);
    cont = document.getElementById(cont);
    circ.classList.toggle("circc");
    cont.classList.toggle("containers");


}


/*document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.getElementById("contcardmgt");

    function deleteCard(cardElement) {
        cardElement.remove();
    }

    cardList.addEventListener("click", function (e) {
        if (e.target && e.target.className === "delete-button") {
            const cardElement = e.target.parentElement;
            deleteCard(cardElement);
        }
    });
});

*/