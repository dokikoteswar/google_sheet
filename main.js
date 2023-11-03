let columns=26;

let rows =100;
const headerContainer =document.querySelector(".header");
// headerContainer.innerHTML = `<p> hdsd</p>`
const sno = document.querySelector(".sno");

const mainContainer = document.querySelector(".main");

function createHeaderCells(){
       for (let i = 0; i <=columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className ="header-cell cell";
       if(i != 0){
        headerCell.innerText = String.fromCharCode(64+i);
       }
       headerContainer.appendChild(headerCell);
        
       }

}
function createSerialNUmberNumberCells(){
     for(let i =1 ; i<=rows; i++){
        const snoCell = document.createElement("div");
        snoCell.innerHTML = i;
        snoCell.className = "sno-cell cell";
        sno.appendChild(snoCell);
     }
}
function creatRow(rowNum){
       const row = document.createElement("div");
       row.className = "row";
       for (let i = 1; i <= columns; i++) {
         const cell = document.createElement("div");
         cell.className = "main-cell cell";
         cell.contentEditable = true;
         cell.id = String.fromCharCode(64+i)+rowNum;

         // ;
         row.appendChild(cell);
         cell.addEventListener("focus", onCellFocus);

         cell.addEventListener("input", onFormChange);
       }
       mainContainer.appendChild(row);
}
function buildMainSec(){
   for (let i = 1; i <= rows; i++) {
      creatRow(i);
      
   }
}
buildMainSec();
createSerialNUmberNumberCells();
createHeaderCells();