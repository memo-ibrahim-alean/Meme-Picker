import { catsData } from "./data.js";

const emotionsRadioDiv = document.getElementById("emotion-radios");
const imageBtnEl = document.querySelector("#get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

emotionsRadioDiv.addEventListener("change", highlightCheckedOption);

imageBtnEl.addEventListener("click", getMatchingCatsArray);

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const isGif = gifsOnlyOption.checked;
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");

  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = ``;
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
      <label for = "${emotion}" >${emotion}</label>
      <input type="radio"
        id= "${emotion}"
        value= "${emotion}"
        name="emotions">
    </div>
        `;
  }
  emotionsRadioDiv.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
