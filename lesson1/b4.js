// o	Danh bạ được sắp xếp bằng tên theo bảng chữ cái
// o	Thêm mới danh bạ với tên và số điện thoại
// o	Tìm kiếm danh bạ theo tên và số điện thoại
// o	Xoá các danh bạ bị trùng số điện thoại (ở trong ví dụ là Alice và Daniel). Sẽ xoá người nào đứng sau (Daniel sẽ bị xoá)


let listInfo = document.getElementById("contactList");
let nameArr = ["Alice", "Bob", "Chris", "Daniel"];
let phoneArr = ["(816)-403-5456", "(572)-566-2397", "(864)-309-4841", "(816)-403-5456"];
let contactArr = [];

// khởi tạo các span name và phone rồi ném chúng vào array mới
for (let i = 0; i < nameArr.length; i++) {
    let contacts = document.createElement("div");
    let name = document.createElement("span");
    name.className = "name";
    name.innerHTML = nameArr[i];
    let phone = document.createElement("span");
    phone.className = "phone";
    phone.innerHTML = phoneArr[i];
    contacts.appendChild(name);
    contacts.appendChild(phone);
    contactArr[i] = contacts.innerHTML;
}

// lôi các phần tử trong mảng array mới để appendChild vào html
for (let j = 0; j < contactArr.length; j++) {
    let contacts = document.createElement("div");
    contacts.className = "contact";
    contactArr.sort();
    contacts.innerHTML = contactArr[j];
    listInfo.appendChild(contacts);
}

function addContact() {
    let fillIn = document.getElementsByClassName("fillIn");
    let contacts = document.createElement("div");
    contacts.className = "contact";
    let name = document.createElement("span");
    name.className = "name";
    // viết hoa chữ cái đầu tiên
    name.innerHTML = capitalizeFirstLetter(fillIn[0].value);
    // function viết hoa chữ cái đầu tiên của name
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let phone = document.createElement("span");
    phone.className = "phone";
    // kiểm tra xem số điện thoại có ghi chữ cái ko
    phone.innerHTML = fillIn[1].value;
    // function kiểm tra xem có chữ cái ko 
    function checkLetter(string) {
        return /[a-zA-z]/.test(string);
    }
    // nếu số điện thoại có chữ cái thì thôi khỏi thêm danh bạ
    if (checkLetter(fillIn[1].value) == true) {
        alert("please do not type any letter in the phone number!");
    } else {
        contacts.appendChild(name);
        contacts.appendChild(phone);
        // thêm contact mới vào mảng danh bạ
        contactArr[contactArr.length] = contacts.innerHTML;
        // xóa danh bạ cũ đi
        while (listInfo.hasChildNodes()) {
            listInfo.removeChild(listInfo.firstChild);
        }
        // bổ sung danh bạ mới, đã được sắp xếp thứ tự
        for (let j = 0; j < contactArr.length; j++) {
            let contacts = document.createElement("div");
            contacts.className = "contact";
            contactArr.sort();

            contacts.innerHTML = contactArr[j];
            listInfo.appendChild(contacts);

        }
    }

}



// dùng sort() để sắp xếp các mảng array theo bảng chữ cái
