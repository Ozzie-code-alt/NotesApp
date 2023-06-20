let btnNotes = document.getElementById("btn-Add")


let firstFunction = ()=>{

btnNotes.addEventListener("click", function(){


let noteContainer =document.getElementById('notes-Container')
let stickyNote=document.createElement('div')
stickyNote.className='sticky-note'



noteContainer.appendChild(stickyNote)


})



}

firstFunction()