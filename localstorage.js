// local storage  ---------------------------

const storageInput = document.querySelector('.storageinput');
const storageText = document.querySelector('.storagetext');
// const buttonStorage = document.querySelector('.buttonstorage');
const storedInput = localStorage.getItem('textinput');
const storageTextInput = document.querySelector('.storagetextinput');

const saveStorage = document.querySelector('.savestorage');
const getStorage = document.querySelector('.getstorage');
const removeStorage = document.querySelector('.removestorage');


const storagedData = document.querySelector('.storageddata');
const storagedTimestamp = document.querySelector('.storagedtimestamp');
const dataFound = document.querySelector('.datafound');



// if(storageInput){
//     storageTextInput.textContent = storedInput.toUpperCase();
// }



const saveToLocalStorage = () => {
    localStorage.setItem('textinput', storageText.textContent)

}

// buttonStorage.addEventListener('click', saveToLocalStorage)

// let storageInputs = document.querySelector('.storageinput'),


storageInput.addEventListener('input', letter =>{
    storageText.textContent = letter.target.value;
    
}) 

// localStorage.getItem('siteData')

if(localStorage.getItem('storage')){

    console.log('on jo')
    document.querySelector('.resultfound').classList.remove('hide')
    document.querySelector('.datafound').innerHTML = 'Local storage data already exist';

    let localData = JSON.parse(localStorage.getItem('storage'));
    storagedData.innerHTML = localData.data;

    let toTime = new Date(parseInt(localData.timestamp));
    storagedTimestamp.innerHTML = toTime.toLocaleString();


}

saveStorage.addEventListener('click', () =>{
    
    let storage = {
        data: storageText.textContent,
        timestamp: new Date().getTime()
    
    };
    // ,localData2;

    localStorage.setItem('storage', JSON.stringify(storage));

    // textInput.innerHTML = '';
    document.querySelector('.storageinput').value = '';
    // localData2 = JSON.parse(localStorage.getItem('data1'));
    // storagedData.innerHTML = localData.data1;

})



// let localData3 = JSON.parse(localStorage.getItem('storage'));
// console.log('locla time',localData3.timestamp);

// let date = new Date(localData3.timestamp);
// let date2 = date.setDate(date.getDate() + 7);

// console.log('see', date.getDate())

// var aika = new Date(parseInt(localData3.timestamp));
// console.log('aik',aika)
// console.log('aik2', aika.toLocaleString())

// let time = new Date().getTime();
// function GFG_Fun() {
//     let date = new Date(time);

//     let date2 = new Date(localData3.timestamp);
//     console.log('lala',date)
//     console.log("Milliseconds = "+ date.toString() + "|", date2.toString() );
// }
// GFG_Fun()


getStorage.addEventListener('click', () =>{

    if(!localStorage.getItem('storage')){

        console.log('ei ole dataa')
    }

    let localData = JSON.parse(localStorage.getItem('storage'));
    // let localData3 = JSON.parse(localStorage.getItem('storage'));
    storagedData.innerHTML = localData.data;

    let toTime = new Date(parseInt(localData.timestamp));
    // console.log('aik',aika)
    // console.log('aik2', aika.toLocaleString())

    storagedTimestamp.innerHTML = toTime.toLocaleString();

    // storagedTimestamp.innerHTML = localData2.timestamp;
    
    
    
    
    
    
    // console.log(localData2.timestamp)

    

//     var object = JSON.parse(localStorage.getItem("key")),
//   dateString = object.timestamp,
//   now = new Date().getTime().toString();

// compareTime(dateString, now); //to implement


})

removeStorage.addEventListener('click', () =>{

    localStorage.removeItem("storage");

    document.querySelector('.resultfound').classList.add('hide')
    document.querySelector('.datafound').innerHTML = '';
    document.querySelector('.storageddata').innerHTML = '';
    document.querySelector('.storagedtimestamp').innerHTML = '';

    

})