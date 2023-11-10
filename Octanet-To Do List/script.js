const inputBox=document.getElementById("task");
const Unlist=document.getElementById("taskcontainer");

function addTask(){
    if(inputBox.value=="")
    alert("Enter a valid input!");
    else{

        // write the data into the li tag

        let liEle=document.createElement("li");
        liEle.innerHTML=inputBox.value;
        Unlist.appendChild(liEle);
        inputBox.value=" ";

        // showing X mark on the right

        var span=document.createElement("span");
        span.innerHTML="\u00d7";
        liEle.appendChild(span);
        saveData();
 }
   

}

Unlist.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// func to save in local storage

function saveData(){
        localStorage.setItem("data",Unlist.innerHTML);
       // console.log(localStorage.getItem("data"));
}

function showData(){
    Unlist.innerHTML=localStorage.getItem("data");
}
showData();
