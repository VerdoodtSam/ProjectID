'use strict';
//#region ***  DOM references                           ***********
let htmlTest, htmlTestMastery;

//APi const
const backend_IP = 'https://euw1.api.riotgames.com';
const riotKey = '';

//Id of summ
let currentID = '';

//Data for back-up/storage
let ChampMasteryID = [202, 555, 875, 110, 67, 22, 157, 222, 41, 777, 84, 99, 75, 114, 141, 55, 143, 236, 360, 203, 21, 412, 120, 11, 131, 74, 92, 5, 238, 10, 91, 145, 39, 498, 64, 56, 24, 126, 45, 18, 81, 429, 517, 98, 119, 51, 61, 35, 122, 235, 234, 58, 25, 104, 107, 887, 89, 121, 245, 4, 112, 23, 246, 432, 166, 43, 134, 117, 90, 142, 17, 267, 29, 78, 133, 19, 420, 28, 82, 15, 254, 9, 80, 103, 7, 69, 8, 164, 86, 268, 101, 53, 161, 37, 63, 16, 1, 266, 33, 54, 497, 76, 13, 85, 523, 102, 83, 38, 113, 240, 26, 50, 44, 20, 223, 518, 105, 48, 201, 96, 36, 30, 2, 59, 876, 421, 115, 111, 163, 350, 136, 68, 31, 516, 77, 62, 72, 34, 14, 40, 12, 526, 3, 147, 32, 79, 127, 60, 6, 150, 154, 711, 27, 106, 57, 427, 42];
let ChampMasteryPoints = [375717, 291893, 143121, 99742, 77126, 76294, 73320, 68067, 67960, 66938, 63678, 63454, 61430, 60441, 55331, 51096, 50679, 50641, 49923, 44299, 42372, 41462, 38569, 38305, 38128, 37593, 33410, 32555, 32284, 30424, 29064, 28058, 27410, 26342, 25935, 25775, 25754, 25683, 25605, 25489, 25293, 25108, 23954, 23760, 23047, 21228, 20693, 19747, 18711, 17805, 17568, 16840, 16752, 16698, 16655, 15978, 15915, 15784, 15782, 14129, 13446, 13375, 12961, 12747, 12723, 12486, 12189, 12070, 12068, 11826, 11363, 11309, 11244, 11230, 10890, 10599, 10397, 10342, 10259, 10177, 10074, 9822, 9714, 9578, 9573, 9559, 9252, 8671, 8530, 8501, 8435, 8349, 8148, 7986, 7967, 7656, 7214, 7101, 6993, 6967, 6879, 6709, 6684, 6510, 6254, 5881, 5361, 5307, 5275, 5269, 5085, 5030, 4942, 4910, 4898, 4744, 4611, 4535, 4499, 4474, 4470, 4312, 4250, 4097, 3954, 3900, 3894, 3698, 3601, 3512, 3419, 3156, 3112, 3058, 2785, 2737, 2517, 2357, 2282, 2243, 2184, 2017, 1948, 1750, 1727, 1627, 1541, 1455, 1439, 1270, 1231, 473, 448, 400, 322, 286, 152];
let ChampMasteryLevel = [7, 7, 7, 6, 6, 7, 5, 5, 6, 6, 5, 6, 7, 6, 6, 5, 6, 5, 5, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let ChampMasteryChest = [true, true, true, false, true, true, true, false, false, true, true, true, true, true, true, true, true, false, true, true, false, false, false, true, false, false, false, true, true, true, true, false, true, false, true, true, true, false, true, true, false, false, true, false, true, false, false, false, false, true, false, false, false, true, false, true, true, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false];

let MasteryChamps = [];
let MasteryChampsTypes = [];
let RecomendedChamps = [];
//charts
let ChartChest;
//data for ChartChest
let labelsChest = ['Available', 'Obtained'];
let ChestColors = ['lightblue', 'red'];
let totalChest = 0;
let available = 0;
let obtained = 0;
let dataChest = [available, obtained];
//
let myChart;
//data for myChart
let xValues = ['Support', 'Fighter', 'Mage', 'Marksman', 'Assassin', 'Tank'];
let barColors = ['#D7DAE2', 'sienna', 'skyblue', 'turquoise', 'crimson', 'gold'];
let totalPoints = 0;
let supp = 0;
let fight = 0;
let mage = 0;
let adc = 0;
let assassin = 0;
let tank = 0;
let yValues = [supp, fight, mage, adc, assassin, tank];
//
let ChartLevel;
//data for ChartLevel
let labelsLevel = ['M7', 'M6', 'M5', 'M4', 'ML'];
let LevelColors = ['turquoise', 'purple', 'crimson', 'gold', 'sienna'];
let totalLevels = 0;
let locked = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let dataLevel = [seven, six, five, four, locked];
//

let slideIndex = 1;
//#endregion

//#region ***  Callback-Visualisation - show___         ***********
const showSlide = function (i) {
  let n;
  let x = document.getElementsByClassName('c-chart-img');
  let b = document.getElementsByClassName('c-chart-bar-progress');
  if (i > x.length) {
    slideIndex = 1;
  }
  if (i < 1) slideIndex = x.length;
  for (n = 0; n < x.length; n++) {
    x[n].style.display = 'none';
    b[n].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
  b[slideIndex - 1].style.display = 'block';
};

const showSummName = function (jsonObject) {
  currentID = jsonObject.id;
  ChampMasteryID.splice(0, ChampMasteryID.length);
  MasteryChamps.splice(0, MasteryChamps.length);
  ChampMasteryPoints.splice(0, ChampMasteryPoints.length);
  MasteryChampsTypes.splice(0, MasteryChampsTypes.length);
  RecomendedChamps.splice(0, RecomendedChamps.length);
  ChampMasteryLevel.splice(0, ChampMasteryLevel.length);
  getMastery(currentID);
};

const showMastery = function () {
  let htmlString = ``;
  let s = 0;
  for (let i = 0; i < 6; i++) {
    htmlString += `<div class="c-card c-card__grid">
    <div class="c-card__grid--item"> Champion: ${MasteryChamps[i]}<br/><img class="js-img c-card--img" src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/${MasteryChamps[i]}.png"/>  <br/>Level: ${ChampMasteryLevel[i]} <br/> <img class="js-img  c-card--img" src="img/mastery-${ChampMasteryLevel[i]}.png"/><br/> Points: ${ChampMasteryPoints[i]} <br/></div>
    <div class="c-card__grid--item c-mastery--reco">Recommended champs:<br/> ${RecomendedChamps[s]} <br/> ${RecomendedChamps[s + 1]} <br/> </div>
  </div>`;
    s = s + 2;
  }
  htmlTestMastery.innerHTML = htmlString;
  updateCharts();
};

const showCharts = function () {
  myChart = new Chart('myChart', {
    type: 'doughnut',
    data: { labels: xValues, datasets: [{ backgroundColor: barColors, data: yValues }] },
    options: { plugins: { title: { display: true, text: 'Division of mastery points by role' } } },
  });

  ChartChest = new Chart('ChartChest', {
    type: 'doughnut',
    data: { labels: labelsChest, datasets: [{ backgroundColor: ChestColors, data: dataChest }] },
    options: { plugins: { title: { display: true, text: 'Division availablity of chests' } } },
  });

  ChartLevel = new Chart('ChartLevel', {
    type: 'doughnut',
    data: { labels: labelsLevel, datasets: [{ backgroundColor: LevelColors, data: dataLevel }] },
    options: { plugins: { title: { display: true, text: 'Division of mastery levels' } } },
  });
};
const updateCharts = function () {
  updateChartChests();
  updateChartLevel();
  updateChartPoints();
};

const updateChartPoints = function () {
  let dataset = myChart.data.datasets;
  dataset[0].data.pop();
  myChart.update();
  totalPoints = 0;
  supp = 0;
  fight = 0;
  mage = 0;
  adc = 0;
  assassin = 0;
  tank = 0;
  for (let i = 0; i < ChampMasteryPoints.length; i++) {
    totalPoints += ChampMasteryPoints[i];
  }
  for (let i = 0; i < ChampMasteryPoints.length; i++) {
    let percent = ChampMasteryPoints[i] / totalPoints;
    switch (MasteryChampsTypes[i]) {
      case 'Support':
        supp += percent;
        break;
      case 'Fighter':
        fight += percent;
        break;
      case 'Mage':
        mage += percent;
        break;
      case 'Marksman':
        adc += percent;
        break;
      case 'Assassin':
        assassin += percent;
        break;
      case 'Tank':
        tank += percent;
        break;
      default:
        break;
    }
  }
  yValues = [supp, fight, mage, adc, assassin, tank];
  dataset[0].data = yValues;
  myChart.update();
};

const updateChartChests = function () {
  let dataset = ChartChest.data.datasets;
  dataset[0].data.pop();
  ChartChest.update();
  totalChest = ChampMasteryChest.length;
  available = 0;
  obtained = 0;
  for (let i = 0; i < totalChest; i++) {
    let status = ChampMasteryChest[i];
    if (status) {
      obtained++;
    } else {
      available++;
    }
  }
  dataChest = [available, obtained];
  dataset[0].data = dataChest;
  ChartChest.update();
};

const updateChartLevel = function () {
  let dataset = ChartLevel.data.datasets;
  dataset[0].data.pop();
  ChartLevel.update();
  totalLevels = ChampMasteryLevel.length;
  locked = 0;
  four = 0;
  five = 0;
  six = 0;
  seven = 0;
  for (let i = 0; i < totalLevels; i++) {
    switch (ChampMasteryLevel[i]) {
      case 1:
        locked++;
        break;
      case 2:
        locked++;
        break;
      case 3:
        locked++;
        break;
      case 4:
        four++;
        break;
      case 5:
        five++;
        break;
      case 6:
        six++;
        break;
      case 7:
        seven++;
        break;
      default:
        break;
    }
  }
  dataLevel = [seven, six, five, four, locked];
  dataset[0].data = dataLevel;
  ChartLevel.update();
};
//#endregion

//#region ***  Callback-No Visualisation - callback___  ***********
function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  chart.update();
}

const callbackMastery = function (jsonObject) {
  for (let i = 0; i < jsonObject.length; i++) {
    ChampMasteryID.push(jsonObject[i].championId);
    ChampMasteryPoints.push(jsonObject[i].championPoints);
    ChampMasteryLevel.push(jsonObject[i].championLevel);
    ChampMasteryChest.push(jsonObject[i].chestGranted);
  }
  getChampById();
};

const callbackChamp = function (jsonObject) {
  for (let index = 0; index < ChampMasteryID.length; index++) {
    for (let champs in jsonObject.data) {
      let champStats = jsonObject.data[champs];
      if (champStats.key == ChampMasteryID[index]) {
        MasteryChamps.push(champStats.id);
      }
    }
  }
  callbackMasterType(jsonObject);
};

const callbackMasterType = function (jsonObject) {
  for (let index = 0; index < ChampMasteryID.length; index++) {
    for (let champs in jsonObject.data) {
      let champStats = jsonObject.data[champs];
      if (champStats.key == ChampMasteryID[index]) {
        MasteryChampsTypes.push(champStats.tags[0]);
      }
    }
  }
  callbackChampionType(jsonObject);
};

const callbackChampionType = function (jsonObject) {
  for (let index = 0; index < MasteryChampsTypes.length; index++) {
    let s = 0;
    for (let champs in jsonObject.data) {
      let champStats = jsonObject.data[champs];
      if (RecomendedChamps.includes(champStats.id)) {
      } else {
        if (champStats.tags[0] == MasteryChampsTypes[index]) {
          RecomendedChamps.push(champStats.id);
          s++;
        }
        if (s == 2) {
          break;
        }
      }
    }
  }
  showMastery();
};
//#endregion

//#region ***  Data Access - get___                     ***********

const getSummName = function (name) {
  handleData(`${backend_IP}/lol/summoner/v4/summoners/by-name/${name}?${riotKey}`, showSummName);
};

const getMastery = function (currentID) {
  handleData(`${backend_IP}/lol/champion-mastery/v4/champion-masteries/by-summoner/${currentID}?${riotKey}`, callbackMastery);
};

const getChampById = function () {
  fetch('https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json')
    .then(function (response) {
      //antwoord van de server nakijken op het verzoek
      if (!response.ok) {
        //antwoord is niet ok. error wordt geworpen
        throw Error(`Probleem bij de fetch(). Status Code: ${response.status}`);
      } else {
        //antwoord is ok
        console.info('Er is een response teruggekomen van de server');
        return response.json();
      }
    })
    .then(function (jsonObject) {
      //functie uitgevoerd en json maken
      console.info('json object is aangemaakt');
      //functie verwerkenhowestdata uitvoeren
      callbackChamp(jsonObject);
    })
    //als uitvoeren op een fout loopt
    .catch(function (error) {
      console.error(`fout bij verwerken json ${error}`);
    });
};

const getChampByType = function () {
  fetch('https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json')
    .then(function (response) {
      //antwoord van de server nakijken op het verzoek
      if (!response.ok) {
        //antwoord is niet ok. error wordt geworpen
        throw Error(`Probleem bij de fetch(). Status Code: ${response.status}`);
      } else {
        //antwoord is ok
        console.info('Er is een response teruggekomen van de server');
        return response.json();
      }
    })
    .then(function (jsonObject) {
      //functie uitgevoerd en json maken
      console.info('json object is aangemaakt');
      //functie verwerkenhowestdata uitvoeren
      callbackMasterType(jsonObject);
    })
    //als uitvoeren op een fout loopt
    .catch(function (error) {
      console.error(`fout bij verwerken json ${error}`);
    });
};
//#endregion

//#region ***  Event Listeners - listenTo___            ***********
const listenToClickSumm = function () {
  document.querySelector('.js-search').addEventListener('click', function () {
    const name = document.querySelector('.js-name').value;

    getSummName(name);
  });
};

const listenToClickMenu = function () {
  document.querySelector('.js-menu-btn').addEventListener('click', function () {
    const btnSetting = document.querySelector('.js-menu-btn');
    let expandedState = btnSetting.getAttribute('aria-expanded');
    console.log(expandedState);
    if (expandedState == 'true') {
      btnSetting.setAttribute('aria-expanded', 'false');
      const htmlOptions = document.querySelector('.js-options');
      htmlOptions.classList.add('c-options-hide');
      const btnOptions = document.querySelector('.js-settings');
      btnOptions.setAttribute('aria-expanded', 'false');
    } else if (expandedState == 'false') {
      btnSetting.setAttribute('aria-expanded', 'true');
    }
    const htmlSetting = document.querySelector('.js-menu');
    htmlSetting.classList.toggle('c-options-hide');
  });
};

const listenToClickList = function () {
  document.querySelector('.js-listbtn').addEventListener('click', function () {
    const btnChart = document.querySelector('.js-chartbtn');
    const btnlist = document.querySelector('.js-listbtn');
    const htmlChart = document.querySelector('.js-chart');

    btnChart.classList.remove('c-option__togglebtn--selected');
    btnlist.classList.add('c-option__togglebtn--selected');
    htmlChart.classList.add('c-chart-hidden');
    htmlTestMastery.classList.remove('c-mastery-hidden');
  });
};

const listenToClickChart = function () {
  document.querySelector('.js-chartbtn').addEventListener('click', function () {
    const btnChart = document.querySelector('.js-chartbtn');
    const btnlist = document.querySelector('.js-listbtn');
    const htmlChart = document.querySelector('.js-chart');

    btnChart.classList.add('c-option__togglebtn--selected');
    btnlist.classList.remove('c-option__togglebtn--selected');
    htmlChart.classList.remove('c-chart-hidden');
    htmlTestMastery.classList.add('c-mastery-hidden');
  });
};

const listenToClickSettings = function () {
  document.querySelector('.js-settings').addEventListener('click', function () {
    const btnSetting = document.querySelector('.js-settings');
    let expandedState = btnSetting.getAttribute('aria-expanded');
    console.log(expandedState);
    if (expandedState == 'true') {
      btnSetting.setAttribute('aria-expanded', 'false');
    } else if (expandedState == 'false') {
      btnSetting.setAttribute('aria-expanded', 'true');
    }
    const htmlOptions = document.querySelector('.js-options');
    htmlOptions.classList.toggle('c-options-hide');
  });
};

function plusDivs(n) {
  showSlide((slideIndex += n));
}

function listenToClickPlain() {
  let checkbox = document.getElementById('js-plaintext');
  if (checkbox.checked == true) {
    let htmlImg = document.querySelectorAll('.js-img');
    for (let i = 0; i < htmlImg.length; i++) {
      htmlImg[i].classList.add('c-card--img__hide');
    }
  } else {
    let htmlImg = document.querySelectorAll('.js-img');
    for (let i = 0; i < htmlImg.length; i++) {
      htmlImg[i].classList.remove('c-card--img__hide');
    }
  }
}

function listenToClickReco() {
  let checkbox = document.getElementById('js-Recomended');
  if (checkbox.checked == true) {
    htmlTestMastery = document.querySelector('.js-testMastery');
    htmlTestMastery.classList.remove('c-mastery--hide_reco');
  } else {
    htmlTestMastery = document.querySelector('.js-testMastery');
    htmlTestMastery.classList.add('c-mastery--hide_reco');
  }
}
//#endregion

//#region ***  Init / DOMContentLoaded                  ***********
const init = function () {
  console.log('DOM is geladen');
  htmlTestMastery = document.querySelector('.js-testMastery');
  if (riotKey == '') {
    listenToClickSettings();
    listenToClickMenu();
    listenToClickList();
    listenToClickChart();
    showCharts();
    showSlide(1);
    getChampById();
  } else {
    listenToClickSumm();
    listenToClickSettings();
    listenToClickMenu();
    listenToClickList();
    listenToClickChart();
    showCharts();
    showSlide(1);
    getSummName('VirJhinMojito');
  }
};

document.addEventListener('DOMContentLoaded', init);
//#endregion
