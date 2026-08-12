// function onLoad(){
//     const url="https://jsonplaceholder.typicode.com/users";
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         showPost(data);
//     });
// }


// function showPost(posts){
//     const getData=document.getElementById('showdata');
//     getData.innerHTML="";
// posts.forEach(post => {
//     const li= document.createElement('li');
//     li.innerText=post.name;
//     getData.appendChild(li);
//     console.log(li)
// });
// }

// const onLoad=()=>{
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         displayData(data)
//     });
// }

// const displayData=(posts)=>{
//  const getId= document.getElementById('showdata');
//  getId.innerHTML="";
 
//  posts.forEach(post => {
//     const li=document.createElement('li')
//     li.innerHTML=post.title;
//     getId.appendChild(li)
//  });
// } 

// design Ui
const onLoad=()=>{
    const url= "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

    displayData(data);
    })
}

const displayData=(posts)=>{
    const getId=document.getElementById('showdata');
    getId.innerHTML="";
    
   posts.forEach(post=>{
     const div=document.createElement('div');
    div.className="card";
     div.innerHTML=` 
                <p>User ID: ${post.userId} </p>
                <p>ID:${post.id} </p>

                <h2>${post.title}</h2>

                <p>${post.body} </p>

                `
            getId.appendChild(div);
            console.log(div)
           
   })
}