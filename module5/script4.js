document.addEventListener("DOMContentLoaded", function(event){
 document.querySelector("button").addEventListener("click", function(){
                   $ajaxUtils.sendGetRequest("/data/name.txt",function(request){
                   	var name=request.response.Text;
                   	document.querySelector("content").innerHTML="<h2>Hello " +name + "!</h2>";
                   });
 });
});