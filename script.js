const tableau = [1, 2, [3, [4], [[[5, 6]]]]];

// On créer une fonction qui prend en paramètres un tableau, et la profondeur du tableau.
function applatissement(tab, profondeur) {
  // Si la valeur n'est pas un tableau
  if (!Array.isArray(tab)) {
    // On retourne la valeur car l'élément ne peut être qu'un élément seul.
    return tab;
  }
  // Si pronfondeur est supérieur à 0
  return profondeur > 0
    // On 
    ? tab.reduce((acc, val) => acc.concat(applatissement(val, profondeur - 1)), [])
    : tab.slice();
}

console.log(applatissement(tableau, 4));