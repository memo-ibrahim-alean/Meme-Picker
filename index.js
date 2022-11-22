import { catsData } from "./data.js";

const emotionsRadioDiv = document.getElementById("emotion-radios");

emotionsRadioDiv.addEventListener("change", highlightCheckedOption);

function highlightCheckedOption(e) {
  document.getElementById(e.target.id).parentElement.classList.remove("highlight");
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
