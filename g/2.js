 
  
        let url="https://api .giphy.com/v1/gifs/search?api_key=VoCNEuX9m8lYf0FViUZLh8cNsCEBAal7&q=funny";
       
        window.addEventListener('load',()=>{   
            console.log('main')

            let xhr1= new XMLHttpRequest();

            xhr1.open("GET",url);

            xhr1.onload=()=>{
            let json= JSON.parse(xhr1.responseText);
            console.log(json);
            dom(json);
            }
            xhr1.send()

        });
        
        let domoperation=(json)=>{
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

