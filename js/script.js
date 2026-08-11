function onLoad(){
    const url="https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        showPost(data);
    });
}


function showPost(posts){
    const getData=document.getElementById('showdata');
    getData.innerHTML="";
posts.forEach(post => {
    const li= document.createElement('li');
    li.innerText=post.name;
    getData.appendChild(li);
    console.log(li)
});
}