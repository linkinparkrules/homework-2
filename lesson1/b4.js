// o	Danh bạ được sắp xếp bằng tên theo bảng chữ cái
// o	Thêm mới danh bạ với tên và số điện thoại
// o	Tìm kiếm danh bạ theo tên và số điện thoại
// o	Xoá các danh bạ bị trùng số điện thoại (ở trong ví dụ là Alice và Daniel). Sẽ xoá người nào đứng sau (Daniel sẽ bị xoá)


let listInfo = document.querySelector(".contactList");
let nameInitial = ["Alice", "Bob", "Chris", "Daniel"];
let phoneInitial = ["(816)-403-5456", "(572)-566-2397", "(864)-309-4841", "(816)-403-5456" ];

for (let i = 0; i < 4; i++) {
    let contacts = document.createElement("div");
    contacts.className = "contact";
    let name = document.createElement("span");
    name.className = "name";
    name.innerHTML = nameInitial[i];
    let phone = document.createElement("span");
    phone.className = "phone";
    phone.innerHTML = phoneInitial[i];
    listInfo.appendChild(contacts);
    contacts.appendChild(name);
    contacts.appendChild(phone);
    
}