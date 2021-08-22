function addFriend() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    if (name == "") {
        alert("Pas de nom :/");
        return;
    } else if (comment == "")
        alert("Salut " + name + " :)")
    else
        alert(name + ": " + comment);
    document.getElementById("content").innerHTML = "<p id='content-end'>Salut meilleur ami! ;)</p>";
}