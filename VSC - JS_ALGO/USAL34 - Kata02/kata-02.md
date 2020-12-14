# Georges et sa nouvelle montre

Georges a acheté une nouvelle montre, et elle est belle cette montre. Cependant celle-ci affiche uniquement les millisecondes, pas très pratique se dit Georges !

Vous allez aider Georges car vous êtes bons. Vous devez lui écrire un petit script pour traduire ces millisecondes en heures, minutes et secondes !

## Exemple :

milliseconds = 61000 ----> "00:01:01"
milliseconds = 3601000 ---> "01:00:01"

---

## Code

```js
function whatTimeIsIt(milliseconds) {
  //TODO
}

whatTimeIsIt(0); // => "00:00:00"
whatTimeIsIt(50); // => "00:00:00"
whatTimeIsIt(1000); // => "00:00:01"
whatTimeIsIt(61000); // => "00:01:01"
whatTimeIsIt(864212); // => "00:14:24"
whatTimeIsIt(3601000); // => "01:00:01"
whatTimeIsIt(9601240); // => "02:40:01"
```

## Informations

`milliseconds` sera toujours inférieur à 86399999 ("23:59:59")

Petit rappel :
1 seconde = 1000 millisecondes
1 minute = 60 secondes
1 heure = 60 minutes

Pour réaliser ce kata, vous aurez besoin du modulo https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques#Reste
