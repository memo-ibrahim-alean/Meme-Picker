import { catsData } from "./data.js";

const emotionsRadioDiv = document.getElementById("emotion-radios");
const imageBtnEl = document.querySelector("#get-image-btn");

emotionsRadioDiv.addEventListener("change", highlightCheckedOption);

imageBtnEl.addEventListener("click", getMatchingCatsArray);

function getMatchingCatsArray() {
  const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
  if (selectedEmotion !== null) {
    console.log(selectedEmotion);
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
