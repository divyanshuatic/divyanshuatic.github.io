function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
window.location = "http://127.0.0.1:5501/shop.html/kgnonly.html";
alert("@divyanshu is saying that login succesfull,welcome bro");
return false;

}
else 
{
    alert("sorry your login is failed now go otherwise i will kick you");
}
}