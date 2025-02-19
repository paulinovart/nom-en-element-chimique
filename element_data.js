const elements = [
    { nom: "Hydrogène", numero_atomique: 1, Symbole_chimique: "H", Groupe: "non-métaux réactifs", masse: 1.0078 },
    { nom: "Hélium", numero_atomique: 2, Symbole_chimique: "He", Groupe: "gaz noblex", masse: 4.0026 },
    { nom: "Lithium", numero_atomique: 3, Symbole_chimique: "Li", Groupe: "métaux alcalin", masse: 6.94 },
    { nom: "Béryllium", numero_atomique: 4, Symbole_chimique: "Be", Groupe: "métaux alcalino-terreux", masse: 9.0122 },
    { nom: "Bore", numero_atomique: 5, Symbole_chimique: "B", Groupe: "métalloïdes", masse: 10.81 },
    { nom: "Carbone", numero_atomique: 6, Symbole_chimique: "C", Groupe: "non-métaux", masse: 12.011 },
    { nom: "Azote", numero_atomique: 7, Symbole_chimique: "N", Groupe: "non-métaux", masse: 14.007 },
    { nom: "Oxygène", numero_atomique: 8, Symbole_chimique: "O", Groupe: "non-métaux", masse: 15.999 },
    { nom: "Fluor", numero_atomique: 9, Symbole_chimique: "F", Groupe: "halogènes", masse: 18.998 },
    { nom: "Néon", numero_atomique: 10, Symbole_chimique: "Ne", Groupe: "gaz nobles", masse: 20.180 },
    { nom: "Sodium", numero_atomique: 11, Symbole_chimique: "Na", Groupe: "métaux alcalins", masse: 22.990 },
    { nom: "Magnésium", numero_atomique: 12, Symbole_chimique: "Mg", Groupe: "métaux alcalino-terreux", masse: 24.305 },
    { nom: "Aluminium", numero_atomique: 13, Symbole_chimique: "Al", Groupe: "métaux pauvre", masse: 26.982 },
    { nom: "Silicium", numero_atomique: 14, Symbole_chimique: "Si", Groupe: "métalloïdes", masse: 28.085 },
    { nom: "Phosphore", numero_atomique: 15, Symbole_chimique: "P", Groupe: "non-métaux", masse: 30.974 },
    { nom: "Soufre", numero_atomique: 16, Symbole_chimique: "S", Groupe: "non-métaux", masse: 32.06 },
    { nom: "Chlore", numero_atomique: 17, Symbole_chimique: "Cl", Groupe: "halogènes", masse: 35.45 },
    { nom: "Argon", numero_atomique: 18, Symbole_chimique: "Ar", Groupe: "gaz nobles", masse: 39.948 },
    { nom: "Potassium", numero_atomique: 19, Symbole_chimique: "K", Groupe: "métaux alcalin", masse: 39.098 },
    { nom: "Calcium", numero_atomique: 20, Symbole_chimique: "Ca", Groupe: "métaux alcalino-terreux", masse: 40.078 },
    { nom: "Scandium", numero_atomique: 21, Symbole_chimique: "Sc", Groupe: "métaux de transition", masse: 44.956 },
    { nom: "Titane", numero_atomique: 22, Symbole_chimique: "Ti", Groupe: "métaux de transition", masse: 47.880 },
    { nom: "Vanadium", numero_atomique: 23, Symbole_chimique: "V", Groupe: "métaux de transition", masse: 50.942 },
    { nom: "Chrome", numero_atomique: 24, Symbole_chimique: "Cr", Groupe: "métaux de transition", masse: 51.996 },
    { nom: "Manganèse", numero_atomique: 25, Symbole_chimique: "Mn", Groupe: "métaux de transition", masse: 54.838 },
    { nom: "Fer", numero_atomique: 26, Symbole_chimique: "Fe", Groupe: "métaux de transition", masse: 55.847 },
    { nom: "Cobalt", numero_atomique: 27, Symbole_chimique: "Co", Groupe: "métaux de transition", masse: 58.933 },
    { nom: "Nickel", numero_atomique: 28, Symbole_chimique: "Ni", Groupe: "métaux de transition", masse: 58.690},
    { nom: "Cuivre", numero_atomique: 29, Symbole_chimique: "Cu", Groupe: "métaux de transition", masse: 63.546},
    { nom: "Zinc", numero_atomique: 30, Symbole_chimique: "Zn", Groupe: "métaux pauvre", masse: 65.390 },
    { nom: "Gallium", numero_atomique: 31, Symbole_chimique: "Ga", Groupe: "métaux pauvre", masse: 69.723 },
    { nom: "Germanium", numero_atomique: 32, Symbole_chimique: "Ge", Groupe: "métaloïdes", masse: 72.610},
    { nom: "Arsenic", numero_atomique: 33, Symbole_chimique: "As", Groupe: "métaloïdes", masse: 74.922},
    { nom: "Sélénium", numero_atomique: 34, Symbole_chimique: "Se", Groupe: "non-métaux", masse: 78.960},
    { nom: "Brome", numero_atomique: 35, Symbole_chimique: "Br", Groupe: "Halogènes", masse: 79.904},
    { nom: "Krypton", numero_atomique: 36, Symbole_chimique: "Kr", Groupe: "Gaz nobles", masse: 72.610},

    
    // Ajout de tous les éléments manquants jusqu'à l'Oganesson
    { nom: "Oganesson", numero_atomique: 118, Symbole_chimique: "Og", Groupe: "gaz noble", masse: 294 }
];

console.log(elements);