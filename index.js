window.onload = main;

function ajax_word_query(word, all){
    let httpRequest = new XMLHttpRequest();
    let url = `/request.php?q=${word}&all=${all}`;
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE ){
            if(httpRequest.status === 200){
                if(all){
                   parse_xml_result(httpRequest.responseXML); 
                }else{
                    document.getElementById("update").innerHTML = httpRequest.responseText;
                }
            }else{
                alert("There was some error");
            }
        }
    }
    
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function parse_xml_result(response){
    let definitions = response.documentElement.children;
    let results = "<ol>";
    
    for(var i = 0; i < definitions.length; i++){
        results+=`<li><h3>${definitions[i].attributes[0].value.toUpperCase()}</h3><p>${definitions[i].innerHTML.trim()}</p><p> - ${definitions[i].attributes[1].value}</p></li>`;
    }
    
    results+= "</ol>"
     document.getElementById("update").innerHTML =results;
}



function main(){
    let search = $("#search")[0];
    let searchAll = $("#all")[0];
    
    search.onclick = function(event){
        event.preventDefault();
        ajax_word_query(document.getElementsByName("q")[0].value.trim().toLowerCase(),false);
        document.getElementsByName("q")[0].value = "";
    };
    
    searchAll.onclick = function(event){
        event.preventDefault();
        ajax_word_query('', true);
        document.getElementsByName("q")[0].value = "";
    }
    
}