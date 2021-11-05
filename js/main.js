let lists = [];
let doneLists = [];
let selectedIndex = -1;

function addTask() {
    let task = document.getElementById('enter-area').value;
    document.getElementById('enter-area').value = "";
    if (task){
         lists.push(task);
    drawPage();
    }
   
}

function drawPage() {
    let content = "";
    let content2 = "";

    for (let i = 0; i < lists.length; i++) {
        content +=
            "<div class='mt-2'>" +
            "<div class='btn-group w-100'>" +
            "<button type='button' class='btn shadow-none btn-outline-success w-100'>" + lists[i] + "</button>" +
            "<button type='button' class='btn btn-success' onclick='done(" + i + ")'>&#10003;</button>" +
            "</div>" +
            "</div>"
    }
    for (let j = 0; j < doneLists.length; j++) {
        content2 +=
            "<div class='mt-2'>" +
            "<div class='btn-group w-100'>" +
            "<button type='button' class='btn btn-outline-success shadow-none w-100'>" + doneLists[j] + "</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteDone(" + j + ")'>&times;</button>" +
            "</div>" +
            "</div>"
    }
    document.getElementById('content').innerHTML = "<div class='d-flex justify-content-between'>" +
        "<div>" +
        "Bajarish kerak" + content + "</div>" +
        "<div>" +
        "Bajarildi" + content2 + "</div>" +
        "</div>";

    progress();
}

const done = (index) => {
    doneLists.push(lists[index]);
    lists.splice(index, 1);
    drawPage();
};
const deleteDone = (index) => {
    doneLists.splice(index, 1);
    drawPage();
};
function progress(){
    let percent ;
    if (doneLists.length>0){
        document.getElementById('foiz').innerHTML=parseInt((doneLists.length * 100) / (doneLists.length + lists.length)) + '%';
    }
    else if (doneLists.length==0){
        document.getElementById('foiz').innerHTML=  '0%';
    }
    else{}
    document.getElementById('progress').style.width = (doneLists.length * 100) / (doneLists.length + lists.length) + '%';
};