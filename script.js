document.addEventListener("DOMContentLoaded", () => {
  const filtersContainer = document.getElementById('filters');
  const periodicTable = document.getElementById('periodic-table');
  const tooltip = document.getElementById('tooltip');
  let currentFilter = 'all';

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'alkali-metal', name: 'Alkali Metals' },
    { id: 'alkaline-earth-metal', name: 'Alkaline Earth Metals' },
    { id: 'transition-metal', name: 'Transition Metals' },
    { id: 'post-transition-metal', name: 'Post Transition Metals' },
    { id: 'metalloid', name: 'Metalloids' },
    { id: 'nonmetal', name: 'Nonmetals' },
    { id: 'halogen', name: 'Halogens' },
    { id: 'noble-gas', name: 'Noble Gases' },
    { id: 'lanthanide', name: 'Lanthanides' },
    { id: 'actinide', name: 'Actinides' }
  ];

   const elements = [ 
      {atomicNumber: 1,symbol:"H",name:"Hydrogen",atomicMass:"1.008",groupBlock:"nonmetal",group:1,period:1,electronConfig:"1s1", },
      {atomicNumber: 2,symbol:"He",name:"Helium",atomicMass:"4.0026",groupBlock:"noble-gas",group:18,period:1,electronConfig:"1s2"},
      {atomicNumber: 3,symbol:"Li",name:"Lithium",atomicMass:"6.94",groupBlock:"alkali-metal",group:1,period:2,electronConfig:"[He] 2s1"},
      {atomicNumber: 4,symbol:"Be",name:"Beryllium",atomicMass:"9.0122",groupBlock:"alkaline-earth-metal",group:2,period:2,electronConfig:"[He] 2s2"},
      {atomicNumber: 5,symbol:"B",name:"Boron",atomicMass:"10.81",groupBlock:"metalloid",group:13,period:2,electronConfig:"[He] 2s2 2p1"},
      {atomicNumber: 6,symbol:"C",name:"Carbon",atomicMass:"12.011",groupBlock:"nonmetal",group:14,period:2,electronConfig:"[He] 2s2 2p2"},
      {atomicNumber: 7,symbol:"N",name:"Nitrogen",atomicMass:"14.007",groupBlock:"nonmetal",group:15,period:2,electronConfig:"[He] 2s2 2p3"},
      {atomicNumber: 8,symbol:"O",name:"Oxygen",atomicMass:"15.999",groupBlock:"nonmetal",group:16,period:2,electronConfig:"[He] 2s2 2p4"},
      {atomicNumber: 9,symbol:"F",name:"Fluorine",atomicMass:"18.998",groupBlock:"halogen",group:17,period:2,electronConfig:"[He] 2s2 2p5"},
      {atomicNumber: 10,symbol:"Ne",name:"Neon",atomicMass:"20.180",groupBlock:"noble-gas",group:18,period:2,electronConfig:"[He] 2s2 2p6"},
      {atomicNumber: 11,symbol:"Na",name:"Sodium",atomicMass:"22.990",groupBlock:"alkali-metal",group:1,period:3,electronConfig:"[Ne] 3s1"},
      {atomicNumber: 12,symbol:"Mg",name:"Magnesium",atomicMass:"24.305",groupBlock:"alkaline-earth-metal",group:2,period:3,electronConfig:"[Ne] 3s2"},
      {atomicNumber: 13,symbol:"Al",name:"Aluminium",atomicMass:"26.982",groupBlock:"post-transition-metal",group:13,period:3,electronConfig:"[Ne] 3s2 3p1"},
      {atomicNumber: 14,symbol:"Si",name:"Silicon",atomicMass:"28.085",groupBlock:"metalloid",group:14,period:3,electronConfig:"[Ne] 3s2 3p2"},
      {atomicNumber: 15,symbol:"P",name:"Phosphorus",atomicMass:"30.974",groupBlock:"nonmetal",group:15,period:3,electronConfig:"[Ne] 3s2 3p3"},
      {atomicNumber: 16,symbol:"S",name:"Sulfur",atomicMass:"32.06",groupBlock:"nonmetal",group:16,period:3,electronConfig:"[Ne] 3s2 3p4"},
      {atomicNumber: 17,symbol:"Cl",name:"Chlorine",atomicMass:"35.45",groupBlock:"halogen",group:17,period:3,electronConfig:"[Ne] 3s2 3p5"},
      {atomicNumber: 18,symbol:"Ar",name:"Argon",atomicMass:"39.948",groupBlock:"noble-gas",group:18,period:3,electronConfig:"[Ne] 3s2 3p6"},
      {atomicNumber: 19,symbol:"K",name:"Potassium",atomicMass:"39.098",groupBlock:"alkali-metal",group:1,period:4,electronConfig:"[Ar] 4s1"},
      {atomicNumber: 20,symbol:"Ca",name:"Calcium",atomicMass:"40.078",groupBlock:"alkaline-earth-metal",group:2,period:4,electronConfig:"[Ar] 4s2"},
      {atomicNumber: 21,symbol:"Sc",name:"Scandium",atomicMass:"44.956",groupBlock:"transition-metal",group:3,period:4,electronConfig:"[Ar] 3d1 4s2"},
      {atomicNumber: 22,symbol:"Ti",name:"Titanium",atomicMass:"47.867",groupBlock:"transition-metal",group:4,period:4,electronConfig:"[Ar] 3d2 4s2"},
      {atomicNumber: 23,symbol:"V",name:"Vanadium",atomicMass:"50.942",groupBlock:"transition-metal",group:5,period:4,electronConfig:"[Ar] 3d3 4s2"},
      {atomicNumber: 24,symbol:"Cr",name:"Chromium",atomicMass:"51.996",groupBlock:"transition-metal",group:6,period:4,electronConfig:"[Ar] 3d5 4s1"},
      {atomicNumber: 25,symbol:"Mn",name:"Manganese",atomicMass:"54.938",groupBlock:"transition-metal",group:7,period:4,electronConfig:"[Ar] 3d5 4s2"},
      {atomicNumber: 26,symbol:"Fe",name:"Iron",atomicMass:"55.845",groupBlock:"transition-metal",group:8,period:4,electronConfig:"[Ar] 3d6 4s2"},
      {atomicNumber: 27,symbol:"Co",name:"Cobalt",atomicMass:"58.933",groupBlock:"transition-metal",group:9,period:4,electronConfig:"[Ar] 3d7 4s2"},
      {atomicNumber: 28,symbol:"Ni",name:"Nickel",atomicMass:"58.693",groupBlock:"transition-metal",group:10,period:4,electronConfig:"[Ar] 3d8 4s2"},
      {atomicNumber: 29,symbol:"Cu",name:"Copper",atomicMass:"63.546",groupBlock:"transition-metal",group:11,period:4,electronConfig:"[Ar] 3d10 4s1"},
      {atomicNumber: 30,symbol:"Zn",name:"Zinc",atomicMass:"65.38",groupBlock:"transition-metal",group:12,period:4,electronConfig:"[Ar] 3d10 4s2"},
      {atomicNumber: 31,symbol:"Ga",name:"Gallium",atomicMass:"69.723",groupBlock:"post-transition-metal",group:13,period:4,electronConfig:"[Ar] 3d10 4s2 4p1"},
      {atomicNumber: 32,symbol:"Ge",name:"Germanium",atomicMass:"72.63",groupBlock:"metalloid",group:14,period:4,electronConfig:"[Ar] 3d10 4s2 4p2"},
      {atomicNumber: 33,symbol:"As",name:"Arsenic",atomicMass:"74.922",groupBlock:"metalloid",group:15,period:4,electronConfig:"[Ar] 3d10 4s2 4p3"},
      {atomicNumber: 34,symbol:"Se",name:"Selenium",atomicMass:"78.96",groupBlock:"nonmetal",group:16,period:4,electronConfig:"[Ar] 3d10 4s2 4p4"},
      {atomicNumber: 35,symbol:"Br",name:"Bromine",atomicMass:"79.904",groupBlock:"halogen",group:17,period:4,electronConfig:"[Ar] 3d10 4s2 4p5"},
      {atomicNumber: 36,symbol:"Kr",name:"Krypton",atomicMass:"83.798",groupBlock:"noble-gas",group:18,period:4,electronConfig:"[Ar] 3d10 4s2 4p6"},
      {atomicNumber: 37,symbol:"Rb",name:"Rubidium",atomicMass:"85.468",groupBlock:"alkali-metal",group:1,period:5,electronConfig:"[Kr] 5s1"},
      {atomicNumber: 38,symbol:"Sr",name:"Strontium",atomicMass:"87.62",groupBlock:"alkaline-earth-metal",group:2,period:5,electronConfig:"[Kr] 5s2"},
      {atomicNumber: 39,symbol:"Y",name:"Yttrium",atomicMass:"88.906",groupBlock:"transition-metal",group:3,period:5,electronConfig:"[Kr] 4d1 5s2"},
      {atomicNumber: 40,symbol:"Zr",name:"Zirconium",atomicMass:"91.224",groupBlock:"transition-metal",group:4,period:5,electronConfig:"[Kr] 4d2 5s2"},
      {atomicNumber: 41,symbol:"Nb",name:"Niobium",atomicMass:"92.906",groupBlock:"transition-metal",group:5,period:5,electronConfig:"[Kr] 4d4 5s1"},
      {atomicNumber: 42,symbol:"Mo",name:"Molybdenum",atomicMass:"95.95",groupBlock:"transition-metal",group:6,period:5,electronConfig:"[Kr] 4d5 5s1"},
      {atomicNumber: 43,symbol:"Tc",name:"Technetium",atomicMass:"(98)",groupBlock:"transition-metal",group:7,period:5,electronConfig:"[Kr] 4d5 5s2"},
      {atomicNumber: 44,symbol:"Ru",name:"Ruthenium",atomicMass:"101.07",groupBlock:"transition-metal",group:8,period:5,electronConfig:"[Kr] 4d7 5s1"},
      {atomicNumber: 45,symbol:"Rh",name:"Rhodium",atomicMass:"102.91",groupBlock:"transition-metal",group:9,period:5,electronConfig:"[Kr] 4d8 5s1"},
      {atomicNumber: 46,symbol:"Pd",name:"Palladium",atomicMass:"106.42",groupBlock:"transition-metal",group:10,period:5,electronConfig:"[Kr] 4d10"},
      {atomicNumber: 47,symbol:"Ag",name:"Silver",atomicMass:"107.87",groupBlock:"transition-metal",group:11,period:5,electronConfig:"[Kr] 4d10 5s1"},
      {atomicNumber: 48,symbol:"Cd",name:"Cadmium",atomicMass:"112.41",groupBlock:"transition-metal",group:12,period:5,electronConfig:"[Kr] 4d10 5s2"},
      {atomicNumber: 49,symbol:"In",name:"Indium",atomicMass:"114.82",groupBlock:"post-transition-metal",group:13,period:5,electronConfig:"[Kr] 4d10 5s2 5p1"},
      {atomicNumber: 50,symbol:"Sn",name:"Tin",atomicMass:"118.71",groupBlock:"post-transition-metal",group:14,period:5,electronConfig:"[Kr] 4d10 5s2 5p2"},
      {atomicNumber: 51,symbol:"Sb",name:"Antimony",atomicMass:"121.76",groupBlock:"metalloid",group:15,period:5,electronConfig:"[Kr] 4d10 5s2 5p3"},
      {atomicNumber: 52,symbol:"Te",name:"Tellurium",atomicMass:"127.60",groupBlock:"metalloid",group:16,period:5,electronConfig:"[Kr] 4d10 5s2 5p4"},
      {atomicNumber: 53,symbol:"I",name:"Iodine",atomicMass:"126.90",groupBlock:"halogen",group:17,period:5,electronConfig:"[Kr] 4d10 5s2 5p5"},
      {atomicNumber: 54,symbol:"Xe",name:"Xenon",atomicMass:"131.29",groupBlock:"noble-gas",group:18,period:5,electronConfig:"[Kr] 4d10 5s2 5p6"},
      {atomicNumber: 55,symbol:"Cs",name:"Caesium",atomicMass:"132.91",groupBlock:"alkali-metal",group:1,period:6,electronConfig:"[Xe] 6s1"},
      {atomicNumber: 56,symbol:"Ba",name:"Barium",atomicMass:"137.33",groupBlock:"alkaline-earth-metal",group:2,period:6,electronConfig:"[Xe] 6s2"},
      {atomicNumber: 57,symbol:"La",name:"Lanthanum",atomicMass:"138.91",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 5d1 6s2"},
      {atomicNumber: 58,symbol:"Ce",name:"Cerium",atomicMass:"140.12",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f1 5d1 6s2"},
      {atomicNumber: 59,symbol:"Pr",name:"Praseodymium",atomicMass:"140.91",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f3 6s2"},
      {atomicNumber: 60,symbol:"Nd",name:"Neodymium",atomicMass:"144.24",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f4 6s2"},
      {atomicNumber: 61,symbol:"Pm",name:"Promethium",atomicMass:"(145)",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f5 6s2"},
      {atomicNumber: 62,symbol:"Sm",name:"Samarium",atomicMass:"150.36",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f6 6s2"},
      {atomicNumber: 63,symbol:"Eu",name:"Europium",atomicMass:"151.96",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f7 6s2"},
      {atomicNumber: 64,symbol:"Gd",name:"Gadolinium",atomicMass:"157.25",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f7 5d1 6s2"},
      {atomicNumber: 65,symbol:"Tb",name:"Terbium",atomicMass:"158.93",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f9 6s2"},
      {atomicNumber: 66,symbol:"Dy",name:"Dysprosium",atomicMass:"162.50",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f10 6s2"},
      {atomicNumber: 67,symbol:"Ho",name:"Holmium",atomicMass:"164.93",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f11 6s2"},
      {atomicNumber: 68,symbol:"Er",name:"Erbium",atomicMass:"167.26",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f12 6s2"},
      {atomicNumber: 69,symbol:"Tm",name:"Thulium",atomicMass:"168.93",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f13 6s2"},
      {atomicNumber: 70,symbol:"Yb",name:"Ytterbium",atomicMass:"173.05",groupBlock:"lanthanide",group:null,period:6,electronConfig:"[Xe] 4f14 6s2"},
      {atomicNumber: 71,symbol:"Lu",name:"Lutetium",atomicMass:"174.97",groupBlock:"lanthanide",group:3,period:6,electronConfig:"[Xe] 4f14 5d1 6s2"},
      {atomicNumber: 72,symbol:"Hf",name:"Hafnium",atomicMass:"178.49",groupBlock:"transition-metal",group:4,period:6,electronConfig:"[Xe] 4f14 5d2 6s2"},
      {atomicNumber: 73,symbol:"Ta",name:"Tantalum",atomicMass:"180.95",groupBlock:"transition-metal",group:5,period:6,electronConfig:"[Xe] 4f14 5d3 6s2"},
      {atomicNumber: 74,symbol:"W",name:"Tungsten",atomicMass:"183.84",groupBlock:"transition-metal",group:6,period:6,electronConfig:"[Xe] 4f14 5d4 6s2"},
      {atomicNumber: 75,symbol:"Re",name:"Rhenium",atomicMass:"186.21",groupBlock:"transition-metal",group:7,period:6,electronConfig:"[Xe] 4f14 5d5 6s2"},
      {atomicNumber: 76,symbol:"Os",name:"Osmium",atomicMass:"190.23",groupBlock:"transition-metal",group:8,period:6,electronConfig:"[Xe] 4f14 5d6 6s2"},
      {atomicNumber: 77,symbol:"Ir",name:"Iridium",atomicMass:"192.22",groupBlock:"transition-metal",group:9,period:6,electronConfig:"[Xe] 4f14 5d7 6s2"},
      {atomicNumber: 78,symbol:"Pt",name:"Platinum",atomicMass:"195.08",groupBlock:"transition-metal",group:10,period:6,electronConfig:"[Xe] 4f14 5d9 6s1"},
      {atomicNumber: 79,symbol:"Au",name:"Gold",atomicMass:"196.97",groupBlock:"transition-metal",group:11,period:6,electronConfig:"[Xe] 4f14 5d10 6s1"},
      {atomicNumber: 80,symbol:"Hg",name:"Mercury",atomicMass:"200.59",groupBlock:"transition-metal",group:12,period:6,electronConfig:"[Xe] 4f14 5d10 6s2"},
      {atomicNumber: 81,symbol:"Tl",name:"Thallium",atomicMass:"204.38",groupBlock:"post-transition-metal",group:13,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p1"},
      {atomicNumber: 82,symbol:"Pb",name:"Lead",atomicMass:"207.2",groupBlock:"post-transition-metal",group:14,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p2"},
      {atomicNumber: 83,symbol:"Bi",name:"Bismuth",atomicMass:"208.98",groupBlock:"post-transition-metal",group:15,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p3"},
      {atomicNumber: 84,symbol:"Po",name:"Polonium",atomicMass:"(209)",groupBlock:"metalloid",group:16,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p4"},
      {atomicNumber: 85,symbol:"At",name:"Astatine",atomicMass:"(210)",groupBlock:"halogen",group:17,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p5"},
      {atomicNumber: 86,symbol:"Rn",name:"Radon",atomicMass:"(222)",groupBlock:"noble-gas",group:18,period:6,electronConfig:"[Xe] 4f14 5d10 6s2 6p6"},
      {atomicNumber: 87,symbol:"Fr",name:"Francium",atomicMass:"(223)",groupBlock:"alkali-metal",group:1,period:7,electronConfig:"[Rn] 7s1"},
      {atomicNumber: 88,symbol:"Ra",name:"Radium",atomicMass:"(226)",groupBlock:"alkaline-earth-metal",group:2,period:7,electronConfig:"[Rn] 7s2"},
      {atomicNumber: 89,symbol:"Ac",name:"Actinium",atomicMass:"(227)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 6d1 7s2"},     
      {atomicNumber: 90,symbol:"Th",name:"Thorium",atomicMass:"232.04",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 6d2 7s2"},
      {atomicNumber: 91,symbol:"Pa",name:"Protactinium",atomicMass:"231.04",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f2 6d1 7s2"},
      {atomicNumber: 92,symbol:"U",name:"Uranium",atomicMass:"238.03",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f3 6d1 7s2"},
      {atomicNumber: 93,symbol:"Np",name:"Neptunium",atomicMass:"(237)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f4 6d1 7s2"},
      {atomicNumber: 94,symbol:"Pu",name:"Plutonium",atomicMass:"(244)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f6 7s2"},
      {atomicNumber: 95,symbol:"Am",name:"Americium",atomicMass:"(243)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f7 7s2"},
      {atomicNumber: 96,symbol:"Cm",name:"Curium",atomicMass:"(247)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f7 6d1 7s2"},
      {atomicNumber: 97,symbol:"Bk",name:"Berkelium",atomicMass:"(247)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f9 7s2"},
      {atomicNumber: 98,symbol:"Cf",name:"Californium",atomicMass:"(251)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f10 7s2"},
      {atomicNumber: 99,symbol:"Es",name:"Einsteinium",atomicMass:"(252)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f11 7s2"},
      {atomicNumber: 100,symbol:"Fm",name:"Fermium",atomicMass:"(257)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f12 7s2"},
      {atomicNumber: 101,symbol:"Md",name:"Mendelevium",atomicMass:"(258)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f13 7s2"},
      {atomicNumber: 102,symbol:"No",name:"Nobelium",atomicMass:"(259)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f14 7s2"},
      {atomicNumber: 103,symbol:"Lr",name:"Lawrencium",atomicMass:"(262)",groupBlock:"actinide",group:null,period:7,electronConfig:"[Rn] 5f14 7s2 7p1"},
      {atomicNumber: 104,symbol:"Rf",name:"Rutherfordium",atomicMass:"(267)",groupBlock:"transition-metal",group:4,period:7,electronConfig:"[Rn] 5f14 6d2 7s2"},
      {atomicNumber: 105,symbol:"Db",name:"Dubnium",atomicMass:"(270)",groupBlock:"transition-metal",group:5,period:7,electronConfig:"[Rn] 5f14 6d3 7s2"},
      {atomicNumber: 106,symbol:"Sg",name:"Seaborgium",atomicMass:"(271)",groupBlock:"transition-metal",group:6,period:7,electronConfig:"[Rn] 5f14 6d4 7s2"},
      {atomicNumber: 107,symbol:"Bh",name:"Bohrium",atomicMass:"(270)",groupBlock:"transition-metal",group:7,period:7,electronConfig:"[Rn] 5f14 6d5 7s2"},
      {atomicNumber: 108,symbol:"Hs",name:"Hassium",atomicMass:"(277)",groupBlock:"transition-metal",group:8,period:7,electronConfig:"[Rn] 5f14 6d6 7s2"},
      {atomicNumber: 109,symbol:"Mt",name:"Meitnerium",atomicMass:"(276)",groupBlock:"transition-metal",group:9,period:7,electronConfig:"[Rn] 5f14 6d7 7s2"},
      {atomicNumber: 110,symbol:"Ds",name:"Darmstadtium",atomicMass:"(281)",groupBlock:"transition-metal",group:10,period:7,electronConfig:"[Rn] 5f14 6d9 7s1"},
      {atomicNumber: 111,symbol:"Rg",name:"Roentgenium",atomicMass:"(282)",groupBlock:"transition-metal",group:11,period:7,electronConfig:"[Rn] 5f14 6d10 7s1"},
      {atomicNumber: 112,symbol:"Cn",name:"Copernicium",atomicMass:"(285)",groupBlock:"transition-metal",group:12,period:7,electronConfig:"[Rn] 5f14 6d10 7s2"},
      {atomicNumber: 113,symbol:"Nh",name:"Nihonium",atomicMass:"(286)",groupBlock:"post-transition-metal",group:13,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p1"},
      {atomicNumber: 114,symbol:"Fl",name:"Flerovium",atomicMass:"(289)",groupBlock:"post-transition-metal",group:14,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p2"},
      {atomicNumber: 115,symbol:"Mc",name:"Moscovium",atomicMass:"(290)",groupBlock:"post-transition-metal",group:15,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p3"},
      {atomicNumber: 116,symbol:"Lv",name:"Livermorium",atomicMass:"(293)",groupBlock:"post-transition-metal",group:16,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p4"},
      {atomicNumber: 117,symbol:"Ts",name:"Tennessine",atomicMass:"(294)",groupBlock:"halogen",group:17,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p5"},
      {atomicNumber: 118,symbol:"Og",name:"Oganesson",atomicMass:"(294)",groupBlock:"noble-gas",group:18,period:7,electronConfig:"[Rn] 5f14 6d10 7s2 7p6"}
    ]; 

  function capitalize(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
  }

  function createElementCard(elem) {
    const element = document.createElement('div');
    element.className = `element ${elem.groupBlock}`;
    element.style.gridRow = elem.period;
    element.style.gridColumn = elem.group;

    if (elem.groupBlock === 'lanthanide') {
      element.style.gridRow = 8;
      element.style.gridColumn = (elem.atomicNumber - 57) + 4;
    } else if (elem.groupBlock === 'actinide') {
      element.style.gridRow = 9;
      element.style.gridColumn = (elem.atomicNumber - 89) + 4;
    }

    element.tabIndex = 0;
    element.setAttribute('role', 'listitem');
    element.setAttribute('aria-label', `${elem.name} (${elem.symbol}), Atomic number ${elem.atomicNumber}`);

    element.innerHTML = `
      <div class="atomic-number">${elem.atomicNumber}</div>
      <div class="symbol">${elem.symbol}</div>
      <div class="name">${elem.name}</div>
      <div class="atomic-mass">${elem.atomicMass}</div>
    `;

    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(elem.name)}`;
    element.addEventListener('click', () => {
      window.open(wikiUrl, '_blank');
    });

    element.addEventListener('mouseenter', e => showTooltip(e, elem));
    element.addEventListener('focus', e => showTooltip(e, elem));
    element.addEventListener('mouseleave', hideTooltip);
    element.addEventListener('blur', hideTooltip);

    return element;
  }

  function renderTable() {
    periodicTable.innerHTML = '';
    elements.forEach(elem => {
      periodicTable.appendChild(createElementCard(elem));
    });
    applyFilter(currentFilter);
  }

  function renderFilters() {
    filtersContainer.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = cat.name;
      btn.onclick = () => {
        currentFilter = cat.id;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        applyFilter(currentFilter);
      };
      if (cat.id === 'all') btn.classList.add('selected');
      filtersContainer.appendChild(btn);
    });
  }

  function applyFilter(category) {
    const allElements = periodicTable.querySelectorAll('.element');
    allElements.forEach(el => {
      el.classList.toggle('hidden', category !== 'all' && !el.classList.contains(category));
    });
  }

  function showTooltip(event, data) {
    tooltip.innerHTML = `
      <strong>${data.name} (${data.symbol})</strong><br/>
      Atomic Number: ${data.atomicNumber}<br/>
      Atomic Mass: ${data.atomicMass}<br/>
      Category: ${capitalize(data.groupBlock.replace(/-/g, ' '))}<br/>
      Electron Configuration: ${data.electronConfig}
    `;
    tooltip.classList.add('show');
    tooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(event);
  }

  function hideTooltip() {
    tooltip.classList.remove('show');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  function positionTooltip(event) {
    let x = event.clientX;
    let y = event.clientY;
    const tooltipRect = tooltip.getBoundingClientRect();
    const padding = 12;

    let left = x + 20;
    if (left + tooltipRect.width > window.innerWidth) {
      left = x - tooltipRect.width - 20;
    }

    let top = y + 20;
    if (top + tooltipRect.height > window.innerHeight) {
      top = y - tooltipRect.height - 20;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  renderFilters();
  renderTable();
});
