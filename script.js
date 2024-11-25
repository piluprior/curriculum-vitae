// test connexion fichier javacript
console.log("Fichier JavaScript lié avec succès !");

// déroulement collapses
// document.addEventListener("DOMContentLoaded", function () {
//     let currentCollapse = null;  // variable pour stocker le collapse actuellement ouvert

//     // cibler tous les liens du menu
//     document.querySelectorAll('.navbar-nav .dropdown-item').forEach(anchor => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault(); // empêcher le comportement par défaut du lien

//             // extraire l'ID de l'ancre
//             const targetId = this.getAttribute("href").substring(1); // supprimer le '#'
            
//             // rechercher l'élément correspondant à l'ID
//             const targetElement = document.getElementById(targetId);

//             // si l'élément n'est pas trouvé, on arrête le script
//             if (!targetElement) return;

//             // trouver le collapse associé
//             const collapseElement = document.querySelector(`#${targetId} + .accordion-collapse`);
            
//             // si un collapse est déjà ouvert, on le ferme
//             if (currentCollapse && currentCollapse !== collapseElement) {
//                 const currentCollapseInstance = bootstrap.Collapse.getInstance(currentCollapse);
//                 if (currentCollapseInstance) {
//                     currentCollapseInstance.hide(); // Ferme le collapse précédent
//                 }
//             }

//             // vérifier si le collapse est déjà ouvert, sinon on l'ouvre
//             if (collapseElement && !collapseElement.classList.contains("show")) {
//                 const collapseInstance = new bootstrap.Collapse(collapseElement, { toggle: true });
//             }

//             // mettre à jour l'élément actuellement ouvert
//             currentCollapse = collapseElement;

//             // scroller jusqu'à l'élément cible (le collapse)
//             targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         });
//     });
// });

// scroll-up
document.addEventListener('DOMContentLoaded', () => {
    const scrollUpButton = document.getElementById('scrollUp');
  
    // affiche le bouton si l'utilisateur a scrollé de 150px ou plus
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            scrollUpButton.classList.add('show');
        } else {
        scrollUpButton.classList.remove('show');
        }
    });
  
    // action lors du clic sur le bouton
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        behavior: 'smooth' // scroll fluide
        });
    });
});
