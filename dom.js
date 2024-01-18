
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
    const firstP = domcontent.children[ domcontent.childElementCount - 2 ];
    
    const pText2 = document.createTextNode('Node before');
    const pEl2 = document.createElement('p');

    const secondP = domcontent.children[ 1 ];
    const pText3 = document.createTextNode('Node after');
    const pEl3 = document.createElement('p');

    const pText4 = document.createTextNode('New target node');
    const pEl4 = document.createElement('p');

    const divEl = document.createElement('div');
    const docFrag = document.createDocumentFragment();
    const fpText = document.createTextNode('Fragment node 1');
    const fpEl = document.createElement('p');
    const fpText2 = document.createTextNode('Fragment node 2');
    const fpEl2 = document.createElement('p');

     // create new node --------------------------------------

    btncreatenode.addEventListener('click', (ev) =>{
        
        pEl.appendChild(pText);
        domcontent.appendChild(pEl);
        console.log('after: ' , domcontent.outerHTML);
    })

    // insert before node -------------------------------------

    btninsertenode.addEventListener('click', (ev) =>{

        pEl2.setAttribute('class','inserted');
        pEl2.appendChild(pText2);
        const inserttarget = document.querySelector('.target');

        console.log(inserttarget.outerHTML)
        
        if(inserttarget.classList.contains('target')){
            domcontent.insertBefore(pEl2, inserttarget);
            console.log('after insert before: ' , domcontent.outerHTML);
        }
        
    })

    // insert after node ----------------------------------------------

    btninsertafterenode.addEventListener('click', (ev) =>{

        pEl3.appendChild(pText3);
        const inserttarget = document.querySelector('.target');
        domcontent.insertBefore(pEl3, inserttarget.nextSibling);
    })

    //replace target node --------------------------------------------

    btnreplacenode.addEventListener('click', (ev) =>{
      
        pEl4.setAttribute('class','target inserted replaced');
        pEl4.appendChild(pText4);
        const replacedtarget = document.querySelector('.target');
        domcontent.replaceChild(pEl4, replacedtarget);
            
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

        if(tempText.textContent === ''){
            textInput.classList.add('textempty')

            if(tempLink.textContent){
                
                console.log('linkin3 ',tempLink.textContent)
                linkInput.classList.remove('linkempty')
            }
            
        }

        if(tempLink.textContent === ''){
            linkInput.classList.add('linkempty')
            
            if(tempText.textContent){
                console.log('linkin2 ',tempText.textContent)
                textInput.classList.remove('textempty')
            }
            
            
        }

        if(tempLink.textContent && tempText.textContent){
        
        const incHttp = tempLink.textContent.toLowerCase().startsWith("http://");
        const incHttps = tempLink.textContent.toLowerCase().startsWith("https://");
        
        if(!incHttp && !incHttps){
            tempLink.textContent = 'http://' + tempLink.textContent;
            }   
            
        const link = document.querySelector('.link');
        const aText = document.createTextNode(tempText.textContent);
        const aEl = document.createElement('a');

        aEl.setAttribute('href', tempLink.textContent);
        aEl.setAttribute('class','link');
        aEl.setAttribute('target','_blank');
        aEl.appendChild(aText);
       
        const replacedlink = document.querySelector('.plink');
        
            if(replacedlink){

               const pLinks = document.querySelectorAll('.plink');
                pLinks.forEach(plink => {
                        plink.remove();
                });

                const linkEl2 = document.createElement('p');

                linkEl2.setAttribute('class','plink');
                linkEl2.appendChild(aEl);
                domcontent.appendChild(linkEl2);
                
            }else {
                const linkEl = document.createElement('p');
                linkEl.setAttribute('class','plink');
                linkEl.appendChild(aEl);
                domcontent.appendChild(linkEl);
            }

            textInput.innerHTML = '';
            document.querySelector('.textinput').value = '';

            linkInput.innerHTML = '';
            document.querySelector('.linkinput').value = '';

            tempLink.textContent = '';
            tempText.textContent = '';
            linkInput.classList.remove('linkempty')
            textInput.classList.remove('textempty')
        }

       
        
    })

    // fragment ----------------------------------------------------

    btncreatefragment.addEventListener('click', (ev) =>{
        
        fpEl.appendChild(fpText);
        fpEl2.appendChild(fpText2);

        docFrag.appendChild(fpEl);
        docFrag.appendChild(fpEl2)

        divEl.appendChild(docFrag);
        domcontent.appendChild(divEl);
       
    })
