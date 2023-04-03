// sidebar

const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification =document.querySelector('#message-notifications')
const messages =document.querySelector(' .messages')
const message =document.querySelector(' .message')

//remove active cclass from all

const changeActiveItem =()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
     item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-pop').Style.display ='none';
           
        }
        else{
            document.querySelector('.notification-pop').Style.display ='block';
        }
     })
})
//////////========================message=========================//

messagesNotification.addEventListener('click' ,() =>{
    messages.style.boxshadow =' 0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxshadow ='none';
    } , 2000);
})








// theme customization//============================================================

const theme = document.querySelector('#theme');
const themeModal = document.querySelector(' .customize-theme');

const openThemeModal =() =>{
    themeModal.style.display ='grid';
}
theme.addEventListener('click', openThemeModal)