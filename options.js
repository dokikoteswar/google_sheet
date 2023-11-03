const cellNamePlaceholder = document.getElementById("active-cell");
const fontSizeInput = document.getElementById("fontsize");
const fontFamilyInput = document.getElementById("fontfamily");
const form = document.getElementById("form");
const formula = document.querySelector(".expression");
let activeElement = null;

const state = {};
const defaultProperties = {
  fontFamily: "'Courier New', Courier, monospace",
  fontSize: 16,
  color: "#000000",
  textAlign: "left",
  backgroundColor: "#ffffff",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  value: "",
};

function onCellFocus(e) {
  // alert(e.target.id);
  const elementId = e.target.id;
  cellNamePlaceholder.innerText = elementId;
  activeElement = e.target;
  console.log(e.target);
  if (state[elementId]) {
    resetOptions(state[elementId]);
  } else {
    resetOptions(defaultProperties);
  }
}

function resetOptions(optionsState) {
  // update  options data curent box

  form.fontfamily.value = optionsState.fontFamily;
  form.fontsize.value = optionsState.fontSize;
  form.textalign.value = optionsState.textAlign;
  form.bold.checked = optionsState.isBold;
  form.italic.checked = optionsState.isItalic;
  form.underlined.checked = optionsState.isUnderlined;
  form.textcolor.value = optionsState.color;
  form.bgcolor.value = optionsState.backgroundColor;
}

function onFormChange() {
  if (!activeElement) {
    alert("plese Select a cell to make change");
    form.reset();
    return;
  }
  let curentState = {
    textColor: form.textcolor.value,
    backgroundColor: form.bgcolor.value,
    fontSize: form.fontsize.value,
    fontFamily: form.fontfamily.value,
    isBold: form.bold.checked,
    isItalic: form.italic.checked,
    isUnderlined: form.underlined.checked,
    textAlign: form.textalign.value,
  };

  applyStylesToCell(curentState);
  state[activeElement.id] = { ...curentState, value: activeElement.innerText };
}
function applyStylesToCell(styleObj) {
  activeElement.style.fontSize = styleObj.fontSize + "px";
  activeElement.style.fontFamily = styleObj.fontFamily;
  activeElement.style.color = styleObj.textColor;
  activeElement.style.backgroundColor = styleObj.backgroundColor;
  activeElement.style.textAlign = styleObj.textAlign;

  activeElement.style.fontWeight = styleObj.isBold ? "bold" : "normal";
  activeElement.style.fontStyle = styleObj.isItalic ? "italic" : "normal";
  activeElement.style.textDecoration = styleObj.isUnderlined
    ? "underline"
    : "none";
}

function onChangeFontSize(eve) {
  formula.addEventListener("keyup", onKeyUp);
  let ans = eval(eve.value);
  
  function onKeyUp(e) {
    console.log(e);
    if(e.code == "Enter"){
      if (undefined != ans) {
        activeElement.innerText = ans;
      } else {
        eve.value = "";
      }
    }
    
  }
}
