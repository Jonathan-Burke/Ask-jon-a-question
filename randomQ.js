const randomString = ["yes", "No", "try Agian","Maybe later","I have a headache. Ask again later","Don't know. Don't care"];
// logic for Ask a question and get answer input
function randomAnswer (){  
      
    document.getElementById('askQs').value  =  
randomString [ Math.floor(Math.random()*randomString.length)];

}



