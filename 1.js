let submit=()=>{
    let textinput=document.querySelector('#textinput').value;

    let url="https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q="+textinput ||   https://api.giphy.com/v1/gifs/search?api_key= VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q=funny;
    document.querySelector('#textinput').value=' ';
    console.log(url)
    window.addEventListener('load',()=>{
        let xhr= new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload=()=>{
        let json= JSON.parse(xhr.responseText);
        console.log(json);
        dom(json)
        }
        xhr.send()
    });
    
    let dom=(json)=>{
    let len=json.data.length;
    console.log(len);
    for(i=0;i<len;i++){
        let u=json.data[i];
        console.log(u.images.original.url);
        let m=u.images.original.url;
       let parent=document.querySelector('#p');
       let newel=parent.children[0].cloneNode(true);
      // newel.style.images.src="https://media3.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif?cid=7281af05b5e0vss3jmedr8uja6frhrng7jv2qefj8ersm83q&rid=giphy.gif"
      console.log(newel.style)
      newel.style.visibility='visible' 
    // newel.style.backgroundImage= "url('https://media3.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif?cid=7281af05b5e0vss3jmedr8uja6frhrng7jv2qefj8ersm83q&rid=giphy.gif')";
    newel.children[0].src =m;
    newel.children[0].style.height='200px';
    newel.children[0].style.width='325px';
    parent.insertBefore(newel,parent.firstChild);
    
       
     }
    };

};



let sticker1=(name)=>{
    let textinput=name;
if(name==='sticker' || name==='happ' || name==='behappy' || name=== 'happiness' || name==='joy' || name==='fun' || name==='wishes' || name==='birthdaywishes' || name==='smile' || name==='trending'
   || name==='viral' || name==='news' || name ==='dailynews' || name==='roleplay' ||name==='forums' || name==='sadness'){
    document.querySelector('#name').style.visibility='visible';
    document.querySelector('#name').innerHTML=name.toUpperCase();
    let url="https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q="+textinput;
    console.log(url)
    window.addEventListener('load',()=>{
        let xhr= new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload=()=>{
        let json= JSON.parse(xhr.responseText);
        console.log(json);
        dom(json)
        }
        xhr.send()
    });
    
    let dom=(json)=>{
    let len=json.data.length;
    console.log(len);
    for(i=0;i<len;i++){
        let u=json.data[i];
        console.log(u.images.original.url);
        let m=u.images.original.url;
       let parent=document.querySelector('#p');
       let newel=parent.children[0].cloneNode(true);
      // newel.style.images.src="https://media3.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif?cid=7281af05b5e0vss3jmedr8uja6frhrng7jv2qefj8ersm83q&rid=giphy.gif"
      console.log(newel.style)
      newel.style.visibility='visible' 
    // newel.style.backgroundImage= "url('https://media3.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif?cid=7281af05b5e0vss3jmedr8uja6frhrng7jv2qefj8ersm83q&rid=giphy.gif')";
    newel.children[0].src =m;
    newel.children[0].style.height='200px';
    newel.children[0].style.width='325px';
    parent.insertBefore(newel,parent.firstChild);
       
     }
    };
}

}



