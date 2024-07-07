const data = [
    {id:1 , name :'erfan' , family:'araban' , age :29 , gender :'male'},
    {id:2 , name :'mona' , family:'jamshidi' , age :27 , gender :'female'},
    {id:3 , name :'test' , family:'test' , age :17 , gender :'female'}
];
function generateTable(data) {  
    let table = `<table id='mytable'>`;  
    table += `<tr><th>شناسه</th><th>نام</th><th>نام خانوادگی</th><th>سن</th><th>جنسیت</th><th>عملیات</th></tr>`;  
    data.forEach(item => {  
    table += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.family}</td><td>${item.age}</td><td>${item.gender}</td><td>${item.innerHTML = `<button type="submit" class="btn btn-outline-success mt-3 clear" onclick="deleteItem(item)"><i class="bi bi-trash"></i></button>` } </td></tr>`;  
    });  
    table += `</table>`;  
    return table;  
    }
const tableContainer = document.getElementById('table-container');  
tableContainer.innerHTML = generateTable(data);  

const clear =document.getElementsByClassName('clear');
function deleteItem(item){}




/*clear.addEventListener('click' , clearRow);
function clearRow(){
    let item ;
    for(item = 1;item<= clear.length ; item ++){
        delete data[item];
    }
}

const clear = document.getElementsByClassName('clear');
clear.addEventListener('click',clearRow(this) );
function clearRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('mytable').deleteRow(i);
  }*/
  /*function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('table-container').deleteRow(i);
  }  */


