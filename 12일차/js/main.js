const users = [
    {
        id: 0,
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTardcKgEVE-N-mq7NhQhs3HPWdHlMQNnW3Jc75QRG--z8ilTk2P699__-2xCZKSev0wlE&usqp=CAU",
        username: "user 1",
        imgUrl: "https://st2.depositphotos.com/3926191/10812/i/450/depositphotos_108127398-stock-photo-colorful-bokeh-background.jpg"
    },
    {
        id: 1,
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&s",
        username: "user 2",
        imgUrl: "https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg"
    },
    {
        id: 2,
        avatarUrl: "https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg",
        username: "user 3",
        imgUrl: "https://yumove.co.uk/cdn/shop/articles/Dog_ageing_puppy.jpg?v=1581509635"
    },
];


const wrapEl = document.querySelector('.wrap');
const avatarAll = document.querySelectorAll('.avatar');
const usernameAll = document.querySelectorAll('.username');
const bgAll = document.querySelectorAll('.bg');
const menuEl = document.querySelector('.menu');
const menuWrapEl = document.querySelector('.menu_wrap');
let isClicked = true;

for(let i = 0; i < users.length; i++){
    avatarAll[i].innerHTML = `<img src="${users[i].avatarUrl}">`;
    usernameAll[i].innerText = users[i].username;
    bgAll[i].innerHTML = `<img src="${users[i].imgUrl}">`;
}

const heartHandler = (e) => {
    if(e.target.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = '<i class="fa-solid fa-heart full_heart"></i>'
    }else if(e.target.classList.contains("full_heart")){
        e.target.parentNode.innerHTML = '<i class="fa-regular fa-heart"></i>'
    }
}

const menuHandler = () => {
    if(isClicked){
        menuWrapEl.classList.add('menu_active');
        isClicked = false;
    }else if(!isClicked){
        menuWrapEl.classList.remove('menu_active');
        isClicked = true;
    }
}

menuEl.addEventListener('click', menuHandler);
wrapEl.addEventListener('click', heartHandler);