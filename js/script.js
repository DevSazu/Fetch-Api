function onLoad(){
    const url="https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        showPost(data);
    });
}


function showPost(posts){
posts.forEach(post => {
    
});
}