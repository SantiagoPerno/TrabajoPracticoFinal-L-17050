var divBtn = document.getElementById("botonVolverInicio");

divBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

var encuadreDerecha = document.querySelector(".encuadre-derecha");

var botonDerecha = document.querySelector("#botonDerecha");

var botonIzquierda = document.querySelector("#botonIzquierda");

botonDerecha.addEventListener("click", function() {

    if (encuadreDerecha.style.display === "none" || encuadreDerecha.style.display === "") {
        encuadreDerecha.style.display = "flex";
        botonIzquierda.style.display = "block";
    }    
})

botonIzquierda.addEventListener("click", function() {

    if (encuadreDerecha.style.display === "flex" || encuadreDerecha.style.display === "") {
        encuadreDerecha.style.display = "none";
        botonIzquierda.style.display = "none";
    }    
})

document.addEventListener("DOMContentLoaded", function() {
    // Lista de nombres de héroes
    var heroes = [
        'abaddon', 'alchemist', 'ancient apparition', 'antimage', 'arc warden', 'axe',
        'bane', 'batrider', 'beastmaster', 'bloodseeker','bounty hunter', 'brewmaster',
        'bristleback', 'broodmother', 'centaur warrunner', 'chaos knight', 'chen', 'clinkz',
        'clockwerk', 'crystal maiden', 'dark seer', 'dark willow', 'dawnbreaker', 'dazzle',
        'death prophet', 'disruptor', 'doom', 'dragon knight','drow ranger', 'earth spirit',
        'earthshaker', 'elder titan', 'ember spirit', 'enchantress', 'enigma', 'faceless void',
        'grimstroke', 'gyrocopter', 'hoodwink', 'huskar', 'invoker', 'io', 'jakiro',
        'juggernaut', 'keeper of the light', 'kunkka', 'legion commander', 'leshrac', 'lich',
        'lifestealer', 'lina', 'lion', 'lone druid', 'luna', 'lycan', 'magnataur', 'marci',
        'mars', 'medusa', 'meepo', 'mirana', 'monkey king', 'morphling', 'muerta', 'naga siren',
        'nature´s prophet', 'necrophos', 'night stalker', 'nyx assassin', 'ogre magi',
        'omniknight', 'oracle', 'outworld destroyer', 'pangolier', 'phantom assassin', 'phantom lance',
        'phoenix', 'primal beast', 'puck', 'pudge', 'pugna', 'queen of pain', 'razor', 'riki',
        'rubick', 'sand king', 'shadow demon', 'shadow fiend', 'shadow shaman', 'silencer',
        'skywrath mage', 'slardar', 'slark', 'snapfire', 'sniper', 'spectre', 'spirit breaker',
        'storm spirit', 'sven', 'techies', 'templar assassin', 'terrorblade', 'tidehunter',
        'timbersaw', 'tinker', 'tiny', 'treant protector', 'troll warlord', 'tusk', 'underlord',
        'undying', 'ursa', 'vengeful spirit', 'venomancer', 'viper', 'visage', 'void spirit',
        'warlock', 'weaver', 'windranger', 'winter wyvern', 'witch doctor', 'wraith king',
        'zeus'
    ];

    var bgs= [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
    ];

    var bgElegido = bgs[Math.floor(Math.random() * bgs.length)];
    var newBg = `url('bgs/${bgElegido}.jpg')`;

    document.documentElement.style.setProperty('--hero-bg', newBg);

    // Elegir un héroe al azar
    var heroeElegido = heroes[Math.floor(Math.random() * heroes.length)];

    var heroeElegidoSinEspacios = heroeElegido.replace(/\s+/g, '');

    var heroeElegidoLink = heroeElegido.replace(/\s+/g, '_');

    if (heroeElegido === 'nature´s prophet' ) {
        heroeElegidoLink = 'furion'
    }
    else if (heroeElegido === 'windranger') {
        heroeElegidoLink = 'windrunner'
    }
    else if (heroeElegido === 'phantom lance') {
        heroeElegidoLink = 'phantom_lancer'
    }
    else if (heroeElegido === 'necrophos') {
        heroeElegidoLink = 'necrolyte'
    }
    else if (heroeElegido === 'lifestealer') {
        heroeElegidoLink = 'life_stealer'
    }
    else if (heroeElegido === 'underlord') {
        heroeElegidoLink = 'abyssal_underlord'
    }
    else if (heroeElegido === 'wraith king') {
        heroeElegidoLink = 'skeleton_king'
    }
    else if (heroeElegido === 'timbersaw') {
        heroeElegidoLink = 'shredder'
    }
    else if (heroeElegido === 'zeus') {
        heroeElegidoLink = 'zuus'
    }
    else if (heroeElegido === 'doom') {
        heroeElegidoLink = 'doom_bringer'
    }
    else if (heroeElegido === 'shadow fiend') {
        heroeElegidoLink = 'nevermore'
    }

    // Seleccionar el div con la clase heroeRandom
    var heroeRandomDiv = document.querySelector('.heroeRandom');

    // Actualizar el contenido del div
    heroeRandomDiv.innerHTML = `
        <div class="heroeBanner">
            <span>HÉROE RANDOM</span></br>
            <span class="heroeNombre">༺ ${heroeElegido.toUpperCase()} ༻⋆</span>
        </div>
        <div class=hero>
            <video src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroeElegidoLink}.webm" autoplay loop muted></video>
            <div class="heroOverlay">
            
            </div>
        </div>
        <div class="heroeBanner">
            <a href="https://www.dota2.com/hero/${heroeElegidoSinEspacios}" target="_blank">
                <span>► MÁS INFO ◄</span>
            </a>
        </div>
    `;
});