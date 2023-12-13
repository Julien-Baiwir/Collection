let object = [
    {
        Image: "../images/1zombies.jpg",
        Titre: "Zombies",
        Resume: "Quand le monde est en ruine, ravagé par une épidémie de zombies, Luke et son équipe auront-ils assez de force et de munitions pour rester en vie suffisamment longtemps pour survivre aux morts-vivants ?",
        Acteurs: ["Tony Todd", "Steven Luke", "Raina Hein"],
        Realisateur: "Hamid Torabpour",
        Trailer: "https://www.imdb.com/title/tt4969672/"
    },
    {
        Image: "../images/2corona-zombies.jpg",
        Titre: "Corona Zombies",
        Resume: "Des demoiselles étourdies en détresse, une famine de papier toilette, des dirigeants mondiaux incompétents, des médias de masse déchaînés et un virus infernal!",
        Acteurs: ["Cody Renee", "Russell Coker", "Robin Sydney"],
        Realisateur: "Charles Band",
        Trailer: "https://www.imdb.com/title/tt12098392/?ref_=fn_al_tt_1"
    },

    {
        Image: "../images/3bigfoot-vs-zombies.jpg",
        Titre: "Bigfoot contre Zombies",
        Resume: "Un scientifique crée un cocktail toxique qui est accidentellement libéré dans la population locale et dans une ferme de corps de la police",
        Acteurs: ["James Carolus", "Todd Carpenter", "Bob Dennis"],
        Realisateur: "Mark Polonia",
        Trailer: "https://www.imdb.com/title/tt5307698/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/4rise-of-the-zombies-.jpg",
        Titre: "L'Ascension des Zombies",
        Resume: "Dans ce thriller d'horreur réalisé par Nick Lyon, lorsque les morts-vivants envahissent San Francisco, un groupe désespéré survit en se retranchant dans la prison d'Alcatraz.",
        Acteurs: ["Ethan Suplee", "Mariel Hemingway", "LeVar Burton"],
        Realisateur: "Nick Lyon",
        Trailer: "https://www.imdb.com/title/tt2236182/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/5abraham-lincoln-vs-zombies.jpg",
        Titre: "Abraham Lincoln contre les Zombies",
        Resume: "Le jeune Abe Lincoln de 10 ans voit son père Thomas Lincoln  se suicider à ses côtés.",
        Acteurs: ["Bill Oberst Jr", "Kent Igleheart", "Rhianna Van Helton"],
        Realisateur: "Richard Schenkman",
        Trailer: "https://www.imdb.com/title/tt2246549/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/6navy-seals-vs-zombies.jpg",
        Titre: "Navy Seals contre Zombies",
        Resume: "Un film d'horreur sur un combat entre une équipe de Navy SEALS et une armée de zombies. Que feront-ils pour survivre, sauver leur ville et libérer les zombies de cette zone ?",
        Acteurs: ["Stephanie Honoré", "Molly Hagan", "Ed Quinn"],
        Realisateur: "Stanton Barrett",
        Trailer: "https://www.imdb.com/title/tt4511566/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/7cowboy-zombies.jpg",
        Titre: "Cowboy Zombies",
        Resume: "La civilisation a été ravagée par une guerre nucléaire et les morts-vivants se sont levés pour attaquer ce qu'il reste de l'humanité. ",
        Acteurs: ["Jarod Anderson", "Greg Bronson", "Kiera Crouch"],
        Realisateur: "Paul Winters",
        Trailer: "https://www.imdb.com/title/tt2888068/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/8humans-vs-zombies.jpg",
        Titre: "Humains contre Zombies",
        Resume: "En tant que film d'horreur sur un virus mortel. Les étudiants en été sont exposés à un virus mortel qui se propage rapidement par contact humain direct.",
        Acteurs: ["Christine Bently", "Cody Callahan", "David Blackwell"],
        Realisateur: "Brian T Jaynes",
        Trailer: "https://www.imdb.com/title/tt1815746/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/9zombies-have-fallen.jpg",
        Titre: "Les Zombies Sont Tombés",
        Resume: "Le film raconte l'histoire de Kyra (Tansy Parkinson), qui possède des pouvoirs surnaturels et des visions d'une apocalypse à venir",
        Acteurs: ["Finn H Drude", "Tony Gardner", "Heath Hampson"],
        Realisateur: "Sam Hampson",
        Trailer: "https://www.imdb.com/title/tt4974254/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/10attack-of-the-lederhosen-zombies.jpg",
        Titre: "Les Zombies font du ski",
        Resume: " Action zombie dans les Alpes : un groupe de jeunes snowboarders est coincé dans une station de ski de montagne isolée, où une fête de l'après-ski toute la nuit se transforme rapidement en un cauchemar infernal de chaos zombie.",
        Acteurs: ["Gabriela Marcinková", "Laurie Calvert", "Patricia Aulitzky"],
        Realisateur: "David F Mendez",
        Trailer: "https://www.imdb.com/title/tt3569970/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/11lowriders-vs-zombies-from-space.jpg",
        Titre: "Lowriders contre les Zombies de l'Espace",
        Resume: "Ce film suit un groupe de lowriders alors qu'ils se préparent à aller à une danse ce soir-là. Une étrange substance extraterrestre est introduite, transformant les gens en zombies extraterrestres",
        Acteurs: ["Michael Cristian", "Katusha Robert", "Cristina Cruz Rodríguez"],
        Realisateur: "David F Mendez",
        Trailer: "https://www.imdb.com/title/tt7118702/?ref_=fn_al_tt_1"
    },
    {
        Image: "../images/12attack-of-the-southern-fried-zombies.jpg",
        Titre: "L'Attaque des Zombies du Sud Croustillant",
        Resume: "Le film se concentre sur Lonnie, un pilote d'avion de traitement, qui doit diriger un groupe hétéroclite de survivants pour échapper à la horde de zombies mortelle",
        Acteurs: ["Miles Doleac", "Michael Emery", "Jeremy Sande"],
        Realisateur: "Mark Newton",
        Trailer: "https://www.imdb.com/title/tt5594444/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Attack%2520of%2520the%2520Southern%2520Fried%2520Zombies"
    }
];

let section = document.querySelector('.container__box-container');

for (let elem of object) {
    // Create new section
    let div = document.createElement('div');
    div.className = 'container__box-container__box';

    // Image img for img
    let img = document.createElement('img');
    img.className = 'container__box-container__box__img';
    img.setAttribute('src', elem.Image);
    img.setAttribute('alt', 'photo du film');

    // h2 for Title
    let h2 = document.createElement('h2');
    h2.className = 'container__box-container__box__titre';
    h2.innerHTML = elem.Titre;

    // p for Resume
    let p = document.createElement('p');
    p.className = 'container__box-container__box__resume';
    p.innerHTML = elem.Resume;

    // h3 for Acteurs
    let h3 = document.createElement('h3');
    h3.className = 'container__box-container__box__acteurs';
    h3.innerHTML = "<span>Acteurs </span>" + elem.Acteurs.join(', '); // Assuming Acteurs is an array

    // h4 for Realisateur
    let h4 = document.createElement('h4');
    h4.className = 'container__box-container__box__realisateur';
    h4.innerHTML = "<span>réalisé par</span>" + elem.Realisateur;

    // Anchor
    let a = document.createElement('a');
    a.className = 'container__box-container__box__btn';
    a.textContent = 'Bande annonce';
    a.href = elem.Trailer; 

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(a);
    section.appendChild(div);
}


