const noteText = document.getElementById('noteText')
const addNoteBtn = document.getElementById('addNoteBtn')
const notesContainer = document.getElementById('notesContainer')

 

let notes  = JSON.parse(localStorage.getItem("notes")) ||  [] ;    




addNoteBtn.addEventListener("click" , function(){
 
    const text  = noteText.value;

    const note  = {
        text : text
    }




    notes.push(note)

    localStorage.setItem("notes" ,JSON.stringify(notes) )

    noteText.value = ""

    showNotes()
})





function showNotes(){



    notesContainer.innerHTML = ""

    if(notes.length == 0 ){
        notesContainer.innerHTML =  "<p> No Notes Yet !!! </p>"
    }


    notes.forEach(function(note){

        const noteDiv = document.createElement("div");
        noteDiv.className = "note"


        const textP = document.createElement("p")
        textP.className = "note-text"
        textP.textContent = note.text;

        
        const deleteBtn = document.createElement("button");
        deleteBtn.classList= "delete-btn";
        deleteBtn.textContent="Delete"

     


        

      noteDiv.appendChild(textP)  
      noteDiv.appendChild(deleteBtn)


     notesContainer.appendChild(noteDiv)
   




    })


}

