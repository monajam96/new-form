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
const deleteButtons = document.querySelectorAll('.clear');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr'); // Find the closest <tr> to the button
        row.remove(); // Remove the row
    });
});
const filterBtn = document.getElementById('filterBtn');
const nameInput = document.getElementById('name');
const familyInput = document.getElementById('family');
const table = document.getElementById('mytable');
const rows = table.getElementsByTagName('tr');

filterBtn.addEventListener('click', filterTable);

function filterTable() {
    const nameFilter = nameInput.value.toLowerCase();
    const familyFilter = familyInput.value.toLowerCase();
    
    for (let i = 1; i < rows.length; i++) { // Start at 1 to skip the header row
        const cells = rows[i].getElementsByTagName('td');
        let nameMatch = true;
        let familyMatch = true;

        if (nameFilter && cells[0].innerText.toLowerCase().indexOf(nameFilter) === -1) {
            nameMatch = false;
        }
        if (familyFilter && cells[1].innerText.indexOf(familyFilter) === -1) {
            familyMatch = false;
        }

        if (nameMatch && familyMatch) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

