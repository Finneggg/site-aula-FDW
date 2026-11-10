const canvas = document.getElementById("jogo");
const rolagemText = document.getElementById("rolagem");
const ctx = canvas.getContext("2d");

let boardLength = 1300;
let slotWidth = 100;
let slotHeight = 200;
let slotBorder = 7;

let slots = [];

Debuglog();
CalculateSlotPositions();

function Debuglog(){
    console.log("alguma coisa");
}

function CalculateSlotPositions(){

    console.log("Calculando slot positions");
    // CANTOS
    slots[0] = {
        x: slotBorder / 2,
        y: slotBorder / 2,
        width: slotHeight - slotBorder,
        height: slotHeight - slotBorder
    };
    slots[10] = {
        x: 11 * slotWidth + slotBorder / 2,
        y: slotBorder / 2,
        width: slotHeight - slotBorder,
        height: slotHeight - slotBorder
    };
    slots[20] = {
        x: 11 * slotWidth + slotBorder / 2,
        y: 11 * slotWidth + slotBorder / 2,
        width: slotHeight - slotBorder,
        height: slotHeight - slotBorder
    };
    slots[30] = {
        x: slotBorder / 2,
        y: 11 * slotWidth + slotBorder / 2,
        width: slotHeight - slotBorder,
        height: slotHeight - slotBorder
    };
    // 1 - 9
    for(let i = 1; i <= 9; i++){
        slots[i] = {
            x: (i + 1) * slotWidth + slotBorder / 2,
            y: slotBorder / 2,
            width: slotWidth - slotBorder,
            height: slotHeight - slotBorder
        };
    }
    // 11 - 19
    for(let i = 11; i <= 19; i++){
        slots[i] = {
            x: 11 * slotWidth + slotBorder / 2,
            y: (i - 9) * slotWidth + slotBorder / 2,
            width: slotHeight - slotBorder,
            height: slotWidth - slotBorder
        };
    }
    // 21 - 29
    for(let i = 21; i <= 29; i++){
        slots[i] = {
            x: (31 - i) * slotWidth + slotBorder / 2,
            y: 11 * slotWidth + slotBorder / 2,
            width: slotWidth - slotBorder,
            height: slotHeight - slotBorder
        };
    }
    // 31 - 39
    for(let i = 31; i <= 39; i++){
        slots[i] = {
            x: slotBorder / 2,
            y: (41 - i) * slotWidth + slotBorder / 2,
            width: slotHeight - slotBorder,
            height: slotWidth - slotBorder
        };
    }
}
const curiosidades = [
    { color:"white" ,     type:"START" ,     name:"Partida" ,                imageID:"start" ,      descricao:"Ponto de partida da jornada: seria como a cidade de Pallet em Kanto!" ,                                         price:0    },
    { color:"#98D8D8" , type:"ice" ,       name:"Piloswine" , imageID:"221" , descricao:"O pelo longo o protege do frio, e ele usa as presas para escavar o gelo atrás de comida." , price:60 },
    { color:"#78C850" , type:"grass" ,     name:"Seedot" , imageID:"273" , descricao:"Parece uma bolota e fica pendurado nos galhos das árvores." , price:60 },
    { color:"white" ,     type:"WTP?" ,      name:"Quem é esse Pokémon?" ,   imageID:"wtp" ,        descricao:"Adivinhe quem é esse Pokémon só pela silhueta!" ,                                                               price:0    },
    { color:"#C03028" , type:"fighting" ,  name:"Meditite" , imageID:"307" , descricao:"Medita nas montanhas para fortalecer corpo e mente." , price:80 },
    { color:"#F8D030" , type:"electric" ,  name:"Electabuzz" , imageID:"125" , descricao:"Se alimenta de eletricidade e costuma aparecer perto de usinas e torres de energia." , price:100 },
    { color:"#705848" , type:"dark" ,      name:"Houndoom" , imageID:"229" , descricao:"Tem chifres curvos e solta chamas pela boca para atacar." , price:100 },
    { color:"white" ,     type:"gymnasium" ,  name:"Ginásio Pokémon" ,        imageID:"ginasio" ,    descricao:"Enfrente o líder do ginásio e lute pela insígnia!" ,                                                            price:0    },
    { color:"#F85888" , type:"psychic" ,   name:"Spoink" , imageID:"325" , descricao:"Salta o tempo todo, pois o coração depende dos pulos para continuar batendo." , price:120 },
    { color:"white" ,     type:"WTP?" ,      name:"Quem é esse Pokémon?" ,   imageID:"wtp" ,        descricao:"Adivinhe quem é esse Pokémon só pela silhueta!" ,                                                               price:0    },
    { color:"white" ,     type:"PRISON" ,    name:"Prisão da Equipe Rocket" ,imageID:"prisao" ,     descricao:"A Equipe Rocket prendeu você! Fique aqui até conseguir escapar." ,                                              price:0    },
    { color:"#F8D030" , type:"electric" ,  name:"Magnemite" , imageID:"081" , descricao:"Flutua por meio de ondas eletromagnéticas e é atraído por aparelhos elétricos." , price:140 },
    { color:"#B8A038" , type:"rock" ,      name:"Roggenrola" , imageID:"524" , descricao:"Vive em cavernas e tem o corpo duro como pedra." , price:140 },
    { color:"#A8A878" , type:"normal" ,    name:"Exploud" , imageID:"295" , descricao:"Seus gritos são tão altos que podem ser ouvidos de muito longe." , price:140 },
    { color:"#F85888" , type:"psychic" ,   name:"Woobat" , imageID:"527" , descricao:"Dorme pendurado de cabeça para baixo e emite ondas sonoras para se orientar." , price:160 },
    { color:"#6890F0" , type:"water" ,     name:"Basculin" , imageID:"550" , descricao:"Existem versões de listras vermelhas e azuis que vivem em conflito." , price:160 },
    { color:"#705848" , type:"dark" ,      name:"Liepard" , imageID:"510" , descricao:"É silencioso e rápido: se aproxima sem ser notado antes de atacar." , price:160 },
    { color:"#705848" , type:"dark" ,      name:"Houndour" , imageID:"228" , descricao:"Uiva para se comunicar com o bando e costuma caçar em grupo." , price:180 },
    { color:"#F08030" , type:"fire" ,      name:"Numel" , imageID:"322" , descricao:"Armazena magma no corpo, e a corcunda dele funciona como um pequeno vulcão." , price:180 },
    { color:"#A8A878" , type:"normal" ,    name:"Purugly" , imageID:"432" , descricao:"Aperta o corpo com o rabo para parecer maior." , price:180 },
    { color:"white" ,     type:"FREE" ,      name:"Centro Pokémon" ,         imageID:"centro" ,     descricao:"Descanse um pouco e recupere as energias dos seus Pokémon." ,                                                   price:0    },
    { color:"#6890F0" , type:"water" ,     name:"Kingdra" , imageID:"230" , descricao:"Dizem que dorme no fundo do mar e que seus bocejos criam redemoinhos." , price:200 },
    { color:"#A8A878" , type:"normal" ,    name:"Wigglytuff" , imageID:"040" , descricao:"Tem pelagem macia e um corpo tão elástico que ele pode se inflar quando fica irritado." , price:200 },
    { color:"#F8D030" , type:"electric" ,  name:"Jolteon" , imageID:"135" , descricao:"Evolução do Eevee que acumula eletricidade e pode eriçar os pelos como agulhas." , price:220 },
    { color:"#A8A878" , type:"normal" ,    name:"Spearow" , imageID:"021" , descricao:"Pequeno e agressivo, bate as asas muito rápido para ganhar velocidade." , price:220 },
    { color:"#B8A038" , type:"rock" ,      name:"Gigalith" , imageID:"526" , descricao:"Absorve a luz do sol e a libera como um poderoso feixe de energia." , price:220 },
    { color:"#A8B820" , type:"bug" ,       name:"Illumise" , imageID:"314" , descricao:"Brilha à noite e desenha padrões no céu com a luz do corpo." , price:240 },
    { color:"#A8B820" , type:"bug" ,       name:"Pineco" , imageID:"204" , descricao:"Fica pendurado em árvores dentro de uma casca dura, quase sem se mexer." , price:260 },
    { color:"#E0C068" , type:"ground" ,    name:"Drilbur" , imageID:"529" , descricao:"Cava túneis girando o corpo como uma broca." , price:260 },
    { color:"#6890F0" , type:"water" ,     name:"Dewott" , imageID:"502" , descricao:"Carrega duas conchas na cintura que usa como espadas." , price:260 },
    { color:"white" ,     type:"GOTOPRISON" ,name:"PRISAO" ,                 imageID:"rocket" ,     descricao:"A Equipe Rocket te pegou! Vá direto para a prisão." ,                                                           price:0    },
    { color:"#F08030" , type:"fire" ,      name:"Chimchar" , imageID:"390" , descricao:"Tem uma chama na ponta do rabo, que serve de sinal de perigo para os amigos." , price:280 },
    { color:"#705848" , type:"dark" ,      name:"Zweilous" , imageID:"634" , descricao:"Suas duas cabeças vivem brigando, mas dividem a mesma comida." , price:280 },
    { color:"#78C850" , type:"grass" ,     name:"Exeggutor" , imageID:"103" , descricao:"É uma palmeira de várias cabeças, e dizem que cada uma delas pensa por conta própria." , price:300 },
    { color:"#A8A878" , type:"normal" ,    name:"Rufflet" , imageID:"627" , descricao:"Apesar de pequeno, voa em busca de oponentes fortes para desafiar." , price:300 },
    { color:"#6890F0" , type:"water" ,     name:"Seadra" , imageID:"117" , descricao:"Os espinhos do corpo são venenosos, então tocar neles pode ser perigoso." , price:300 },
    { color:"#78C850" , type:"grass" ,     name:"Pansage" , imageID:"513" , descricao:"Tem uma folhagem na cabeça e adora frutas e ervas." , price:320 },
    { color:"white" ,    type:"WTP?" ,       name:"Quem é esse Pokémon?" ,   imageID:"wtp" ,        descricao:"Adivinhe quem é esse Pokémon só pela silhueta!" ,                                                               price:0    },
    { color:"#78C850" , type:"grass" ,     name:"Turtwig" , imageID:"387" , descricao:"Tem um brotinho na cabeça e um casco feito de terra endurecida." , price:350 },
    { color:"#A8B820" , type:"bug" ,       name:"Ledian" , imageID:"166" , descricao:"Recebe energia da luz das estrelas e fica mais ativo em noites estreladas." , price:160 }
];

curiosidades.forEach(function(c) {
    c.img = null;
    let url = UrlImagem(c.imageID);
    if (url) {
        c.img = new Image();
        c.img.onload = Animar;
        c.img.src = url;
    }
});

DrawSlots();

function DrawSlots(){
    slots.forEach(function(slot, index){
        ctx.fillStyle = curiosidades[index].color;
        ctx.fillRect(slot.x, slot.y, slot.width, slot.height);

        let img = curiosidades[index].img;
        if (img && img.complete) {
            let tam = Math.min(slot.width, slot.height) * 0.8;
            ctx.drawImage(
                img,
                slot.x + (slot.width - tam) / 2,
                slot.y + (slot.height - tam) / 2,
                tam,
                tam
            );
        }
    });
};

let token = {
    casaAtual: 0,
    tamanho: 50
};

function UrlImagem(imageID) {
    if (!/^\d+$/.test(imageID.trim())) return null;
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + Number(imageID) + ".png";
};

const curiosidadeText = document.getElementById("curiosidade");
const nomeText = document.getElementById("nome");

function MostrarCuriosidade() {
    let casa = curiosidades[token.casaAtual];
    nomeText.textContent = casa.name.trim();
    curiosidadeText.textContent = casa.descricao || "";
}
let pokeball = new Image();
    pokeball.src = "pokebola.png"

//Imagem de fundo
const fundo = new Image();
fundo.src = "https://i.pinimg.com/564x/98/c1/5a/98c15a449a1166ec23f5c9f1f63995dd.jpg"

function Animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(fundo, 0, 0, 1300, 1300)
    DrawSlots();
    DrawToken();
}
    
//Fazendo Token

function DrawToken() {
let casa = slots[token.casaAtual];
let centroX = casa.x + casa.width / 2;
let centroY = casa.y + casa.height / 2;

    ctx.drawImage(
        pokeball,
        centroX - token.tamanho / 2,
        centroY - token.tamanho / 2,
        token.tamanho,
        token.tamanho
    );
}

function DiceRoll() {
    let rolagem = Math.floor(Math.random() * 6) + 1;
    rolagemText.textContent = "Você rolou: " + rolagem;
    return rolagem;
}

function Travel(rolagem) {
    token.casaAtual = (token.casaAtual + rolagem) % slots.length;
    Animar();
    MostrarCuriosidade();
}

document.getElementById("rolar").addEventListener("click", function() {
    let rolagem = DiceRoll();
    Travel(rolagem);
});

Animar();
MostrarCuriosidade();