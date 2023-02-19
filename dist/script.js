const headPart = document.getElementsByTagName('head')[0];
headPart.innerHTML += 
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dev3058/cookie-consent@905a230a6c85b8b9e122fb6f87cc56dc405cfb1d/dist/style.css">`;

const cookiConsent = () => {
const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.innerHTML +=
`<div class="wrapper">
    <header>
    <img src="https://cdn-icons-png.flaticon.com/512/9146/9146496.png">
    <h2>Cookies Consent</h2>
    </header>
    <div class="data">
    <p>This website uses cookies to help you have a superior and more relevant browsing experience.</p>
    </div>
    <div class="buttons">
    <button class="button" id="acceptBtn">Ok, I understand</button>
    </div>
</div>`;
};

const executeCodes = () => {

const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");
    
if (document.cookie.includes("cookie-consent-approved")) return;
cookieBox.classList.add("show");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    cookieBox.classList.remove("show");

    if (button.id == "acceptBtn") {
        const d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "cookie-consent= cookie-consent-approved;" + expires + ";path=/";
    }
    });
});
};

setTimeout(cookiConsent, 500);
setTimeout(executeCodes, 500);
