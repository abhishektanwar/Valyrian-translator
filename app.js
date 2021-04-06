var inputArea = document.querySelector("#input-area");
var outputArea = document.querySelector("#output-area");
var btnTranslate = document.querySelector("#btn-translate");

var url = "https://api.funtranslations.com/translate/valyrian.json?text="

function generateURL(text){
	return url + text;
}

function errorHandler(error){
	console.log("error occoured", error);
	alert("please try again later");
}

btnTranslate.addEventListener("click",function(){
	fetch(generateURL(inputArea.value))
	.then(response => response.json())
	.then(json => outputArea.innerText = json.contents.translated)
	.catch(errorHandler);
})