<h1 align="center">
    Day02 - CSS
</h1>

<p align="center">
    <img width="300" height="300" src="https://s2.qwant.com/thumbr/0x0/6/2/84efd315985778bffd98c84c8fc4ce7d8b037680303792ec80e9fabb5b8370/css31600.png?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fcss31600.png&q=0&b=1&p=0&a=1">
</p>
<br>

<h3 align="center">
    L'objectif de cette journée est de découvrir les bases du CSS.
</h3>
<br><br>

### **Qu'est-ce que le CSS?**

Le CSS (Cascading Style Sheets) est un langage informatique, il est utilisé afin de rendre un site web plus esthétique. <br><br>

# **Préparatif**

Afin d'utiliser du CSS, nous devons relier notre fichier html à un fichier css. Pour ce faire, nous allons crée un fichier, nommons le "index.css". Puis nous allons modifier le HTML de notre choix pour avoir une structure similaire à:

```html
<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="index.css">
</head>
<body>
    ...
</body>
</html>
```

# **Exercice**


### **Exercice 1**

```
Marvin : Salut, j'ai une mauvaise nouvelle, le patron à vont ton site, et il a adoré la structure!
Mais je me suis fait gronder car j'ai oublié de te dire d'utiliser du CSS.

Bon du coup, on va donner un peu de style à ton site ;)

On va commencer par quelque chose de facile, je trouve que le fond de nos pages internets sont un peu fade, essayant de changer la couleur!

Je t'ai envoyé un exemple, avec des explications, j'espère que ça t'aidera!
```
```CSS
subi-l-action {
    propriété : valeur-de-la-propriété;
}
/*
    subi-l-action:
        -si c'est une balise spécifique: le nom (exemple: body)
        -si c'est une classe: '.' + le nom
        -si c'est un id: '#' + le nom
        - etc

    propriété:
        par exemple pour la couleur du fond : background-color
*/
```
```html
<div id="example" class="class1 class2">

</div>
<p id="text1"></p>
<!-- la balise div sert à rassembler plusieurs balises -->
```

### **Exercice 2**

```
Marvin: Une fois que tu as changé le fond, essaye d'arrondir les angles des images.
Et aussi de les mettre toutes à la même taille!

Pour ce faire regarde les propriétés suivantes:
height, width, border-radius.
```

### **Exercice 3**

```
Marvin: En ce qui concerne la barre de navigation, on va avoir du boulot! :)

1) Nous allons modifier l'affichage pour tout mettre sur une ligne. (la propriété display)

2) Une fois tout placer sur la même ligne, mettez en place un espace entre les liens des différentes sections. (la propriété margin)

3) Afin de rendre la barre de navigation un peu plus lisible, on va mettre en place un hover sur les liens des sections.
Ceci permet de faire une action quand le curseur se trouve sur une section/balise spécifique.
Dans notre cas nous allons changer la couleur du texte. (la pseudo class hover, la propriété color)
```

### **Exercice 4**

```
Marvin: Finalement nous allons mettre en place une animation afin de rendre le site un peu plus ludique! :) Notre but est de faire tourner nos images! ;)

Voici un petit tuto:
```
```CSS
img {
    animation: tourner 1s infinite
    /* Ici j'ai choisi de faire l'animation "tourner" qui se fera en 1s à l'infini*/
}

@keyframes tourner {
    0% {transform: ...;} /* à remplir */
    100% {transform: ...;} /* à remplir */
}
/* Ici nous avons cré" l'animation "tourner".
   Le mot-clé "transform" sert à indiquer une transformation!
   Il nous restera juste à indiquer le type de transformation :) 
*/
```

# **Fin**

Maintenant que vous avez fini tous les exos, vous connaissez toutes les bases du CSS, vous êtes libre de vous faire plaisir sur le site!!! :smiley:
