const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
};

document.write(`<p>${getQueryParam("text")}</p>`);
