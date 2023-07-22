const profileMenuItem = document.getElementById("profile");
const sectionContentBox = document.getElementById("section_content");

profileMenuItem.addEventListener("click", (ev) => {
    // Change body background
    document.body.style.backgroundColor = "#2F80ED";

    // Print List
    sectionContentBox.innerHTML = 
    `
        <p>Success metrics</p>
        <ul style="margin-inline: 15px;">
            <li>Monthly Active Users Sending Invites</li>
            <li>Invitees per Inviter</li>
            <li>Conversion Rate to New User</li>
            <li>Conversion Rate to New Guest</li>
            <li>Conversion Rate to New Host</li>
            <li>Revenue Impact Potential</li>
        </ul>
    `;
});


// Search
const searchInput = document.getElementById("search_input");
const asideContentBox = document.getElementById("aside_content");

searchInput.addEventListener("keypress", (ev) => {
    if (ev.code === "Enter" && searchInput.value !== "") {
        asideContentBox.style.color = "#2474E5";
        asideContentBox.innerHTML = searchInput.value;

        // Random Background
        document.body.style.backgroundColor = generateRandomBackgroundColor(["#F4A4A4", "#fff0d6", "#141414"]);
    }
});

searchInput.addEventListener("change", (ev) => {
    if (searchInput.value === "") {
        asideContentBox.style.color = "initial";
        asideContentBox.innerHTML = "";
    }
});

// Function: Generate Random Background Color CSS
function generateRandomBackgroundColor(colors) {
    if (colors.length > 0 && Array.isArray(colors)) {
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        return colors[randomColorIndex];
    }
}

const homeMenuItem = document.getElementById("home");
homeMenuItem.addEventListener("click", (ev) => {
    // Restore body background
    document.body.style.backgroundColor = "#4f46e5";

    // Restore Section Content Box
    sectionContentBox.innerHTML = "";

    // Restore Aside Content Box
    asideContentBox.innerHTML = "";

    // Clear Search Input
    searchInput.value = "";
});
