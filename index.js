import { catsData } from "./data.js";

const emotionsRadioDiv = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = ``;
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `<p>${emotion}</p>`;
  }
  emotionsRadioDiv.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
