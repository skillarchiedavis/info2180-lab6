window.onload = main;

function ajax_word_query(word){
    let httpRequest = new XMLHttpRequest();
    let url = `/request.php?q=${word}`;
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE ){
            if(httpRequest.status === 200){
                  document.getElementById("update").innerHTML = httpRequest.responseText;
            }else{
                alert("There was some error");
            }
        }
    }
    
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function update_word_results(response){
    document.getElementById("update").innerHTML = response;
}

function main(){
    let search = $("#search")[0];
    search.onclick = function(event){
        event.preventDefault();
        ajax_word_query(document.getElementsByName("q")[0].value.trim().toLowerCase(),false);
        document.getElementsByName("q")[0].value = "";
    };
    
  
    
}