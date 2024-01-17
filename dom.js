



    //  dom node modifications ------------------------------

    let btncreatenode = document.getElementById('btn-createnode');
    let btninsertenode = document.getElementById('btn-insertnode');
    let btninsertafterenode = document.getElementById('btn-insertafternode');
    let btnreplacenode = document.getElementById('btn-replacenode');
    let btnnewlinknode = document.getElementById('btn-newlink');
    let btncreatefragment = document.getElementById('btn-fragment');

    const domcontent = document.querySelector('.domcontent');
    const target = document.querySelector('.target');
    const pText = document.createTextNode('New Node ');
    const pEl = document.createElement('p');

    // const firstP = domcontent.children[ 1 ];
    const firstP = domcontent.children[ domcontent.childElementCount - 2 ];
    // let count = 1;
    const pText2 = document.createTextNode('Node before');
    const pEl2 = document.createElement('p');

    const secondP = domcontent.children[ 1 ];
    const pText3 = document.createTextNode('Node after');
    const pEl3 = document.createElement('p');

    const pText4 = document.createTextNode('New target node');
    const pEl4 = document.createElement('p');

    // const lnk = document.getElementById('link');
    // const aText = document.createTextNode('New link node');
    // const aEl = document.createElement('a')



    const divEl = document.createElement('div');
    const docFrag = document.createDocumentFragment();
    const fpText = document.createTextNode('Fragment node 1');
    const fpEl = document.createElement('p');
    const fpText2 = document.createTextNode('Fragment node 2');
    const fpEl2 = document.createElement('p');

    // console.log('Count ', domcontent.childElementCount, 'PrevEl', domcontent.previousElementSibling , 'NextEl', domcontent.nextElementSibling, 'PrevNode', lnk.previousSibling, 'NextNode', lnk.nextSibling, 'ChildNodes link', domcontent.childNodes[3].childNodes[1]);

    // console.log('ParentNode',domcontent.parentNode, 'ParentNode ParentNode ParentNode', domcontent.parentNode.parentNode.parentNode, 'Parentel Parentel', domcontent.parentElement.parentElement)

    const linkki = domcontent.childNodes[3].childNodes[1];

    // importlink.innerHTML = linkki;

    // console.log(linkki)

    console.log('before: ' , target.outerHTML, secondP.outerHTML,' | ',domcontent.outerHTML);
    
    // create new node --------------------------------------

    btncreatenode.addEventListener('click', (ev) =>{
        
        pEl.appendChild(pText);
        domcontent.appendChild(pEl);
        console.log('after: ' , domcontent.outerHTML);
    })

    // insert before node -------------------------------------

    btninsertenode.addEventListener('click', (ev) =>{

        pEl2.setAttribute('class','inserted');
        // aEl.appendChild(aText);
        // let count = 1
        // const pText2 = document.createTextNode('Node before');
        // pText2Count = document.createTextNode('Node before ', count++);
        pEl2.appendChild(pText2);
        // pEl2.appendChild(pText2);
        const inserttarget = document.querySelector('.target');

        console.log(inserttarget.outerHTML)
        
        if(inserttarget.classList.contains('target')){
            domcontent.insertBefore(pEl2, inserttarget);
            console.log('after insert before: ' , domcontent.outerHTML);
        }
        // if(pEl2.classList.contains('inserted')){
        //     domcontent.insertBefore(pEl2, target);
        //     console.log('after insert before: ' , domcontent.outerHTML);
        // }


        // domcontent.insertBefore(pEl2, firstP);
        // console.log('after insert before: ' , domcontent.outerHTML);
    })

    // insert after node ----------------------------------------------

    btninsertafterenode.addEventListener('click', (ev) =>{

        pEl3.appendChild(pText3);
        const inserttarget = document.querySelector('.target');

        console.log(inserttarget.outerHTML)

        domcontent.insertBefore(pEl3, inserttarget.nextSibling);
        // domcontent.insertBefore(pEl3, firstP.nextSibling);
        console.log('after insert after: ' , domcontent.outerHTML);
    })

    //replace target node --------------------------------------------

    btnreplacenode.addEventListener('click', (ev) =>{

        // pEl4.setAttribute('class','target');
        pEl4.setAttribute('class','target inserted replaced');
        pEl4.appendChild(pText4);
        const replacedtarget = document.querySelector('.target');
        // domcontent.replaceChild(pEl4, firstP);
        // domcontent.replaceChild(pEl4, target);
        domcontent.replaceChild(pEl4, replacedtarget);
        console.log('replace node: ' , domcontent.outerHTML);
        // lnk.outerHTML, 
        
    })

    //new link -------------------------------------------------------

    const linkInput = document.querySelector('.linkinput');
    const textInput = document.querySelector('.textinput');
    const tempText = document.querySelector('.temptext');
    const tempLink = document.querySelector('.templink');

    textInput.addEventListener('input', letter =>{
        tempText.textContent = letter.target.value;
        
   }) 

   linkInput.addEventListener('input', letter =>{
    tempLink.textContent = letter.target.value;
    
}) 

    btnnewlinknode.addEventListener('click', (ev) =>{


      // pEl.appendChild(pText);
      // domcontent.appendChild(pEl);
    //   const linkInput = document.querySelector('.linkinput');
    //   const textInput = document.querySelector('.textinput');
    //   const tempText = document.querySelector('.temptext');

    //   const storageTextInput = document.querySelector('.storagetextinput');  

        if(tempLink.textContent === ''){
            linkInput.classList.add('linkempty')
            // storageTextInput.textContent = storedInput.toUpperCase();
        }
        if(tempText.textContent === ''){
            textInput.classList.add('textempty')
            // storageTextInput.textContent = storedInput.toUpperCase();
        }

        if(tempLink.textContent && tempText.textContent){
            
        // const lnk = document.getElementById('link');
        const link = document.querySelector('.link');
        const aText = document.createTextNode(tempText.textContent);
        const aEl = document.createElement('a')

        // console.log('before',link);
      

        // aEl.setAttribute('href','#newlink');
        aEl.setAttribute('href', tempLink.textContent);
        aEl.setAttribute('class','link');
        aEl.setAttribute('target','_blank');
        aEl.appendChild(aText);
        // pEl.setAttribute('class','plink');
        // pEl.appendChild(aEl);
        // domcontent.appendChild(aEl);
        const replacedlink = document.querySelector('.plink');
        console.log('repla', replacedlink)

            if(replacedlink){
                const pText5 = document.createTextNode('New target node');
                const pEl5 = document.createElement('p');
                pEl5.appendChild(aEl);
                // pEl.appendChild(aEl);
                pEl.appendChild(pEl5);
                domcontent.insertBefore(pEl, replacedlink);
                // domcontent.replaceChild(pEl,replacedlink);
                console.log('link on',replacedlink)
            }else {
                pEl.setAttribute('class','plink');
                pEl.appendChild(aEl);
                domcontent.appendChild(pEl);
                console.log('no link',replacedlink)
            }

            // console.log('after',link)
            // domcontent.replaceChild(pEl, link);

            // domcontent.insertBefore(aEl, firstP);

            // const linkInput = document.querySelector('.linkinput');
            // const textInput = document.querySelector('.textinput');

            textInput.innerHTML = '';
            document.querySelector('.textinput').value = '';

            linkInput.innerHTML = '';
            document.querySelector('.linkinput').value = '';

            console.log(textInput)
           
           
            tempLink.textContent = '';
            tempText.textContent = '';
            linkInput.classList.remove('linkempty')
            textInput.classList.remove('textempty')
        }

        // console.log('new link: ', aEl.outerHTML, domcontent.outerHTML);
        console.log('new link: ', domcontent.outerHTML);
        
    })

    // fragment ----------------------------------------------------

    btncreatefragment.addEventListener('click', (ev) =>{
        
        fpEl.appendChild(fpText);
        fpEl2.appendChild(fpText2);

        docFrag.appendChild(fpEl);
        docFrag.appendChild(fpEl2)

        divEl.appendChild(docFrag);
        domcontent.appendChild(divEl);
        // domcontent.insertBefore(divEl, firstP);
        console.log('div fragment: ' , domcontent.outerHTML);
    })
