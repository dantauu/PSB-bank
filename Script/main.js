

/* HEADER-2 */

const hideButton = document.querySelector('.hide-button_inner')
const headerContainer = document.querySelector('.container')
const buttonHeaderNext = document.querySelector('.header-two_inner_style')
const haederActive = document.querySelector('header')
hideButton.addEventListener('click', () => {
    if (headerContainer) {
        buttonHeaderNext.classList.toggle('active-2')
        headerContainer.classList.toggle('active')
        haederActive.classList.add('header-active')
    } 
  }
)

buttonHeaderNext.addEventListener('click', () => {
    if (headerContainer) {
        haederActive.classList.toggle('header-active')
        buttonHeaderNext.classList.toggle('active-3')
        headerContainer.classList.toggle('active-4')
        buttonHeaderNext.classList.remove('active-2')
        headerContainer.classList.remove('active')
        buttonHeaderNext.classList.remove('active-3')
        headerContainer.classList.remove('active-4')
        haederActive.classList.remove('header-active')
    }
})



/* СЛАЙДЕР */

const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper img");
const firstCardWidth = document.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft +=
					btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
 }

const dragStop = () => {
    isDragging = false;
	carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);




/* HIDE-BUTTON */

const hideBtn = document.querySelector('.block-list_item_border')
const showElement = document.querySelector('.block-list_main-wrapper')
hideBtn.addEventListener('click', () => {
    showElement.classList.toggle('show-button')
})

const hideBtnCredit = document.querySelector('.credit')
const showBtnElement = document.querySelector('.block-list_main-wrapper-2')
hideBtnCredit.addEventListener('click', () => {
    showBtnElement.classList.toggle('show-button')
})

const hideBtnProduct = document.querySelector('.product-in')
const showBtnProduct = document.querySelector('.block-list_main-wrapper-3')
hideBtnProduct.addEventListener('click', () => {
	showBtnProduct.classList.toggle('show-button')
})



/* LOCAL-STORAGE-CHECK */

let checkData = {}
const formCheck = document.querySelector('.formCheck')
const LS = localStorage


formCheck.addEventListener('input', function(event){
    checkData[event.target.name] = event.target.value
    LS.setItem('checkData', JSON.stringify(checkData))
})

//Проверка данных в LS

if (LS.getItem('checkData')) {
    checkData = JSON.parse(LS.getItem('checkData'))
    console.log(checkData)
    for (let key in checkData) {
        formCheck.elements[key].value = checkData[key]
    }
}




/* LOCAL-STORAGE-STORY-1 */

let storyData = {}
const formStory = document.querySelector('.formStory')
const LsStory = localStorage

formStory.addEventListener('input', function (event) {
    console.log(formStory)
	storyData[event.target.name] = event.target.value
	LsStory.setItem('storyData', JSON.stringify(storyData))
})

//Проверка данных в LS

if (LsStory.getItem('storyData')) {
	storyData = JSON.parse(LsStory.getItem('storyData'))
	console.log(storyData)
	for (let key in storyData) {
		formStory.elements[key].value = storyData[key]
	}
}


/* LOCAL-STORAGE-STORY-2 */

let storyData_2 = {}
const formStory_2 = document.querySelector('.formStory-2')
const LS_2 = localStorage

formStory_2.addEventListener('input', function (event) {
    console.log(formStory_2)
	storyData_2[event.target.name] = event.target.value
	LS_2.setItem('storyData_2', JSON.stringify(storyData_2))
})

//Проверка данных в LS

if (LS_2.getItem('storyData_2')) {
	storyData_2 = JSON.parse(LS_2.getItem('storyData_2'))
	console.log(storyData_2)
	for (let key in storyData_2) {
		formStory_2.elements[key].value = storyData_2[key]
	}
}

/* LOCAL-STORAGE-STORY-3 */

let storyData_3 = {}
const formStory_3 = document.querySelector('.formStory-3')
const LS_3 = localStorage

formStory_3.addEventListener('input', function (event) {
    console.log(formStory_3)
	storyData_3[event.target.name] = event.target.value
	LS_3.setItem('storyData_3', JSON.stringify(storyData_3))
})

//Проверка данных в LS

if (LS_3.getItem('storyData_3')) {
	storyData_3 = JSON.parse(LS_3.getItem('storyData_3'))
	console.log(storyData_3)
	for (let key in storyData_3) {
		formStory_3.elements[key].value = storyData_3[key]
	}
}

/* LOCAL-STORAGE-STORY-4 */

let storyData_4 = {}
const formStory_4 = document.querySelector('.formStory-4')
const LS_4= localStorage

formStory_4.addEventListener('input', function (event) {
    console.log(formStory_4)
	storyData_4[event.target.name] = event.target.value
	LS_4.setItem('storyData_4', JSON.stringify(storyData_4))
})

//Проверка данных в LS

if (LS_4.getItem('storyData_4')) {
	storyData_4 = JSON.parse(LS_4.getItem('storyData_4'))
	console.log(storyData_4)
	for (let key in storyData_4) {
		formStory_4.elements[key].value = storyData_4[key]
	}
}


//SEARCH-CLICK-HOVER

const searchAllElementBtn = document.querySelectorAll('.search-all_inner')
searchAllElementBtn.forEach(item => {
    item.addEventListener('click', () => {

        searchAllElementBtn.forEach(searchAllElementBtn => {
		searchAllElementBtn.classList.remove('search-hover')})

        item.classList.add('search-hover')
    })
})


/* HIDE-SETTINGS */

const settingsBtn = document.querySelector('.settings')
const settingsMenu = document.querySelector('.settings-wrapper')
const krestBtn = document.querySelector('.settings-krest')

settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('settings-wrapper_show')
})

krestBtn.addEventListener('click', () => {
    settingsMenu.classList.remove('settings-wrapper_show')
})


/* HIDE-DOCUMENT */

const documentBtn_1 = document.querySelector('.history-wrapper')
const documentBtn_2 = document.querySelector('.history_2')  
const documentMenu = document.querySelector('.document-wrapper')
const documentKrestBtn = document.querySelector('.wrapper-krest')

documentBtn_1.addEventListener('click', () => {
    documentMenu.classList.add('document-wrapper_show')
})

documentBtn_2.addEventListener('click', () => {
   documentMenu.classList.add('document-wrapper_show')
})

documentKrestBtn.addEventListener('click', () => {
    documentMenu.classList.toggle('document-wrapper_show')
})
