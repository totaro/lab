



    //  dom node modifications ------------------------------

    let btncreatenode = document.getElementById('btn-createnode');
    let btninsertenode = document.getElementById('btn-insertnode');
    let btninsertafterenode = document.getElementById('btn-insertafternode');
    let btnreplacenode = document.getElementById('btn-replacenode');
    let btnnewlinknode = document.getElementById('btn-newlink');
    let btncreatefragment = document.getElementById('btn-fragment');

    const domcontent = document.querySelector('.domcontent');
    const pText = document.createTextNode('New Node ');
    const pEl = document.createElement('p');

    // const firstP = domcontent.children[ 1 ];
    const firstP = domcontent.children[ domcontent.childElementCount - 2 ];
    const pText2 = document.createTextNode('Node before');
    const pEl2 = document.createElement('p');

    const secondP = domcontent.children[ 1 ];
    const pText3 = document.createTextNode('Node after');
    const pEl3 = document.createElement('p');

    const pText4 = document.createTextNode('New replaced node');
    const pEl4 = document.createElement('p');

    const lnk = document.getElementById('link');
    const aText = document.createTextNode('New link node');
    const aEl = document.createElement('a')



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

    console.log('before: ' , domcontent.outerHTML);
    
    btncreatenode.addEventListener('click', (ev) =>{
        
        pEl.appendChild(pText);
        domcontent.appendChild(pEl);
        console.log('after: ' , domcontent.outerHTML);
    })

    // insert before node

    btninsertenode.addEventListener('click', (ev) =>{

        pEl2.appendChild(pText2);
        domcontent.insertBefore(pEl2, firstP);
        console.log('after insert before: ' , domcontent.outerHTML);
    })

    // insert after node

    btninsertafterenode.addEventListener('click', (ev) =>{

        pEl3.appendChild(pText3);
        domcontent.insertBefore(pEl3, firstP.nextSibling);
        console.log('after insert after: ' , domcontent.outerHTML);
    })

    //replace child node

    btnreplacenode.addEventListener('click', (ev) =>{

        pEl4.appendChild(pText4);
        domcontent.replaceChild(pEl4, firstP);
        console.log('replace node: ' ,  lnk.outerHTML, domcontent.outerHTML);
        
    })

    //new link

    btnnewlinknode.addEventListener('click', (ev) =>{


      // pEl.appendChild(pText);
      // domcontent.appendChild(pEl);
      
        aEl.setAttribute('href','#newlink');
        aEl.appendChild(aText);
        domcontent.appendChild(aEl);
        // domcontent.insertBefore(aEl, firstP);
      

        console.log('replace linknode: ', lnk.outerHTML, domcontent.outerHTML);
        
    })

    // fragment

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
