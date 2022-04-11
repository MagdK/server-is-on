const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json();
};


// const mainPageContent = () => {
//     return`
//         <h1>Hello World! It's Codecool</h1>
//     `
// };


// const loadEvent = () => {

//     const rootElement = document.getElementById("root");

//     rootElement.insertAdjacentHTML("beforeend", mainPageContent());
// };

// window.addEventListener("load", loadEvent);