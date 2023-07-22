const menuItem = document.querySelectorAll(".nav_list__item");
const title = document.getElementById("main_title");

menuItem.forEach((item) => {
    item.addEventListener("click", (ev) => {
        if (ev.target.innerHTML !== "")
            title.innerHTML = ev.target.innerHTML;
    });
});

const searchInput = document.getElementById("search_input");
const contentBox = document.getElementById("content_box");

searchInput.addEventListener("keypress", (ev) => {
    if (ev.code === "Enter" && ev.target.value !== "") {
        contentBox.innerHTML = searchInput.value;
    }
});

searchInput.addEventListener("search", (ev) => {
    if (searchInput.value === "")
        contentBox.innerHTML = "Content Goes Here...";
});
