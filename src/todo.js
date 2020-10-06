// Me montrer tes avancement a chaque étape que tu considère terminer

// 1) Cree un composant qui sera importé par app.vue et rendu dans le teamplate de app.vue
// https://fr.vuejs.org/v2/guide/single-file-components.html


// 2) Cree une props simple qui passe en string une valeur depuis app.vue, cette props sera utiliser / rendu dans le composant
// cree en étape 1
// https://fr.vuejs.org/v2/guide/components-props.html


// 3) Mettre en place un champ d'input dans app.vue, relier a un v-model (qui lie la valeur de ton champ d'input a une variable)
// Passer la variable dynamique (celle lié au v-model) en props a ton composant crée en 1), a la place de ta props crée en 2)
// https://fr.vuejs.org/v2/guide/forms.html


// 3-bis) Donner un petit titre (label), a la valeur passer en props en 3)
// Crée un classe conditionnel qui affique un display différent au titre selon qu'il y ai une valeur afficher ou non
// Exemple : Si pas de valeur sous le titre, le titre est noir, si il y a une valeur le titre est rouge
// Point bonus : Si la valeur sous le titre dépasse 5 lettre, celui ci devient vert !
// https://fr.vuejs.org/v2/guide/class-and-style.html


// 4) Crée un tableaux vide dans le data de ton app.vue
// Crée un champ autre champ d'input, qui une fois validé :
//    1 - push la valeur validé dans le tableaux précédament cité
//    2 - Remet la valeur du champ d'input a 0 (ou '' si tu préfert)
// Pas de lien d'aide ici, tu sais faire des push dans un tableau ;)


// 5) Passer ce tableaux en props au composant crée en 1
// Utiliser la Directive v-for pour boucler sur ce tableau et afficher les valeurs dans le composants
// https://fr.vuejs.org/v2/guide/list.html


// 6) Donne un titre a ce tableau (dans le rendu html, genre, En desous mon super tableaux !)
// Faire en sorte que ce titre (ainsi que le tableau) ne s'affique que si il y ai au moins un élément dans le tableau (v-if est ton amis)
// https://fr.vuejs.org/v2/guide/conditional.html


// 7) Crée un bouton dans ton composant (tjr celui en étape 1) qui lance une fonction écrit dans ce même composant
// https://fr.vuejs.org/v2/guide/events.html


// 8) Faire en sorte que la function crée en 7) lance une fonction dans app.vue qui va remettre le tableaux de l'étape 4 a 0
// https://fr.vuejs.org/v2/guide/components-custom-events.html


// 9) Faire une mixin pour appeler la même fonction (qui fais un console.log par exemple) via un bouton a la fois sur app.vue
// et ton composant fait en étape 1
// https://vuejs.org/v2/guide/mixins.html


// 10) Faire en sorte que tes  fonction console.log (fais en 9) soit déclancher dès que ton app se charge
// Bonus point, trouve un moyen de différencier la valeur du console.log pour app.vue et ton composant en 1)
// https://fr.vuejs.org/v2/guide/instance.html (bcp de txt pr pas tant que ca, Keep it simple)


// 11) Installe vue-bootstrap dans le projet et utilise n'importe quel composant de vue-bootstrap
// https://bootstrap-vue.org/


// 12) Installe le routeur de vue et fais un petit routeur basique qui méne sur ton composant 1) via un link ou en tappant directement l'url
// https://router.vuejs.org/fr/
