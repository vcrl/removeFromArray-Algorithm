const removeFromArray = function(...args) {
    // Récupère le premier array
    let passedArray = args[0];
    let passedParams = []
    // Ajoute tous les autres éléments à partir de l'index 1 (0 étant le array passé) à passedParams;
    for(i=1;i<args.length;i++){
        passedParams.push(args[i])
    }
    // On parcours le nouveau tableau une fois qu'il est initialisé complètement
    for(i=0;i<passedParams.length;i++){
        // Si l'élément existe bien dans le tableau = passedArray.includes(élement)
        // Pour chaque élement trouvé, on cherche l'index correspondant à sa valeur dans le passedArray avec indexOf(élément)
        // Une fois trouvé, on le supprime avec .splice(élément, on_en_supprime_qu'un);
        passedArray.includes(passedParams[i]) ? passedArray.splice(passedArray.indexOf(passedParams[i]), 1) : null;
    }
    console.log(passedArray);
    return passedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
