// local storage  ---------------------------

const storageInput = document.querySelector('.storageinput');
const storageText = document.querySelector('.storagetext');
const storedInput = localStorage.getItem('textinput');
const storageTextInput = document.querySelector('.storagetextinput');
const saveStorage = document.querySelector('.savestorage');
const getStorage = document.querySelector('.getstorage');
const removeStorage = document.querySelector('.removestorage');
const storagedData = document.querySelector('.storageddata');
const storagedTimestamp = document.querySelector('.storagedtimestamp');
const dataFound = document.querySelector('.datafound');

// const saveToLocalStorage = () => {
//     localStorage.setItem('textinput', storageText.textContent)

// }
storageInput.addEventListener('input', letter =>{
    storageText.textContent = letter.target.value;
    
}) 

// if local storage already exixt
if(localStorage.getItem('storage')){

    console.log('on jo')
    document.querySelector('.resultfound').classList.remove('hide')
    document.querySelector('.datafound').innerHTML = 'Current Local storage data';

    let localData = JSON.parse(localStorage.getItem('storage'));
    storagedData.innerHTML = localData.data;

    let toTime = new Date(parseInt(localData.timestamp));
    storagedTimestamp.innerHTML = toTime.toLocaleString();


}

// save data to local storage
saveStorage.addEventListener('click', () =>{
    
    let storage = {
        data: storageText.textContent,
        timestamp: new Date().getTime()
    
    };
    localStorage.setItem('storage', JSON.stringify(storage));
    document.querySelector('.storageinput').value = '';
    

})

// get data from local storage

getStorage.addEventListener('click', () =>{

    if(!localStorage.getItem('storage')){

        console.log('ei ole dataa')
        document.querySelector('.resultfound').classList.remove('hide')
        document.querySelector('.datafound').innerHTML = 'No data on Local storage';
    }

    if(localStorage.getItem('storage')){

        console.log('dataa on')
        document.querySelector('.resultfound').classList.add('hide')
        document.querySelector('.datafound').innerHTML = '';

        let localData = JSON.parse(localStorage.getItem('storage'));
        storagedData.innerHTML = localData.data;
        let toTime = new Date(parseInt(localData.timestamp));
        storagedTimestamp.innerHTML = toTime.toLocaleString();
        
    }
})

// remove data from local storage

removeStorage.addEventListener('click', () =>{

        localStorage.removeItem("storage");

        document.querySelector('.resultfound').classList.add('hide')
        document.querySelector('.datafound').innerHTML = '';
        document.querySelector('.storageddata').innerHTML = '';
        document.querySelector('.storagedtimestamp').innerHTML = '';

    

})