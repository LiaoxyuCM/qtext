const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
};

const text = getQueryParam('text');

document.write(text != null ? text :
    `<h1>Welcome to QText!</h1><br>
    Try to append "?text={The text}", the text valid html and it must be encoded <br>
    <input type="text" id="urlText" placeholder="Enter something..." /><input type="button" id="urlEncode" value="encode" /><br>
    <a href="?text=%3Cstyle%3Ebody%20%7Bbackground-color%3A%20%23000%7D%3C%2Fstyle%3E%3Cinput%20type%3D%22text%22%20placeholder%3D%22Type%20something%22%20%2F%3E">Example</a>`
);

document.querySelector("#urlEncode").addEventListener("click", () => {
    document.querySelector("#urlText").value = ‌encodeURIComponent(document.querySelector("#urlText").value);
});
