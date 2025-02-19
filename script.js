// Fonction pour convertir le prénom en un nombre total
function convertNameToNumber(name) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 0;

    for (let letter of name.toLowerCase()) {
        let index = alphabet.indexOf(letter) + 1;
        if (index > 0) {
            sum += index;
        }
    }

    return sum;
}

// Liste des 118 éléments chimiques avec leur numéro atomique
const elements = [
    ["L'Hydrogène", "H", "1", "Non-métaux", "1,008"],
    ["L'Hélium", "He", "2", "Gaz nobles", "4,003"],
    ["Le Lithium", "Li", "3", "Métaux alcalins", "6,941"],
    ["Le Béryllium", "Be", "4", "Métaux alcalino-terreux", "9,012"],
    ["Le Bore", "B", "5", "Métalloïdes", "10,811"],
    ["Le Carbone", "C", "6", "Non-métaux", "12,011"],
    ["L'Azote", "N", "7", "Non-métaux", "14,007"],
    ["L'Oxygène", "O", "8", "Non-métaux", "15,999"],
    ["Le Fluor", "F", "9", "Halogènes", "19,998","Le fluor a un rôle important dans le corps humain, celui de fixer l'émail sur les dents. C'est la raison pour laquelle il entre dans la composition des dentifrices"],
    ["Le Néon", "Ne", "10", "Gaz nobles", "20,180"],
    ["Le Sodium", "Na", "11", "Métaux alcalins", "20,990"],
    ["Le Magnésium", "Mg", "12", "Métaux alcalino-terreux", "24,305"],
    ["L'Aluminium", "Al", "13", "Métaux pauvres", "26,980","L’aluminium peut se combiner à plus de 270 minéraux différents"],
    ["Le Silicium", "Si", "14", "Métalloïdes", "28,086","Le silicium est le deuxième élément le plus abondant dans la croûte terrestre après l'oxygène, et constitue 25,7 % de sa masse."],
    ["Le Phosphore", "P", "15", "Non-métaux", "30,974","Le phosphore est le cinquième élément le plus abondant en biologie. Toute forme de vie telle que nous la connaissons ne serait possible sans cet élément clef."],
    ["Le Soufre", "S", "16", "Non-métaux", "32,065"],
    ["Le Chlore", "Cl", "17", "Halogènes", "35,045"],
    ["L'Argon", "Ar", "18", "Gaz nobles", "39,948"],
    ["Le Potassium", "K", "19", "Métaux alcalins", "39,098"],
    ["Le Calcium", "Ca", "20", "Métaux alcalino-terreux", "40,078"],
    ["Le Scandium", "Sc", "21", "Métaux de transition", "44,956"],
    ["Le Titane", "Ti", "22", "Métaux de transition", "47,867"],
    ["Le Vanadium", "V", "23", "Métaux de transition", "50,942"],
    ["Le Chrome", "Cr", "24", "Métaux de transition", "52,000"],
    ["Le Manganèse", "Mn", "25", "Métaux de transition", "54,938","L'oxyde de manganèse est connu depuis la préhistoire. Il était en effet utilisé comme pigment noir pour les peintures rupestres "],
    ["Le Fer", "Fe", "26", "Métaux de transition", "55,845"],
    ["Le Cobalt", "Co", "27", "Métaux de transition", "58,933","Le cobalt est un élément métallique naturel principalement utilisé dans l'industrie mais c'est aussi un composant essentiel de la vitamine B12 indispensable au fonctionnement de nombreuses réactions enzymatiques chez l'homme."],
    ["Le Nickel", "Ni", "28", "Métaux de transition", "58,693","C'est un métal de couleur blanc brillant, presque argenté, magnétique (cependant moins que le fer ou le cobalt) qui n'existe pas dans la nature à l'état natif. Relativement dur, malléable et ductile, il fond à 1453°C et bout à 2800°C."],
    ["Le Cuivre", "Cu", "29", "Métaux de transition", "63,546","Il s'agit d'un métal rougeâtre naturellement présent dans la croûte terrestre, et connu depuis l'Antiquité pour ses nombreuses propriétés. Il est notamment malléable, ductile et il conduit très bien la chaleur et l'électricité. En raison de sa conductivité thermique élevée, il est également utilisé dans la plomberie, la construction, la fabrication de pièces de monnaie et de bijoux, ainsi que dans la fabrication d'ustensiles de cuisine."],
    ["Le Zinc", "Zn", "30", "Métaux de transition", "65,38","Le zinc est un élément dit écotoxique. En effet, la population mondiale absorbe, par l’intermédiaire de l’eau et de la nourriture, du zinc. Cela est dû aux quantités importantes, et qui sont souvent non contrôlées, près des eaux polluées rejetées par certaines industries."],
    ["Le Gallium", "Ga", "31", "Métaux pauvres", "69,723"],
    ["Le Germanium", "Ge", "32", "Métalloïdes", "72,630","Le nom de l'élément germanium dérive du latin \"Germania\" signifiant Germanie. En effet, cet élément a été identifié en Allemagne."],
    ["L'Arsenic", "As", "33", "Métalloïdes", "74,922"],
    ["Le Sélénium", "Se", "34", "Non-métaux", "78,971","Le sélénium, tout comme l'arsenic, est utilisé dans les photocopieur et les imprimantes laser, plus précisément dans les tambours."],
    ["Le Brome", "Br", "35", "Halogènes", "79,904","On trouve encore du brome dans certaines lampes halogènes, dans les extincteurs ou encore les colorants en cosmétique, tels que ceux pour les cheveux."],
    ["Le Krypton", "Kr", "36", "Gaz nobles", "83,798","En raison de sa structure électronique stable, le krypton ne peut capter ou perdre des électrons. C'est pourquoi il ne peut donc pas former d'ions."],
    ["Le Rubidium", "Rb", "37", "Métaux alcalins", "85,468","On peut trouver du rubidium dans divers endroits de nos maisons. Il est par exemple présent dans les verres blindés ou encore dans les cellules photovoltaïques."],
    ["Le Strontium", "Sr", "38", "Métaux alcalino-terreux", "87,62","Le strontium, lorsqu'il est présent sous forme de chlorate ou de nitrate, peut être utilisé comme colorant rouge dans les feux d'artifice. "],
    ["Le Yttrium", "Y", "39", "Métaux de transition", "88,906","L'yttrium est un élément chimique que l'ont peut trouver naturellement dans l'environnement, très souvent en association dans des minéraux avec des terres rares mais aussi dans des minerai d'uranium. Présent dans la croûte terrestre,  il est le 28e élément le plus abondant"],
    ["Le Zirconium", "Zr", "40", "Métaux de transition", "91,224","Le zirconium est une pierre semi-précieuse mentionnée dés l'antiquité mais ce n'est qu'en 1789 que le chimiste allemand Martin Heinrich Klaproth découvrit qu'il contenait un nouvel élément chimique."],
    ["Le Niobium", "Nb", "41", "Métaux de transition", "92,906","La grande majorité du Niobium produit dans le monde est utilisée dans l'industrie de l'acier. Le Niobium est ajouté en petite quantité dans des alliages, notamment en vue d'améliorer les propriétés de résistance à la corrosion ou encore aux pressions élevées. Ainsi, on retrouve du Niobium dans des avions à réaction, dans des tuyauteries de haute résistance, des fusées, des satellites, etc."],
    ["Le Molybdène", "Mo", "42", "Métaux de transition", "95,95","La principale utilisation du molybdène, à près de 80 %, est pour renforcer la résistance mécanique des aciers, à haute température, en formant des carbures durs et stables."],
    ["Le Technétium", "Tc", "43", "Métaux de transition", "98,00","Il est également possible de trouver du technétium dans l'espace, plus particulièrement dans les étoiles de type géantes rouges."],
    ["Le Ruthénium", "Ru", "44", "Métaux de transition", "101,07"],
    ["Le Rhodium", "Rh", "45", "Métaux de transition", "102,91"],
    ["Le Palladium", "Pd", "46", "Métaux de transition", "106,42","Plus rare des Platinoides après l'osmium et le platine. Il est parfois considéré comme un métal noble, mais a été découvert bien plus récemment que ce dernier. Il fait partir des métaux stratégiques qui existent en lingot pour les investisseurs financier."],
    ["L'Argent", "Ag", "47", "Métaux de transition", "107,868","A la fin du XXe siècle, on utilisait presque 6000 tonnes d'argent par an dans le domaine de la photographie. En effet, les sels d'argent ayant des propriétés photosensibles, il était utilisé sur les bobines et le papier photographique."],
    ["Le Cadmium", "Cd", "48", "Métaux de transition", "112,414"],
    ["L'Indium", "In", "49", "Métaux pauvres", "114,818"," L'indium est un métal argenté aux caractéristiques uniques. Il se distingue par son point de fusion bas, à 157 degrés Celsius, ce qui le rend précieux pour les alliages à basse température de fusion."],
    ["L'Étain", "Sn", "50", "Métaux pauvres", "118,710","L'étain est un métal connu depuis l'Antiquité et ce par tous les peuples à travers le monde. L'apogée de son utilisation eu lieu lors de l'âge de bronze."],
    ["L'Antimoine", "Sb", "51", "Métalloïdes", "121,760"],
    ["Le Tellure", "Te", "52", "Métalloïdes", "123,905","Le tellure est un solide cristallin métalloïde de couleur argenté. Il est très cassant et peut être très facilement pulvérisé, donnant une poudre dont la couleur peut varier entre le gris et le brun. "],
    ["L'Iode", "I", "53", "Halogènes", "126,904","L'iode radioactif est utilisé dans les cas de cancer de la thyroïde. En effet, l'iode radioactif va se fixer sur les cellules cancéreuses pour les réduire voire les détruire grâce à un rayonnement interne."],
    ["Le Xénon", "Xe", "54", "Gaz nobles", "131,293"],
    ["Le Césium", "Cs", "55", "Métaux alcalins", "132,905"],
    ["Le Baryum", "Ba", "56", "Métaux alcalino-terreux", "137,327"," A cause de sa couleur blanche, le sulfate de baryum est fréquemment utilisé comme pigment banc dans les peintures ou, dans la fabrication du papier."],
    ["Le Lanthane", "La", "57", "Terres rares", "138,905","Parmi les applications les plus connues, on peut notamment citer son utilisation en tant que composé fluorescent dans les marquage anti fraude."],
    ["Le Cérium", "Ce", "58", "Terres rares", "140,116","Le cérium est parmi les éléments de la famille des terres rares, le plus abondant. Il peut être obtenu par une séparation partielle entre les terres rares "],
    ["Le Praséodyme", "Pr", "59", "Terres rares", "140,907"],
    ["Le Neodyme", "Nd", "60", "Terres rares", "144,242"],
    ["Le Prométhium", "Pm", "61", "Terres rares", "145","Le prométhium est utilisé en temps que générateur thermique pour déclencher les réactions nucléaires dans les centrales thermiques ou encore pour veiller au bon fonctionnement des générateurs de rythme cardiaque, communément appelés pacemakers."],
    ["Le Samarium", "Sm", "62", "Terres rares", "150,36","Les microphones de guitare électrique, mais également les écouteurs des iPods sont composés de samarium"],
    ["L'Europium", "Eu", "63", "Terres rares", "151,98"],
    ["Le Gadolinium", "Gd", "64", "Terres rares", "157,25","De couleur gris argent, ce métal est malléable et ductile à température ambiante."],
    ["Le Terbium", "Tb", "65", "Terres rares", "158,93"],
    ["Le Dysprosium", "Dy", "66", "Terres rares", "162,50"],
    ["L'Holmium", "Ho", "67", "Terres rares", "164,93"],
    ["L'Erbium", "Er", "68", "Terres rares", "167,26"],
    ["Le Thulium", "Tm", "69", "Terres rares", "168,93","Le thulium, malgré son prix élevé dû à sa rareté, est utilisé en tant que source de rayonnement dans les appareils radiographiques portables mais aussi en tant que source de chaleur dans les batteries nucléaires."],
    ["Le Ytterbium", "Yb", "70", "Terres rares", "173,04","Le nom de l'ytterbium provient du nom d'un village de Suède, Ytterby. C'est dans ce village que fut extrait la gadolinite, le minerai dans lequel on identifia l'ytterbium."],
    ["Le Lutétium", "Lu", "71", "Terres rares", "175,00","Le Lutécium, en plus d'être rare, et également difficile à obtenir pur. Ces éléments font de lui un produit très cher, et donc avec peu d'applications."],
    ["L'Hafnium", "Hf", "72", "Métaux de transition", "178,49"],
    ["Le Tantale", "Ta", "73", "Métaux de transition", "180,948"],
    ["Le Wolfram", "W", "74", "Métaux de transition", "183,84"],
    ["Le Rhénium", "Re", "75", "Métaux de transition", "186,207"],
    ["L'Osmium", "Os", "76", "Métaux de transition", "190,23","l'osmium est l'élément chimique le plus dense retrouvé sur Terre, plus \"lourd\" que le plomb ! Ce serait le métal le plus rare sur Terre."],
    ["L'Iridium", "Ir", "77", "Métaux de transition", "192,217"," L'iridium est très rare, voire même absent de la surface de la Terre. Il est cependant présent dans les météorites métalliques de type météorites de fer."],
    ["Le Platine", "Pt", "78", "Métaux de transition", "195,084","Il est considéré comme plus précieux que l'or, c'est pourquoi un disque de platine est supérieur à un disque d'or et qu'il faut 70 ans de mariage pour fêter ses noces de platines contre \"seulement\" 50 pour celle d'or."],
    ["L'Or", "Au", "79", "Métaux de transition", "196,967","L'or est considéré, historiquement, comme le métal précieux par excellence, et il est dit incorruptible ou métal noble car peu sensible à la corrosion et à l'oxydation."],
    ["Le Mercure", "Hg", "80", "Métaux de transition", "200,592","Le Mercure était parfois considéré comme un état liquide de l'argent d'où les noms d' \"argent liquide\",\"argent vivant\"  ou de \"vif argent\" parfois employés."],
    ["Le Thallium", "Tl", "81", "Métaux pauvres", "204,38","Ce fut le principal constituant sous forme de sulfate de thallium de la « mort aux rats », cet emploi étant maintenant interdit, il a été remplacé par des anticoagulants"],
    ["Le Plomb", "Pb", "82", "Métaux pauvres", "207,2"],
    ["Le Bismuth", "Bi", "83", "Métaux pauvres", "208,980","C'est un métal cassant, blanchâtre avec des reflets légèrement rosés et rouges."],
    ["Le Polonium", "Po", "84", "Non-métaux", "209","Le polonium fut nommé en l'honneur de la Pologne, le pays d'origine de Marie Skłodowska-Curie, celle qui fut la première à le découvrir."],
    ["L'Astate", "At", "85", "Halogènes", "210","L'astate est l'élément naturel le plus rare à la surface de la Terre avec une présence d'environ 30 grammes pour toute la croûte terrestre."],
    ["Le Radon", "Rn", "86", "Gaz nobles", "222"],
    ["Le Francium", "Fr", "87", "Métaux alcalins", "223","Il est estimé qu'il y aurait 1 atome de francium pour 1018 atomes d'uranium. Il n'y aurait donc jamais plus de 30 g de francium dans la croûte terrestre à un instant donné. Cela en fait le deuxième élément le plus rare de la surface de la terre après l'astate."],
    ["Le Radium", "Ra", "88", "Métaux alcalino-terreux", "226"],
    ["L'Actinium", "Ac", "89", "Actinides", "227","Dans la nature, l’actinium est un métal mou de couleur blanche voire argentée, très radioactif (environ 150 fois plus que le radium)."],
    ["Le Thorium", "Th", "90", "Actinides", "232,038","Puisque le thorium 232 présente une période radioactive très longue, c'est à dire environ trois fois l'âge de la Terre, il n'y a seulement qu'un cinquième du thorium initial qui s'est désintégré afin de former du plomb 208."],
    ["Le Protactinium", "Pa", "91", "Actinides", "231,035"],
    ["L'Uranium", "U", "92", "Actinides", "238,029","L'uranium est un élément naturel très commun. En effet, il est plus abondant que l'argent ou l'or. On peut le trouver partout dans l'écorce terrestre."],
    ["Le Neptunium", "Np", "93", "Actinides", "237","Il est baptisé en référence à la planète Neptune, possédant des propriétés chimiques analogues à celles de l'uranium, précédemment baptisé du nom de la planète Uranus qui précède Neptune dans le Système solaire"],
    ["Le Plutonium", "Pu", "94", "Actinides", "244","Le plutonium étant un élément synthétique, il n'est pas présent à l'état naturel et les seules ressources en plutonium proviennent de la production effectuée en laboratoires."],
    ["L'Américium", "Am", "95", "Actinides", "243","L’américium est un élément de synthèse. Il n’existe donc pas à l’état naturel dans l’environnement. Il peut être détecté dans les sols ou dans l’atmosphère suite à des accidents ou à des essais nucléaires uniquement."],
    ["Le Curium", "Cm", "96", "Actinides", "247"],
    ["Le Berkélium", "Bk", "97", "Actinides", "247"],
    ["Le Californium", "Cf", "98", "Actinides", "251","Le californium est formé dans les réacteurs nucléaires grâce à des successions de captures neutronique à partir de l'uranium 238."],
    ["L'Einsteinium", "Es", "99", "Actinides", "252"],
    ["Le Fermium", "Fm", "100", "Actinides", "257"],
    ["Le Mendelevium", "Md", "101", "Actinides", "258"],
    ["Le Nobelium", "No", "102", "Actinides", "259","Le nobélium n'a jamais été trouvé à l'état naturel sur la Terre. Il semblerait qu'il s'agisse d'un élément trop lourd pour avoir été synthétisé lors de nucléosynthèse stellaire (réactions nucléaires ayant lieu dans les étoiles et à l'origine de la majorité des atomes présents sur terre)."],
    ["Le Lawrencium", "Lr", "103", "Actinides", "262"],
    ["Le Rutherfordium", "Rf", "104", "Métaux de transition", "267"],
    ["Le Dubnium", "Db", "105", "Métaux de transition", "270"],
    ["Le Seaborgium", "Sg", "106", "Métaux de transition", "271"],
    ["Le Bohrium", "Bh", "107", "Métaux de transition", "270","Le bohrium est un élément synthétique qui n'est pas du tout présent dans l'environnement. Le bohrium est un élément radioactif et doit donc être manipulé avec la plus grande précaution et ne peut être utilisé qu'à des fins de recherche scientifique. "],
    ["L'Hassium", "Hs", "108", "Métaux de transition", "277"],
    ["Le Meitnérium", "Mt", "109", "Métaux de transition", "276"],
    ["Le Darmstadtium", "Ds", "110", "Métaux de transition", "281"],
    ["Le Roentgénum", "Rg", "111", "Métaux de transition", "280"],
    ["Le Copernicium", "Cn", "112", "Métaux de transition", "285"],
    ["Le Nihonium", "Nh", "113", "Métaux pauvres", "284"],
    ["Le Flerovium", "Fl", "114", "Métaux pauvres", "289"],
    ["Le Moscovium", "Mc", "115", "Non-métaux", "288"],
    ["Le Livermorium", "Lv", "116", "Non-métaux", "293"],
    ["Le Tennessine", "Ts", "117", "Halogènes", "294"],
    ["L' Oganesson", "Og", "118", "Gaz nobles", "294"]
]
;

// Fonction principale
document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector(".entrer_prenom input");
    let button = document.querySelector(".entrer_prenom button");
    let elementDiv = document.querySelector(".element");
    let symboleDiv = document.querySelector(".symbole");
    let numeroDiv = document.querySelector(".numero");
    let groupeDiv = document.querySelector(".groupe");
    let masseDiv = document.querySelector(".masse");
    let descriptionDiv = document.querySelector(".description");

    button.addEventListener("click", function () {
        let userName = input.value.trim();

        if (userName) {
            let atomicNumber = convertNameToNumber(userName);
            console.log("Numéro atomique calculé : ", atomicNumber);  // Debug log


            // Réduction de la somme si elle dépasse 118
            while (atomicNumber > 118) {
                atomicNumber = atomicNumber.toString().split("").reduce((a, b) => a + parseInt(b), 0);
            }

            // Récupérer l'élément chimique exact
            let element = elements[atomicNumber - 1]; // -1 car index commence à 0
            elementDiv.innerHTML = `${element[0]}`;  // Nom 
            symboleDiv.innerHTML = `<span class="texte">Symbole : </span><span class="valeur">${element[1]}</span>`;  
            numeroDiv.innerHTML = `<span class="texte">Numéro atomique : </span><span class="valeur">${element[2]}</span>`;  
            groupeDiv.innerHTML = `<span class="texte">Groupe : </span><span class="valeur">${element[3]}</span>`;  
            masseDiv.innerHTML = `<span class="texte">Masse : </span><span class="valeur">${element[4]}`+"u"; 
            descriptionDiv.innerHTML = `<span class="desc_titre">À propos : </span><span class="valeur">${element[5]}</span>`; 
            
        } else {
            elementDiv.textContent = "Veuillez entrer un prénom !";
        }
    });
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            button.click(); // Simule un clic sur le bouton
        }
    });
});

