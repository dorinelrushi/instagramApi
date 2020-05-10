var demo = document.getElementById('demo');
var img = document.getElementById("ph");
var followers = document.getElementById("demo1");
var following = document.getElementById("demo2");
var quotes = document.getElementById("quotes");
fetch('https://api.instagram.com/v1/users/self/?access_token=access_tokes')
.then(res => res.json())
.then(data => {
    var name = document.getElementById("name")
    var fullname = document.getElementById("fullname")
    var fn = data.data.full_name;
    var user = data.data.username;
    var  photo = data.data.profile_picture;
    var {media, followed_by ,follows } = data.data.counts;
    img.src = photo;
   demo.innerHTML  = media + " post";
   followers.innerHTML = followed_by + ' followers';
   following.innerHTML = follows + ' following';
   name.innerHTML = user;
   fullname.innerHTML = fn;
   console.log(data);
})