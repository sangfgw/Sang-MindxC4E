// Declare Login State
let isLogin = localStorage.getItem("isLogin") ? localStorage.getItem("isLogin") : false;

// const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userProfileDiv = $$("#user_profile");

const loginAnchor = $$("#login_link");

// Change Home UI Based On Login State
if (isLogin) {
    loginAnchor[0] ? loginAnchor[0].style.display = "none": null;
    userProfileDiv[0] ? userProfileDiv[0].style.display = "flex" : null;
} else {
    loginAnchor[0] ? loginAnchor[0].style.display = "initial" : null;
    userProfileDiv[0] ? userProfileDiv[0].style.display = "none": null;
}

const userNameInput = $$("#user_name");
const passwordInput = $$("#pwd");
const loginResultDiv = $$("#login_result");

const loginSubmitBtn = $$("#login_submit");
loginSubmitBtn[0] ? loginSubmitBtn[0].addEventListener("click", (ev) => {
    ev.preventDefault();

    // Check UserName And Password Inputs
    if (userNameInput[0] && userNameInput[0].value === "user01" && passwordInput[0] && passwordInput[0].value === "P@$$W0rd" ) {
        // Change Login State
        isLogin = true;

        // Store Login Info Into Local Storage
        localStorage.setItem("isLogin", isLogin);
        localStorage.setItem("userInfo", JSON.stringify({username: userNameInput[0].value}))

        // Redirect To Home Page
        window.location.href = "/";
    } else {
        loginResultDiv[0].innerHTML = `<br><span style="color: red">Invalid UserName Or Password!</span>`
    }
}) : null;

// Get User Info From Local Storage
const userProfileName = $$("#user_profile__name");
const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

// Change User Name Info UI Based On Login State
if (userProfileName[0])
    userInfo ? userProfileName[0].innerHTML = `${userInfo.username}` : userProfileName[0].innerHTML = `Your name`;