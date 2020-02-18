const L1 = " ____            _      _____   _                         _____    _    _ ";
const L2 = "|  __ \\         | |    / ____| | |                       |  __ \\  | |  | |";
const L3 = "| |__) |  ___   | |_  | (___   | |__     ___    _ __     | |  | | | |__| |";
const L4 = "|  ___/  / _ \\  | __|  \\____\\  |  _ \\  /  _ \\  |  _ \\    | |  | | |  __  |";
const L5 = "| |     |  __/  | |_   ____) | | | | ||  (_) | | |_) |   | |__| | | |  | |";
const L6 = "|_|      \\___|  \\__|  |_____/  |_| |_| \\____/  | .__/    |_____/  |_|  |_|";
const L7 = "                                               | |                        ";
const L8 = "                                               |_|                        "

function exibeNomePetShop() {
    console.log(L1);
    console.log(L2);
    console.log(L3);
    console.log(L4);
    console.log(L5);
    console.log(L6);
    console.log(L7);
    console.log(L8);

}


var cachorro = {
    animal: 'cachorro',
    nome: 'July',
    sexo: 'F',
    dataNascimento: '02/06/2007',
    idade: 12,
    raca: 'vira-lata',
    dono: {
        nomeDono: 'Augusto',
        endereco: 'rua x, 878',
        telefone: 123456789
    },
    vacinado: false,
    tamanho: 'pequeno',
    peso: 3.5,
    servicos: ['banho', 'tosa'],
};

var gato = {
    animal: 'gato',
    nome: 'Bichano',
    sexo: 'M',
    dataNascimento: '23/05/2009',
    idade: 10,
    raca: 'vira-lata',
    dono: {
        nomeDono: 'Augusto',
        endereco: 'rua x, 878',
        telefone: 123456789
    },
    vacinado: true,
    tamanho: 'pequeno',
    peso: 2.5,
    servicos: ['tosa'],
};



var pets = [cachorro, gato];

function petsNoPet(pets) {
    for (i = 0; i < pets.length; i++) {
        console.log("\n");
        console.log("Pet " + (i + 1));
        console.log("Nome: " + pets[i].nome);
        console.log("Tipo: " + pets[i].animal);
        pets[i].sexo === 'M' ? console.log("Sexo: Macho") : console.log("Sexo: Fêmea");
        console.log(pets[i].vacinado);

    }
}

function petsNoPetWhile(pets) {
    let i = 0;
    while (i < pets.length) {
        console.log("\n");
        console.log("Pet " + (i + 1));
        console.log("Nome: " + pets[i].nome);
        console.log("Tipo: " + pets[i].animal);
        pets[i].sexo === 'M' ? console.log("Sexo: Macho") : console.log("Sexo: Fêmea");
        console.log(pets[i].vacinado);
        i++

    }
}

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------

var jsonPets = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"2018-01-14T16:30:22Z","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false, "banhado":false,"castrado":false,"servicos":["Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"2016-01-14T23:30:00Z","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"banhado":true, "castrado": true, "servicos":["Tosa"]}]`


function vacinarPet(animal) {
    if (!animal.vacinado) {
        animal.vacinado = true;
        animal.servicos.push("vacina");
        return "Pet vacinado com sucesso!!"

    } else {
        return "Pet ja estava vacinado!"
    }
}

function castrarPet(animal) {

    if (!animal.castrado) {
        animal.castrado = true;
        animal.servicos.push("castração");
        return "Pet castrado com sucesso!!"

    } else {
        return "Pet ja estava castrado!"
    }

};

function darBanhoPet(animal) {

    if (!animal.banhado) {
        animal.banhado = true;
        animal.servicos.push("banho");
        return "Pet banhado com sucesso!!"

    } else {
        return "Pet ja estava banhado!"
    }

};

function buscaPeloNome(nome, animal) {
    let an = 0;
    for(let i = 0; i < animal.length; i++){
        
        if(animal[i].nome.indexOf(nome) != -1){
            an++;
            console.log(animal[i]);
        }
    }
    if(an == 0){
        console.log("animal não encontrado");
    }
};



const novosPets = jsonPets => {
    newPets = JSON.parse(jsonPets);

    for (let i = 0; i < newPets.length; i++) {
        console.log("\n");
        console.log("-".repeat(30));
        console.log("Nome: " + newPets[i].nome);
        console.log("Tipo: " + newPets[i].tipo);
    }

}
const leituraLista = jsonPets => {
    let newPets = JSON.parse(jsonPets);
    newPets.map(function (newPets) {
        newPets.dataNascimento = new Date(newPets.dataNascimento);

    });


    return newPets;

}

// 

const darEntradaPets = (listaPets, leituraLista, vacinarPet, castrarPet, darBanhoPet) => {
    let pets = leituraLista(listaPets);

    for (let i = 0; i < pets.length; i++) {
        vacinado = vacinarPet(pets[i]);
        castrado = castrarPet(pets[i]);
        banho = darBanhoPet(pets[i]);



        console.log("-".repeat(30));
        console.log("Novo Pet " + (i + 1));
        console.log("-".repeat(30));
        console.log("Nome: " + pets[i].nome);
        console.log("Tipo: " + pets[i].tipo);
        console.log(vacinado);
        console.log(castrado);
        console.log(banho);





    }

}





exibeNomePetShop();
console.log("-".repeat(30));
darEntradaPets(jsonPets, leituraLista, vacinarPet, castrarPet, darBanhoPet);
console.log("-".repeat(30));
console.log("-".repeat(30));
let bpets = leituraLista(jsonPets);
nomebusca = "RepetePet";
buscaPeloNome(nomebusca, bpets);

