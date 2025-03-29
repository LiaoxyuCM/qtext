const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);'
    return params.get(name);
};

const text = getQueryParam('text');

document.write(text != null ? `<p>${text}</p>`:
    `<h1>Welcome to QText!</h1><br>
    Try to append "?text={The text}", the text valid html and it must be encoded <br>
    <a href="https://anytexteditor.com/cn/url-encoder">Url encoder</a><br><a href="?text=%3Cstyle%3Ebody%20%7Bbackground-color%3A%20%23000%7D%3C%2Fstyle%3E%3Cinput%20type%3D%22text%22%20placeholder%3D%22Type%20something%22%20%2F%3E">Example</a>`
);
