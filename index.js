
/* Header */
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){

    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}

// drag and drop --------------------------------------------------


const dragDemo = document.getElementById( 'drag-and-drop' );
    const movable = document.querySelector( '.move' );
    const copyable = document.querySelector( '.copy' );
    const droppable = document.querySelector( '.droppable' );
    let moving;
    let copying;
    let classes;
    let moveableDragStartHandler;
    let moveableDragEndHandler;
    let droppableEnterHandler;
    let droppableLeaveHandler;
    let dropHandler;

    const moved = document.querySelector('.moved');

    // childEl.remove();
    dragDemo.style.display = 'block';

    moveableDragStartHandler = function moveableDragStartHandler(event){

            if(event.target.classList.contains('copy')){
                copying = event.target;
                // copying.classList.add( 'green' );
            }

            if(event.target.classList.contains('move')){
                moving = event.target;
                moving.classList.add('active');
                // moving.classList.add( 'green' );
            }

            event.dataTransfer.setData('text/plain', event.target.classList)

    };


    moveableDragEndHandler = function moveableDragEndHandler( event ) {
        
          event.target.classList.remove( 'active' );
          droppable.classList.remove( 'active' );
          
        
        };
        
        droppableEnterHandler = function droppableEnterHandler( event ) {
        
          event.preventDefault();
          droppable.classList.add( 'active' );
          
        
        };
        
        droppableLeaveHandler = function droppableLeaveHandler( event ) {
        
          droppable.classList.remove( 'active' );
        
        };
        
        dropHandler = function dropHandler( event ) {
        
        
          event.preventDefault();
          classes = event.dataTransfer.getData( 'text' );
        
        
          if ( classes.indexOf( 'copy' ) > -1 ) {
        
            newCopy = copying.cloneNode( true );
            droppable.appendChild( newCopy );
            newCopy.classList.add( 'green' );
            newCopy.classList.add( 'copied' );
            
            if(newCopy.classList.contains('copied')){
                newCopy.textContent = "Item copied";
            }
            copying = null;
        
          }
        
          if ( classes.indexOf( 'move' ) > -1 ) {
        
            droppable.appendChild( moving );
            moving.classList.remove( 'active' );
            moving.classList.add( 'green' );
            moving.classList.add( 'moved' );
                        
            if(moving.classList.contains('moved')){
                moving.textContent = "Item moved";
            }
                       
            console.log(moving.classList.contains('moved'))
            moving = null;
        
          }
        
          droppable.classList.remove( 'active' );
        
        
        };



    movable.addEventListener('dragstart', moveableDragStartHandler, false);
    movable.addEventListener('dragend', moveableDragEndHandler, false);

    copyable.addEventListener('dragstart', moveableDragStartHandler, false);

    droppable.addEventListener( 'dragenter', droppableEnterHandler, false );
    droppable.addEventListener( 'dragover', droppableEnterHandler, false );
    droppable.addEventListener( 'dragleave', droppableLeaveHandler, false );
    droppable.addEventListener( 'drop', dropHandler, false );
