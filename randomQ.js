const randomString = ["yes", "No", 
"try Agian","Maybe later",
"I have a headache. Ask again later",
"Don't know. Don't care"];
// logic for Ask a question and get answer input


function randomAnswer (){  
    let Q = document.getElementById('askQs').value 

    if(Q){
        Qa = document.getElementById('askQs').value= randomString [ Math.floor(Math.random()*randomString.length)];
        
    }

}



