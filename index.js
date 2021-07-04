var main = document.querySelector('.main');
setTimeout(() => {
    main.classList.remove('init');
}, 100);

var last =null;

var lis = document.querySelectorAll('.wrapper li')
var closedBtn = document.querySelectorAll('.closed');
lis.forEach((item,index)=>{
    item.onclick = ()=>{
        main.setAttribute('id','activewrapper');
        last && (last.className = '')
        item.classList.add('active')
       last = this;
    }
    closedBtn[index].onclick = (e)=>{
        e.cancelBubble = true
        main.removeAttribute('id','activewrapper');
        item.classList.remove('active')

        last = null;
    }
})
