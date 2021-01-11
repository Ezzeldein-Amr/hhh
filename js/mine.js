var nameInp = document.getElementById("webName");
var URLInp = document.getElementById("weburl");
var errorbox = document.getElementsByClassName("displayeed");

if (localStorage.getItem("URLS") == null) {
    var URLList = [];
} else {
    var URLList = JSON.parse(localStorage.getItem("URLS"))

}

displayURL();

function add() {
    var URL = {
        name: nameInp.value,
        URL: URLInp.value,
    };
    if (nameInp.value == "" || URLInp.value == "") {
        alert("please enter correct ande complete value")

    } else {
        URLList.push(URL);
        localStorage.setItem("URLS", JSON.stringify(URLList))
        displayURL();
        clearForm();
    }

}


function displayURL() {
    var trs = "";
    for (var i = 0; i < URLList.length; i++) {
        trs += `<tr><td>${URLList[i].name}</td> 
        <td><a href="${URLList[i].URL}" target="_blank">
            <button type="button" class="btn btn-info mt-2 mb-4" id="visit" ">Visit</button>
            </a></td>
        <td><button type="button" class="btn btn-danger mt-2 mb-4" id="delete"  onclick=" deleteUrl(${i});" >Delete</button></td>
        <td><button type="button" class="btn btn-warning mt-2 mb-4" id="update"  onclick=" updateUrl(${i});" >update</button></td>
        </tr>`;
    }
    console.log(trs);
    document.getElementById("tbody").innerHTML = trs;
}




function deleteUrl(z) {
    URLList.splice(z, 1);
    localStorage.setItem("URLS", JSON.stringify(URLList));
    displayURL();
}



var addnew = document.getElementById("addLink")
function updateUrl(z) {
    nameInp.value = URLList[z].name;
    URLInp.value = URLList[z].URL;

    addnew.innerHTML = "Update URL";

    addnew.onclick = function () {
        URLList[z].name = nameInp.value;
        URLList[z].URL = URLInp.value;
        localStorage.setItem("URLS", JSON.stringify(URLList))
        displayURL();
        addnew.innerHTML = "Submit";
        addnew.onclick = add;
        clearForm();
    }


}


function clearForm() {
    nameInp.value = "";
    URLInp.value = "";
}