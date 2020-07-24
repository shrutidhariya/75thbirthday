function ashna() {
    var x = document.getElementById("ashna");
	var ans = x.getElementsByTagName("input")[0].value;

	if(ans === "chaap")
	{
		x.getElementsByTagName("img")[0].src = "friends/ashna.JPG";
		x.getElementsByTagName("h3")[0].remove();
		x.getElementsByTagName("input")[0].remove();
		x.getElementsByTagName("button")[0].remove();
		x.getElementsByClassName("test_content_container")[0].style.height =  "18.1%";
		x.getElementsByClassName("test_item_info")[0].style.display =  "inline-block";
		x.getElementsByClassName('test_name')[0].innerText = "Ashna";
		x.getElementsByClassName("fa-comment")[0].style.display =  "inline-block";
		x.getElementsByClassName("fa-play-circle")[0].style.display =  "inline-block";
}
}

function brinda() {
    var x = document.getElementById("brinda");
	var ans = document.getElementById("brindaans").innerHTML;
	console.log(ans);

	if(ans === "chaap")
	{
		x.getElementsByTagName("img")[0].src = "friends/brinda.JPG";
		x.getElementsByTagName("h3")[0].remove();
		x.getElementsByTagName("input")[0].remove();
		x.getElementsByTagName("button")[0].remove();
		x.getElementsByClassName("test_content_container")[0].style.height =  "18.1%";
		x.getElementsByClassName("test_item_info")[0].style.display =  "inline-block";
		x.getElementsByClassName('test_name')[0].innerText = "Brinda";
		x.getElementsByClassName("fa-comment")[0].style.display =  "inline-block";
		x.getElementsByClassName("fa-play-circle")[0].style.display =  "inline-block";
}

}