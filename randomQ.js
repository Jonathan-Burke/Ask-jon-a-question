const randomString = ["yes", "No", 
"try Agian","Maybe later",
"I have a headache. Ask again later",
"Don't know. Don't care"];
// logic for Ask a question and get answer input

    

function randomAnswer (){  
    let item = randomString[Math.floor(Math.random() * randomString.length)];
    let Question = document.getElementById('askQs').value;

    if (Question){
      let Answer = document.getElementById('askQs').value = item;
        if(Answer){
            setTimeout(clearText, 3000)

        }

    }

}

function clearText (){

    document.getElementById('askQs').value= ' '
}




