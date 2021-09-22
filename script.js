const pandemicStartMap = "XX0X10010X000X010X0";
const temporaryArray = [];
let count = 0;
afterInfection = pandemicStartMap.split('X');
afterInfection.map((subject, index) => {
  if (subject.includes(1) === true) {
  subject = subject.replaceAll('0', '1');
  temporaryArray.push(subject);
  } 
  else {
    temporaryArray.push(subject);
  }
});

const display = (pandemicStartMap, mapName) => {
  const map = document.createElement('div');
  map.id = `field${count}`;
  field = document.getElementById('field');
  field.appendChild(map);
  parent = document.getElementById(`field${count}`);
  const mapNameElement = document.createElement('h3');
  mapNameElement.id = `mapNameElement${count}`;
  mapNameElement.innerHTML = mapName;
  parent.prepend(mapNameElement);
  count = count + 1;
  pandemicStartMap.forEach((subject) =>{
    if (subject === '1') {
      const card = document.createElement('li')
      card.classList.add("infected");
      parent.appendChild(card)
    }
    if (subject === '0') {
      const card = document.createElement('li');
      card.classList.add("healthy");
      parent.appendChild(card);
    }
     if (subject === 'X') {
      const card = document.createElement('li');
      card.classList.add("sea"); 
      parent.appendChild(card);
    }
  }); 
  
}

display(pandemicStartMap.split(''), 'Pandemic Start:');
afterInfection = temporaryArray.join('X').split('');
display(afterInfection, 'Pandemic End:');


const createStatistic = (count) => {
  parent = document.getElementById('statistic');
  const card = document.createElement('h3');
  card.classList.add("statistic");
  card.innerHTML = `${count}`;
  parent.appendChild(card);
}

countAll = pandemicStartMap.split('0').length-1 + pandemicStartMap.split('1').length-1;
count1 = afterInfection.join('X').split('1').length-1;
percentage = count1/countAll*100;
createStatistic(`Total: ${countAll}`);
createStatistic(`Infected: ${count1}`);
createStatistic(`Percentage: ${percentage.toFixed(2)}%`);
