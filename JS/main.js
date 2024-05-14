let allNotes = document.querySelector(".allNotes")
let createNote = document.getElementById("createNote")
let inputBoxs = document.querySelectorAll(".inputBox")

allNotes.innerHTML = localStorage.getItem("notes")  ;
function updateLocalStorage() {
   localStorage.setItem("notes",allNotes.innerHTML)
}
createNote.onclick = () => {
   let newNote = document.createElement("p")
   newNote.setAttribute("contenteditable","true")
   let newImg = document.createElement("img")
   newImg.src = 'images/delete.png'
   newNote.classList.add("inputBox")
   newNote.append(newImg)
   allNotes.append(newNote)
   updateLocalStorage();
}
allNotes.addEventListener("click",function (e) {
   if (e.target.tagName === 'IMG'){
      e.target.parentElement.remove();
      updateLocalStorage()
   }
   else if ( e.target.tagName === 'P' ){
      inputBoxs = document.querySelectorAll(".inputBox")
      inputBoxs.forEach( box => {
         box.onkeyup = ()=>{
            updateLocalStorage();
         }
      } )
   }
})
document.addEventListener("keydown" , event => {
   if (event.key === 'Enter') {
      document.execCommand("insertLineBreak");
      event.preventDefault();
   }
})



