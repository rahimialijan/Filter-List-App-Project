const filterName=document.getElementById('filterNames');


filterName.addEventListener('keyup', filterFunction)


function filterFunction(){
    let filterValue=document.getElementById('filterNames').value.toUpperCase();

    let ul=document.getElementById('names')
    let li=ul.querySelectorAll('li.collection-item');
   li.forEach((list)=>{
    let a=list.getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
        list.style.display='';
    }else{
        list.style.display='none';
    }
   })
}
