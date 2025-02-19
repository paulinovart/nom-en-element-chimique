
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


const elements = [
    ["L'Hydrogène", "H", "1", "Non-métaux", "1,008","C’est l’élément le plus léger et le plus abondant de l’univers. Il compose la majeure partie des étoiles et sert de carburant dans les réactions de fusion nucléaire."],
    ["L'Hélium", "He", "2", "Gaz nobles", "4,003","Il est si léger qu’il s’échappe progressivement de l’atmosphère terrestre. C’est aussi lui qui donne aux ballons leur capacité à flotter."],
    ["Le Lithium", "Li", "3", "Métaux alcalins", "6,941"," Utilisé dans les batteries rechargeables, il est aussi connu pour ses propriétés médicinales dans le traitement des troubles bipolaires."],
    ["Le Béryllium", "Be", "4", "Métaux alcalino-terreux", "9,012","Métal léger mais très résistant, il est employé dans l’aérospatiale et la fabrication de satellites."],
    ["Le Bore", "B", "5", "Métalloïdes", "10,811"," Présent dans les détergents et les vitres en Pyrex, il est aussi essentiel pour la croissance des plantes."],
    ["Le Carbone", "C", "6", "Non-métaux", "12,011"," Formé dans les étoiles massives en fin de vie, il est essentiel à la chimie de la vie. Après une supernova, il se disperse dans l'univers et se retrouve dans les planètes et les comètes."],
    ["L'Azote", "N", "7", "Non-métaux", "14,007","Il compose 78 % de l’air que nous respirons et est essentiel à la fabrication des engrais."],
    ["L'Oxygène", "O", "8", "Non-métaux", "15,999","Indispensable à la respiration, il est aussi responsable de l’oxydation, comme la rouille sur le fer."],
    ["Le Fluor", "F", "9", "Halogènes", "19,998","Le fluor a un rôle important dans le corps humain, celui de fixer l'émail sur les dents. C'est la raison pour laquelle il entre dans la composition des dentifrices"],
    ["Le Néon", "Ne", "10", "Gaz nobles", "20,180","Il donne aux enseignes lumineuses leur éclat caractéristique, souvent rouge orangé."],
    ["Le Sodium", "Na", "11", "Métaux alcalins", "20,990"," Il est un composant du sel de table (chlorure de sodium) et joue un rôle clé dans la transmission des impulsions nerveuses."],
    ["Le Magnésium", "Mg", "12", "Métaux alcalino-terreux", "24,305","Il aide à la régulation des fonctions nerveuses et musculaires, et soutient la santé osseuse."],
    ["L'Aluminium", "Al", "13", "Métaux pauvres", "26,980","L’aluminium peut se combiner à plus de 270 minéraux différents"],
    ["Le Silicium", "Si", "14", "Métalloïdes", "28,086","Le silicium est le deuxième élément le plus abondant dans la croûte terrestre après l'oxygène, et constitue 25,7 % de sa masse."],
    ["Le Phosphore", "P", "15", "Non-métaux", "30,974","Le phosphore est le cinquième élément le plus abondant en biologie. Toute forme de vie telle que nous la connaissons ne serait possible sans cet élément clef."],
    ["Le Soufre", "S", "16", "Non-métaux", "32,065","Présent dans les volcans, il joue un rôle clé dans l'atmosphère des planètes comme Vénus et Jupiter."],
    ["Le Chlore", "Cl", "17", "Halogènes", "35,045","Découvert sur d'autres planètes sous forme de sels, il est également présent dans l’atmosphère des géantes gazeuses comme Neptune."],
    ["L'Argon", "Ar", "18", "Gaz nobles", "39,948","Gaz noble présent dans les atmosphères planétaires, comme sur Mars, il permet d'étudier les âges géologiques d'astres comme la Lune."],
    ["Le Potassium", "K", "19", "Métaux alcalins", "39,098","Présent dans les bananes, il est indispensable au bon fonctionnement du cœur et des muscles."],
    ["Le Calcium", "Ca", "20", "Métaux alcalino-terreux", "40,078","Essentiel à la formation des os, il renforce leur structure et aide à prévenir l’ostéoporose."],
    ["Le Scandium", "Sc", "21", "Métaux de transition", "44,956","Métal léger et résistant utilisé dans les alliages d'aluminium pour l’aérospatiale."],
    ["Le Titane", "Ti", "22", "Métaux de transition", "47,867","Aussi résistant que l’acier mais beaucoup plus léger, il est utilisé dans les implants médicaux et l’aérospatiale."],
    ["Le Vanadium", "V", "23", "Métaux de transition", "50,942","Métal utilisé dans les alliages pour améliorer la résistance de l'acier, notamment dans les turbines et moteurs."],
    ["Le Chrome", "Cr", "24", "Métaux de transition", "52,000","Métal utilisé principalement pour fabriquer de l’acier inoxydable et dans les traitements de surface pour éviter la rouille."],
    ["Le Manganèse", "Mn", "25", "Métaux de transition", "54,938","L'oxyde de manganèse est connu depuis la préhistoire. Il était en effet utilisé comme pigment noir pour les peintures rupestres "],
    ["Le Fer", "Fe", "26", "Métaux de transition", "55,845","Abondant dans le noyau des planètes comme la Terre, il est formé dans les supernovae et essentiel à la structure des astres."],
    ["Le Cobalt", "Co", "27", "Métaux de transition", "58,933","Le cobalt est un élément métallique naturel principalement utilisé dans l'industrie mais c'est aussi un composant essentiel de la vitamine B12 indispensable au fonctionnement de nombreuses réactions enzymatiques chez l'homme."],
    ["Le Nickel", "Ni", "28", "Métaux de transition", "58,693","C'est un métal de couleur blanc brillant, presque argenté, magnétique (cependant moins que le fer ou le cobalt) qui n'existe pas dans la nature à l'état natif. Relativement dur, malléable et ductile, il fond à 1453°C et bout à 2800°C."],
    ["Le Cuivre", "Cu", "29", "Métaux de transition", "63,546","Il s'agit d'un métal rougeâtre naturellement présent dans la croûte terrestre, et connu depuis l'Antiquité pour ses nombreuses propriétés. Il est notamment malléable, ductile et il conduit très bien la chaleur et l'électricité. En raison de sa conductivité thermique élevée, il est également utilisé dans la plomberie, la construction, la fabrication de pièces de monnaie et de bijoux, ainsi que dans la fabrication d'ustensiles de cuisine."],
    ["Le Zinc", "Zn", "30", "Métaux de transition", "65,38","Le zinc est un élément dit écotoxique. En effet, la population mondiale absorbe, par l’intermédiaire de l’eau et de la nourriture, du zinc. Cela est dû aux quantités importantes, et qui sont souvent non contrôlées, près des eaux polluées rejetées par certaines industries."],
    ["Le Gallium", "Ga", "31", "Métaux pauvres", "69,723","Semi-conducteur utilisé dans les LED et les panneaux solaires."],
    ["Le Germanium", "Ge", "32", "Métalloïdes", "72,630","Le nom de l'élément germanium dérive du latin \"Germania\" signifiant Germanie. En effet, cet élément a été identifié en Allemagne."],
    ["L'Arsenic", "As", "33", "Métalloïdes", "74,922","Poison puissant, il est utilisé dans l’industrie, mais son ingestion même à faible dose peut être fatale."],
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
    ["Le Ruthénium", "Ru", "44", "Métaux de transition", "101,07","Métal rare utilisé dans les contacts électriques et les catalyseurs industriels."],
    ["Le Rhodium", "Rh", "45", "Métaux de transition", "102,91","Métal précieux utilisé principalement comme catalyseur dans les voitures pour réduire les émissions polluantes."],
    ["Le Palladium", "Pd", "46", "Métaux de transition", "106,42","Plus rare des Platinoides après l'osmium et le platine. Il est parfois considéré comme un métal noble, mais a été découvert bien plus récemment que ce dernier. Il fait partir des métaux stratégiques qui existent en lingot pour les investisseurs financier."],
    ["L'Argent", "Ag", "47", "Métaux de transition", "107,868","A la fin du XXe siècle, on utilisait presque 6000 tonnes d'argent par an dans le domaine de la photographie. En effet, les sels d'argent ayant des propriétés photosensibles, il était utilisé sur les bobines et le papier photographique."],
    ["Le Cadmium", "Cd", "48", "Métaux de transition", "112,414","Utilisé dans les pigments jaunes et rouges dans la peinture, mais toxique pour l’organisme."],
    ["L'Indium", "In", "49", "Métaux pauvres", "114,818"," L'indium est un métal argenté aux caractéristiques uniques. Il se distingue par son point de fusion bas, à 157 degrés Celsius, ce qui le rend précieux pour les alliages à basse température de fusion."],
    ["L'Étain", "Sn", "50", "Métaux pauvres", "118,710","L'étain est un métal connu depuis l'Antiquité et ce par tous les peuples à travers le monde. L'apogée de son utilisation eu lieu lors de l'âge de bronze."],
    ["L'Antimoine", "Sb", "51", "Métalloïdes", "121,760","Métal utilisé dans les alliages métalliques et comme retardateur de flamme dans des matériaux comme les plastiques."],
    ["Le Tellure", "Te", "52", "Métalloïdes", "123,905","Le tellure est un solide cristallin métalloïde de couleur argenté. Il est très cassant et peut être très facilement pulvérisé, donnant une poudre dont la couleur peut varier entre le gris et le brun. "],
    ["L'Iode", "I", "53", "Halogènes", "126,904","L'iode radioactif est utilisé dans les cas de cancer de la thyroïde. En effet, l'iode radioactif va se fixer sur les cellules cancéreuses pour les réduire voire les détruire grâce à un rayonnement interne."],
    ["Le Xénon", "Xe", "54", "Gaz nobles", "131,293","Gaz noble utilisé dans les lampes à décharge, pour l'éclairage et dans l’imagerie médicale pour les scanners."],
    ["Le Césium", "Cs", "55", "Métaux alcalins", "132,905","Métal utilisé dans les horloges atomiques et comme source de rayonnement dans certains équipements scientifiques."],
    ["Le Baryum", "Ba", "56", "Métaux alcalino-terreux", "137,327"," A cause de sa couleur blanche, le sulfate de baryum est fréquemment utilisé comme pigment banc dans les peintures ou, dans la fabrication du papier."],
    ["Le Lanthane", "La", "57", "Terres rares", "138,905","Parmi les applications les plus connues, on peut notamment citer son utilisation en tant que composé fluorescent dans les marquage anti fraude."],
    ["Le Cérium", "Ce", "58", "Terres rares", "140,116","Le cérium est parmi les éléments de la famille des terres rares, le plus abondant. Il peut être obtenu par une séparation partielle entre les terres rares "],
    ["Le Praséodyme", "Pr", "59", "Terres rares", "140,907","Terbium rare utilisé dans la fabrication de certains aimants et dans des équipements pour moteurs électriques."],
    ["Le Neodyme", "Nd", "60", "Terres rares", "144,242","Terbium utilisé pour fabriquer des aimants puissants, largement utilisés dans les moteurs, les haut-parleurs et les disques durs."],
    ["Le Prométhium", "Pm", "61", "Terres rares", "145","Le prométhium est utilisé en temps que générateur thermique pour déclencher les réactions nucléaires dans les centrales thermiques ou encore pour veiller au bon fonctionnement des générateurs de rythme cardiaque, communément appelés pacemakers."],
    ["Le Samarium", "Sm", "62", "Terres rares", "150,36","Les microphones de guitare électrique, mais également les écouteurs des iPods sont composés de samarium"],
    ["L'Europium", "Eu", "63", "Terres rares", "151,98","L'europium est un élément pauvre en neutron. On utilise donc cette caractéristique pour en faire un absorbeur de neutrons. On s'en sert comme produit dopant pour les verres de lasers ou pour les tubes cathodiques. "],
    ["Le Gadolinium", "Gd", "64", "Terres rares", "157,25","De couleur gris argent, ce métal est malléable et ductile à température ambiante."],
    ["Le Terbium", "Tb", "65", "Terres rares", "158,93","Le terbium est fréquemment utilisé afin de fabriquer des écrans à rayons X. Il est également utilisé en tant que stabilisateur de cristaux de dioxyde de zirconium dans les piles à combustion ou encore en tant que substance phosphorescente verte dans les tubes cathodiques."],
    ["Le Dysprosium", "Dy", "66", "Terres rares", "162,50","En alliage avec d'autres terres rares (l'aluminium, le nickel, le cobalt ou le fer par exemple), le dysprosium possède des propriétés magnétiques qui lui permettent de devenir aimant permanent."],
    ["L'Holmium", "Ho", "67", "Terres rares", "164,93","L'oxyde d'holmium peut aussi être utilisé dans la teinture du verre, fournissant une couleur rose spécifique. Grâce à son magnétisme, il est aussi utilisé comme pièce polaire pour les aimants."],
    ["L'Erbium", "Er", "68", "Terres rares", "167,26"," Métal utilisé dans les fibres optiques pour améliorer la performance des réseaux de télécommunications."],
    ["Le Thulium", "Tm", "69", "Terres rares", "168,93","Le thulium, malgré son prix élevé dû à sa rareté, est utilisé en tant que source de rayonnement dans les appareils radiographiques portables mais aussi en tant que source de chaleur dans les batteries nucléaires."],
    ["Le Ytterbium", "Yb", "70", "Terres rares", "173,04","Le nom de l'ytterbium provient du nom d'un village de Suède, Ytterby. C'est dans ce village que fut extrait la gadolinite, le minerai dans lequel on identifia l'ytterbium."],
    ["Le Lutétium", "Lu", "71", "Terres rares", "175,00","Le Lutécium, en plus d'être rare, et également difficile à obtenir pur. Ces éléments font de lui un produit très cher, et donc avec peu d'applications."],
    ["L'Hafnium", "Hf", "72", "Métaux de transition", "178,49","Métal utilisé dans les réacteurs nucléaires pour ses propriétés d'absorption des neutrons et dans des dispositifs électroniques."],
    ["Le Tantale", "Ta", "73", "Métaux de transition", "180,948","Métal utilisé dans l’électronique, les implants médicaux, et les équipements haute température en raison de sa grande résistance."],
    ["Le Wolfram", "W", "74", "Métaux de transition", "183,84","Métal utilisé principalement dans les filaments d'ampoules électriques et dans des outils coupants, en raison de sa très haute résistance à la chaleur."],
    ["Le Rhénium", "Re", "75", "Métaux de transition", "186,207"," Métal utilisé dans les turbines à gaz pour ses propriétés à haute température et dans les catalyseurs industriels."],
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
    ["Le Radon", "Rn", "86", "Gaz nobles", "222","Gaz radioactif provenant de la dégradation de l'uranium, utilisé en radiothérapie mais dangereux pour la santé."],
    ["Le Francium", "Fr", "87", "Métaux alcalins", "223","Il est estimé qu'il y aurait 1 atome de francium pour 1018 atomes d'uranium. Il n'y aurait donc jamais plus de 30 g de francium dans la croûte terrestre à un instant donné. Cela en fait le deuxième élément le plus rare de la surface de la terre après l'astate."],
    ["Le Radium", "Ra", "88", "Métaux alcalino-terreux", "226","Métal radioactif utilisé historiquement dans les horloges et les instruments lumineux, aujourd'hui limité à des applications spécifiques en radiothérapie."],
    ["L'Actinium", "Ac", "89", "Actinides", "227","Dans la nature, l’actinium est un métal mou de couleur blanche voire argentée, très radioactif (environ 150 fois plus que le radium)."],
    ["Le Thorium", "Th", "90", "Actinides", "232,038","Puisque le thorium 232 présente une période radioactive très longue, c'est à dire environ trois fois l'âge de la Terre, il n'y a seulement qu'un cinquième du thorium initial qui s'est désintégré afin de former du plomb 208."],
    ["Le Protactinium", "Pa", "91", "Actinides", "231,035","Élément radioactif utilisé dans des recherches nucléaires avancées."],
    ["L'Uranium", "U", "92", "Actinides", "238,029","L'uranium est un élément naturel très commun. En effet, il est plus abondant que l'argent ou l'or. On peut le trouver partout dans l'écorce terrestre."],
    ["Le Neptunium", "Np", "93", "Actinides", "237","Il est baptisé en référence à la planète Neptune, possédant des propriétés chimiques analogues à celles de l'uranium, précédemment baptisé du nom de la planète Uranus qui précède Neptune dans le Système solaire"],
    ["Le Plutonium", "Pu", "94", "Actinides", "244","Le plutonium étant un élément synthétique, il n'est pas présent à l'état naturel et les seules ressources en plutonium proviennent de la production effectuée en laboratoires."],
    ["L'Américium", "Am", "95", "Actinides", "243","L’américium est un élément de synthèse. Il n’existe donc pas à l’état naturel dans l’environnement. Il peut être détecté dans les sols ou dans l’atmosphère suite à des accidents ou à des essais nucléaires uniquement."],
    ["Le Curium", "Cm", "96", "Actinides", "247","Élément radioactif utilisé dans des générateurs thermiques pour des sondes spatiales et dans des recherches nucléaires."],
    ["Le Berkélium", "Bk", "97", "Actinides", "247","Élément synthétique utilisé dans les recherches en physique nucléaire et pour la production d'autres éléments lourds."],
    ["Le Californium", "Cf", "98", "Actinides", "251","Le californium est formé dans les réacteurs nucléaires grâce à des successions de captures neutronique à partir de l'uranium 238."],
    ["L'Einsteinium", "Es", "99", "Actinides", "252","Élément synthétique utilisé dans les expériences de recherche en radiochimie."],
    ["Le Fermium", "Fm", "100", "Actinides", "257","Élément lourd produit dans les réacteurs nucléaires, utilisé principalement dans des recherches fondamentales."],
    ["Le Mendelevium", "Md", "101", "Actinides", "258","Élément artificiel utilisé pour des recherches sur la structure des éléments superlourds."],
    ["Le Nobelium", "No", "102", "Actinides", "259","Le nobélium n'a jamais été trouvé à l'état naturel sur la Terre. Il semblerait qu'il s'agisse d'un élément trop lourd pour avoir été synthétisé lors de nucléosynthèse stellaire (réactions nucléaires ayant lieu dans les étoiles et à l'origine de la majorité des atomes présents sur terre)."],
    ["Le Lawrencium", "Lr", "103", "Actinides", "262","Élément créé en laboratoire, étudié dans la recherche sur les éléments lourds et leur comportement nucléaire."],
    ["Le Rutherfordium", "Rf", "104", "Métaux de transition", "267","Élément très lourd créé en laboratoire, étudié pour sa structure atomique."],
    ["Le Dubnium", "Db", "105", "Métaux de transition", "270","Élément synthétique utilisé principalement dans des recherches sur les propriétés des éléments superlourds."],
    ["Le Seaborgium", "Sg", "106", "Métaux de transition", "271","Élément artificiel, utilisé principalement dans les recherches nucléaires pour explorer la structure de la matière."],
    ["Le Bohrium", "Bh", "107", "Métaux de transition", "270","Le bohrium est un élément synthétique qui n'est pas du tout présent dans l'environnement. C'est un élément radioactif et doit donc être manipulé avec la plus grande précaution et ne peut être utilisé qu'à des fins de recherche scientifique. "],
    ["L'Hassium", "Hs", "108", "Métaux de transition", "277","Élément très lourd créé pour étudier la fission nucléaire et d'autres propriétés atomiques."],
    ["Le Meitnérium", "Mt", "109", "Métaux de transition", "276","Élément de laboratoire, utilisé pour des recherches sur la radioactivité et la structure des atomes."],
    ["Le Darmstadtium", "Ds", "110", "Métaux de transition", "281","Créé pour la recherche, cet élément est principalement utilisé pour étudier les réactions nucléaires et les propriétés atomiques des éléments lourds."],
    ["Le Roentgénum", "Rg", "111", "Métaux de transition", "280","Élément synthétique dont les applications sont principalement dans la recherche sur les isotopes lourds et la physique nucléaire."],
    ["Le Copernicium", "Cn", "112", "Métaux de transition", "285"," Produit en laboratoire, il est utilisé pour des recherches sur la structure des éléments lourds et leurs isotopes."],
    ["Le Nihonium", "Nh", "113", "Métaux pauvres", "284","Un élément superlourd créé en laboratoire, utilisé pour l’étude des propriétés des éléments ayant un nombre atomique élevé."],
    ["Le Flerovium", "Fl", "114", "Métaux pauvres", "289","Créé en laboratoire, il est étudié dans des recherches expérimentales pour explorer les limites de la chimie des éléments superlourds."],
    ["Le Moscovium", "Mc", "115", "Non-métaux", "288"," Élément artificiel étudié pour comprendre les interactions des noyaux atomiques et les propriétés des éléments superlourds."],
    ["Le Livermorium", "Lv", "116", "Non-métaux", "293","Produit en laboratoire, il est utilisé dans des recherches visant à comprendre le comportement de la matière à l’échelle des éléments superlourds."],
    ["Le Tennessine", "Ts", "117", "Halogènes", "294","Créé en laboratoire, il est principalement étudié pour sa stabilité et son comportement dans les réactions nucléaires."],
    ["L' Oganesson", "Og", "118", "Gaz nobles", "294","L'un des éléments les plus lourds jamais créés, il est utilisé dans des recherches sur les propriétés des atomes superlourds et leur interaction avec d’autres éléments."]
]
;


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
           


            
            while (atomicNumber > 118) {
                atomicNumber = atomicNumber.toString().split("").reduce((a, b) => a + parseInt(b), 0);
            }

           
            let element = elements[atomicNumber - 1];
            elementDiv.innerHTML = `${element[0]}`;  
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
            button.click(); 
        }
    });
});



