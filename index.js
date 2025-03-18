const cross_section = document.querySelector(".cross_section");
const sizeEL = document.querySelector(".size");
const color = document.querySelector(".color")
let size = sizeEL.value
const  clear_btn= document.querySelector(".btn_1");
const btn = document.querySelector(".btn");


let draw= false;
function increase(size){
    cross_section.style.setProperty('--size',size)
    for(var i=0; i< size*size; i++){
        const div = document.createElement('div')
        div.classList.add('square')
        
        div.addEventListener('mouseover', function(){
            if(!draw) return
            div.style.backgroundColor = color.value
        })

        div.addEventListener('mousedown', function(){
          
            div.style.backgroundColor = color.value
        })

        cross_section.appendChild(div);
    }
}

window.addEventListener('mousedown',function(){
    draw= true
})

window.addEventListener('mouseup',function(){
    draw= false
})
function reset(){
    cross_section.innerHTML ='';
    increase(size); 
}

// clear_btn.addEventListener('change', reset)
clear_btn.addEventListener('click',function(){
    cross_section.innerHTML = ''
    increase(size);
})

// btn.addEventListener('click',function(){
//      size= sizeEL.value
//      cross_section.innerHTML = ''
//     increase(size);
// })

btn.addEventListener('click',function(){
    size= sizeEL.value
    reset()
})

// sizeEL.addEventListener('keyup', function(){
//     size= sizeEL.value
//     reset()
// })

increase(size);