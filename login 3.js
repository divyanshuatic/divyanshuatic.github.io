function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="divyanshu"&& password=="dishu")
{
    window.location = "http://127.0.0.1:5501/shop.html/kgnonly.html";
    return false;  
}
else if(username=="aman"&& password=="dishu")
{
    window.location = "http://127.0.0.1:5501/shop.html/kgnonly.html";
}
else
{
    alert("sorry your login is failed now go otherwise i will kick you");
    window.location = "https://wallpapercave.com/wp/wp4893768.jpg";
    return false;  
    
}
}