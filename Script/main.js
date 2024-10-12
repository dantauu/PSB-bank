

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


/* LOCAL-STORAGE-CHECK */

let storyDataCheck = {}
const formCheckBlock = document.querySelector('.block-list_form')
const LS_check = localStorage

formCheckBlock.addEventListener('input', function (event) {
	console.log(storyDataCheck)
	storyDataCheck[event.target.name] = event.target.value
	LS_check.setItem('storyDataCheck', JSON.stringify(storyDataCheck))
})

//Проверка данных в LS

if (LS_check.getItem('storyDataCheck')) {
	storyDataCheck = JSON.parse(LS_check.getItem('storyDataCheck'))
	console.log(storyDataCheck)
	for (let key in storyDataCheck) {
		formCheckBlock.elements[key].value = storyDataCheck[key]
	}
}

/* LOCAL-STORAGE-CARD */

let storyDataCard = {}
const formCheckCard = document.querySelector('.form-psb_card')
const LS_card = localStorage

formCheckCard.addEventListener('input', function (event) {
	console.log(storyDataCard)
	storyDataCard[event.target.name] = event.target.value
	LS_card.setItem('storyDataCard', JSON.stringify(storyDataCard))
})

//Проверка данных в LS

if (LS_card.getItem('storyDataCard')) {
	storyDataCard = JSON.parse(LS_card.getItem('storyDataCard'))
	console.log(storyDataCard)
	for (let key in storyDataCard) {
		formCheckCard.elements[key].value = storyDataCard[key]
	}
}

/* LOCAL-STORAGE-CARD-DOTS */

let storyDataDots = {}
const formCheckDots = document.querySelector('.form-psb_number')
const LS_dots = localStorage

formCheckDots.addEventListener('input', function (event) {
	console.log(storyDataDots)
	storyDataDots[event.target.name] = event.target.value
	LS_dots.setItem('storyDataDots', JSON.stringify(storyDataDots))
})

//Проверка данных в LS

if (LS_dots.getItem('storyDataDots')) {
	storyDataDots = JSON.parse(LS_dots.getItem('storyDataDots'))
	console.log(storyDataDots)
	for (let key in storyDataDots) {
		formCheckDots.elements[key].value = storyDataDots[key]
	}
}

/* LOCAL-STORAGE-CARD-DOTS-SUM */

let storyDataSum = {}
const formCheckSum = document.querySelector('.form-psb_sum')
const LS_sum = localStorage

formCheckSum.addEventListener('input', function (event) {
	console.log(storyDataSum)
	storyDataSum[event.target.name] = event.target.value
	LS_sum.setItem('storyDataSum', JSON.stringify(storyDataSum))
})

//Проверка данных в LS

if (LS_sum.getItem('storyDataSum')) {
	storyDataSum = JSON.parse(LS_sum.getItem('storyDataSum'))
	console.log(storyDataSum)
	for (let key in storyDataSum) {
		formCheckSum.elements[key].value = storyDataSum[key]
	}
}

/* LOCAL-STORAGE-HISTORY */

let storyDataHistory = {}
const formCheckHis = document.querySelector('.history-form_1')
const LS_his = localStorage

formCheckHis.addEventListener('input', function (event) {
	console.log(storyDataHistory)
	storyDataHistory[event.target.name] = event.target.value
	LS_his.setItem('storyDataHistory', JSON.stringify(storyDataHistory))
})

//Проверка данных в LS

if (LS_his.getItem('storyDataHistory')) {
	storyDataHistory = JSON.parse(LS_his.getItem('storyDataHistory'))
	console.log(storyDataHistory)
	for (let key in storyDataHistory) {
		formCheckHis.elements[key].value = storyDataHistory[key]
	}
}

/* LOCAL-STORAGE-HISTORY_2 */

let storyDataHistory_2 = {}
const formCheckHis_2 = document.querySelector('.history-form_2')
const LS_his_2 = localStorage

formCheckHis_2.addEventListener('input', function (event) {
	console.log(storyDataHistory_2)
	storyDataHistory_2[event.target.name] = event.target.value
	LS_his_2.setItem('storyDataHistory_2', JSON.stringify(storyDataHistory_2))
})

//Проверка данных в LS

if (LS_his_2.getItem('storyDataHistory_2')) {
	storyDataHistory_2 = JSON.parse(LS_his_2.getItem('storyDataHistory_2'))
	console.log(storyDataHistory_2)
	for (let key in storyDataHistory_2) {
		formCheckHis_2.elements[key].value = storyDataHistory_2[key]
	}
}

/* LOCAL-STORAGE-HISTORY_3 */

let storyDataHistory_3 = {}
const formCheckHis_3 = document.querySelector('.history-form_3')
const LS_his_3 = localStorage

formCheckHis_3.addEventListener('input', function (event) {
	console.log(storyDataHistory_3)
	storyDataHistory_3[event.target.name] = event.target.value
	LS_his_3.setItem('storyDataHistory_3', JSON.stringify(storyDataHistory_3))
})

//Проверка данных в LS

if (LS_his_3.getItem('storyDataHistory_3')) {
	storyDataHistory_3 = JSON.parse(LS_his_3.getItem('storyDataHistory_3'))
	console.log(storyDataHistory_3)
	for (let key in storyDataHistory_3) {
		formCheckHis_3.elements[key].value = storyDataHistory_3[key]
	}
}

/* LOCAL-STORAGE-HISTORY_4 */

let storyDataHistory_4 = {}
const formCheckHis_4 = document.querySelector('.history-sum_form')
const LS_his_4 = localStorage

formCheckHis_4.addEventListener('input', function (event) {
	console.log(storyDataHistory_4)
	storyDataHistory_4[event.target.name] = event.target.value
	LS_his_4.setItem('storyDataHistory_4', JSON.stringify(storyDataHistory_4))
})

//Проверка данных в LS

if (LS_his_4.getItem('storyDataHistory_4')) {
	storyDataHistory_4 = JSON.parse(LS_his_4.getItem('storyDataHistory_4'))
	console.log(storyDataHistory_4)
	for (let key in storyDataHistory_4) {
		formCheckHis_4.elements[key].value = storyDataHistory_4[key]
	}
}

/* LOCAL-STORAGE-HISTORY_5 */

let storyDataHistory_5 = {}
const formCheckHis_5 = document.querySelector('.history-form_5')
const LS_his_5 = localStorage

formCheckHis_5.addEventListener('input', function (event) {
	console.log(storyDataHistory_5)
	storyDataHistory_5[event.target.name] = event.target.value
	LS_his_5.setItem('storyDataHistory_5', JSON.stringify(storyDataHistory_5))
})

//Проверка данных в LS

if (LS_his_5.getItem('storyDataHistory_5')) {
	storyDataHistory_5 = JSON.parse(LS_his_5.getItem('storyDataHistory_5'))
	console.log(storyDataHistory_5)
	for (let key in storyDataHistory_5) {
		formCheckHis_5.elements[key].value = storyDataHistory_5[key]
	}
}

/* LOCAL-STORAGE-HISTORY_6 */

let storyDataHistory_6 = {}
const formCheckHis_6 = document.querySelector('.history-form_6')
const LS_his_6 = localStorage

formCheckHis_6.addEventListener('input', function (event) {
	console.log(storyDataHistory_6)
	storyDataHistory_6[event.target.name] = event.target.value
	LS_his_6.setItem('storyDataHistory_6', JSON.stringify(storyDataHistory_6))
})

//Проверка данных в LS

if (LS_his_6.getItem('storyDataHistory_6')) {
	storyDataHistory_6 = JSON.parse(LS_his_6.getItem('storyDataHistory_6'))
	console.log(storyDataHistory_6)
	for (let key in storyDataHistory_6) {
		formCheckHis_6.elements[key].value = storyDataHistory_6[key]
	}
}

/* LOCAL-STORAGE-HISTORY_7 */

let storyDataHistory_7 = {}
const formCheckHis_7 = document.querySelector('.history-form_7')
const LS_his_7 = localStorage

formCheckHis_7.addEventListener('input', function (event) {
	console.log(storyDataHistory_7)
	storyDataHistory_7[event.target.name] = event.target.value
	LS_his_7.setItem('storyDataHistory_7', JSON.stringify(storyDataHistory_7))
})

//Проверка данных в LS

if (LS_his_7.getItem('storyDataHistory_7')) {
	storyDataHistory_7 = JSON.parse(LS_his_7.getItem('storyDataHistory_7'))
	console.log(storyDataHistory_7)
	for (let key in storyDataHistory_7) {
		formCheckHis_7.elements[key].value = storyDataHistory_7[key]
	}
}

/* LOCAL-STORAGE-HISTORY_8 */

let storyDataHistory_8 = {}
const formCheckHis_8 = document.querySelector('.history-form_8')
const LS_his_8 = localStorage

formCheckHis_8.addEventListener('input', function (event) {
	console.log(storyDataHistory_8)
	storyDataHistory_8[event.target.name] = event.target.value
	LS_his_8.setItem('storyDataHistory_8', JSON.stringify(storyDataHistory_8))
})

//Проверка данных в LS

if (LS_his_8.getItem('storyDataHistory_8')) {
	storyDataHistory_8 = JSON.parse(LS_his_8.getItem('storyDataHistory_8'))
	console.log(storyDataHistory_8)
	for (let key in storyDataHistory_8) {
		formCheckHis_8.elements[key].value = storyDataHistory_8[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT */

let storyDataDocument = {}
const formDocument = document.querySelector('.document-form')
const LS_document = localStorage

formDocument.addEventListener('input', function (event) {
	console.log(storyDataDocument)
	storyDataDocument[event.target.name] = event.target.value
	LS_document.setItem('storyDataDocument', JSON.stringify(storyDataDocument))
})

//Проверка данных в LS

if (LS_document.getItem('storyDataDocument')) {
	storyDataDocument = JSON.parse(LS_document.getItem('storyDataDocument'))
	console.log(storyDataDocument)
	for (let key in storyDataDocument) {
		formDocument.elements[key].value = storyDataDocument[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_2 */

let storyDataDocument_2 = {}
const formDocument_2 = document.querySelector('.document-form_description')
const LS_document_2 = localStorage

formDocument_2.addEventListener('input', function (event) {
	console.log(storyDataDocument_2)
	storyDataDocument_2[event.target.name] = event.target.value
	LS_document_2.setItem('storyDataDocument_2', JSON.stringify(storyDataDocument_2))
})

//Проверка данных в LS

if (LS_document_2.getItem('storyDataDocument_2')) {
	storyDataDocument_2 = JSON.parse(LS_document_2.getItem('storyDataDocument_2'))
	console.log(storyDataDocument_2)
	for (let key in storyDataDocument_2) {
		formDocument_2.elements[key].value = storyDataDocument_2[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_3 */

let storyDataDocument_3 = {}
const formDocument_3 = document.querySelector('.form-money_in')
const LS_document_3 = localStorage

formDocument_3.addEventListener('input', function (event) {
	console.log(storyDataDocument_3)
	storyDataDocument_3[event.target.name] = event.target.value
	LS_document_3.setItem('storyDataDocument_3', JSON.stringify(storyDataDocument_3))
})

//Проверка данных в LS

if (LS_document_3.getItem('storyDataDocument_3')) {
	storyDataDocument_3 = JSON.parse(LS_document_3.getItem('storyDataDocument_3'))
	console.log(storyDataDocument_3)
	for (let key in storyDataDocument_3) {
		formDocument_3.elements[key].value = storyDataDocument_3[key]
	}
}


/* LOCAL-STORAGE-DOCUMENT_4 */

let storyDataDocument_4 = {}
const formDocument_4 = document.querySelector('.form-money_pay')
const LS_document_4 = localStorage

formDocument_4.addEventListener('input', function (event) {
	console.log(storyDataDocument_4)
	storyDataDocument_4[event.target.name] = event.target.value
	LS_document_4.setItem('storyDataDocument_4', JSON.stringify(storyDataDocument_4))
})

//Проверка данных в LS

if (LS_document_4.getItem('storyDataDocument_4')) {
	storyDataDocument_4 = JSON.parse(LS_document_4.getItem('storyDataDocument_4'))
	for (let key in storyDataDocument_4) {
		formDocument_4.elements[key].value = storyDataDocument_4[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_5 */

let storyDataDocument_5 = {}
const formDocument_5 = document.querySelector('.form-money_part')
const LS_document_5 = localStorage

formDocument_5.addEventListener('input', function (event) {
	storyDataDocument_5[event.target.name] = event.target.value
	LS_document_5.setItem('storyDataDocument_5', JSON.stringify(storyDataDocument_5))
})

//Проверка данных в LS

if (LS_document_5.getItem('storyDataDocument_5')) {
	storyDataDocument_5 = JSON.parse(LS_document_5.getItem('storyDataDocument_5'))
	for (let key in storyDataDocument_5) {
		formDocument_5.elements[key].value = storyDataDocument_5[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_6 */

let storyDataDocument_6 = {}
const formDocument_6 = document.querySelector('.form-details_1')
const LS_document_6 = localStorage

formDocument_6.addEventListener('input', function (event) {
	storyDataDocument_6[event.target.name] = event.target.value
	LS_document_6.setItem('storyDataDocument_6', JSON.stringify(storyDataDocument_6))
})

//Проверка данных в LS

if (LS_document_6.getItem('storyDataDocument_6')) {
	storyDataDocument_6 = JSON.parse(LS_document_6.getItem('storyDataDocument_6'))
	for (let key in storyDataDocument_6) {
		formDocument_6.elements[key].value = storyDataDocument_6[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_7 */

let storyDataDocument_7 = {}
const formDocument_7 = document.querySelector('.form-details_2')
const LS_document_7 = localStorage

formDocument_7.addEventListener('input', function (event) {
	storyDataDocument_7[event.target.name] = event.target.value
	LS_document_7.setItem('storyDataDocument_7', JSON.stringify(storyDataDocument_7))
})

//Проверка данных в LS

if (LS_document_7.getItem('storyDataDocument_7')) {
	storyDataDocument_7 = JSON.parse(LS_document_7.getItem('storyDataDocument_7'))
	for (let key in storyDataDocument_7) {
		formDocument_7.elements[key].value = storyDataDocument_7[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_8 */

let storyDataDocument_8 = {}
const formDocument_8 = document.querySelector('.form-details_3')
const LS_document_8 = localStorage

formDocument_8.addEventListener('input', function (event) {
	storyDataDocument_8[event.target.name] = event.target.value
	LS_document_8.setItem('storyDataDocument_8', JSON.stringify(storyDataDocument_8))
})

//Проверка данных в LS

if (LS_document_8.getItem('storyDataDocument_8')) {
	storyDataDocument_8 = JSON.parse(LS_document_8.getItem('storyDataDocument_8'))
	for (let key in storyDataDocument_8) {
		formDocument_8.elements[key].value = storyDataDocument_8[key]
	}
}

/* LOCAL-STORAGE-DOCUMENT_9 */

let storyDataDocument_9 = {}
const formDocument_9 = document.querySelector('.form-details_4')
const LS_document_9 = localStorage

formDocument_9.addEventListener('input', function (event) {
	storyDataDocument_9[event.target.name] = event.target.value
	LS_document_9.setItem('storyDataDocument_9', JSON.stringify(storyDataDocument_9))
})

//Проверка данных в LS

if (LS_document_9.getItem('storyDataDocument_9')) {
	storyDataDocument_9 = JSON.parse(LS_document_9.getItem('storyDataDocument_9'))
	for (let key in storyDataDocument_9) {
		formDocument_9.elements[key].value = storyDataDocument_9[key]
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

const inputElement = document.querySelectorAll('.input-history')

inputElement.forEach(i => {
i.addEventListener('click', e => {
	e.stopPropagation()
})
})
