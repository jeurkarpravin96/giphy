
let submit=()=>{
    let input=document.querySelector('#textinput').value;
    let textinput=input.toLowerCase();
    if(textinput===''){
        document.querySelector('.error').innerHTML='Please enter GIFs or Stickers'
    }else{
        let url="https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q="+textinput ||  "https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q=funny"
         document.querySelector('#name').style.visibility='visible';
         document.querySelector('#name').innerHTML=textinput.toUpperCase();
            let xhr= new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.onload=()=>{
            let json= JSON.parse(xhr.responseText);
            console.log(json);
            domoperation(json);
            }
            xhr.send();
            document.querySelector('#textinput').value=' ';
    }
}
 

let sticker1=(textinput)=>{
    let name=textinput.toLowerCase();
if(name==='sticker' ||  name==='trending' || name==='behappy' || name=== 'happiness' || name==='joy' || name==='fun' || name==='wishes' || name==='birthdaywishes' || name==='smile' ||name==='happ' 
   || name==='viral' || name==='news' || name ==='dailynews' || name==='roleplay' ||name==='forums' || name==='sadness' || name==='emoji'||name==='text'){
    document.querySelector('#name').style.visibility='visible';
    document.querySelector('#name').innerHTML=name.toUpperCase();
    let url="https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q="+textinput;
    console.log(url)

        let xhr= new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload=()=>{
        let json= JSON.parse(xhr.responseText);
        console.log(json);
        domoperation(json);
        }
        xhr.send();
    }

}




    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q=funny");
    xhr.onload=()=>{
        let json=JSON.parse(xhr.responseText);
        console.log(json);
        domoperation(json);
    }
    xhr.send();

  let domoperation=(json)=>{
        let len=json.data.length;
        console.log(len);
        for(i=0;i<len;i++){
        let u=json.data[i];
        console.log(u.images.original.url);
        let m=u.images.original.url;
        let parent=document.querySelector('#p');
        let newel=parent.children[0].cloneNode(true);
    
      console.log(newel.style)
      newel.style.visibility='visible'; 
      newel.children[0].src =m;
      newel.children[0].style.height='200px';
      newel.children[0].style.width='280px';
      parent.insertBefore(newel,parent.firstChild);
    
       
     }
    };