const bookList = document.querySelector(".book_list");
const title = document.querySelector(".title");
const aurthor = document.querySelector(".aurthor");
const year = document.querySelector(".number");
const btn =  document.querySelector(".btn");


btn.addEventListener("click", function(){
   console.log("ksj kore");
 if (title.value == '' && aurthor.value == '' && year.value == '') {
    alert("kisu lekh vai");
 }else {
   const newRow = document.createElement("tr");

   const titleText = document.createElement("th");
   titleText.innerHTML = title.value;
   newRow.appendChild(titleText);
   console.log(newRow);

   const aurthorText = document.createElement("th");
   aurthorText.innerHTML = aurthor.value;
   newRow.appendChild(aurthorText);

   const yearText = document.createElement("th");
   yearText.innerHTML = year.value;
   newRow.appendChild(yearText);

   bookList.appendChild(newRow);

 }


});