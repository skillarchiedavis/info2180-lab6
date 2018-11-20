window.onload=function(){
     let answer = document.getElementById("result");
     let text =document.getElementById("text").value;
    
    var searchX= document.getElementById("button1");
    searchX.addEventListener("click", function(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange=function(){
        if(xml.readyState === 4 && xml.status ===200){
           let response = xml.responseText;
                answer.innerHTML = response;
        }
        
    };

    xml.open("GET","request.php?q=definition"+text,true);
    xml.send();
    });
    
};