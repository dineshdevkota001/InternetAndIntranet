const localhost = "http://localhost:8000"
// const localhost = 'https://jsonplaceholder.typicode.com'

let abort = new AbortController()
const abortsignal = abort.signal
const abortFunction = () =>{
        abort.abort()
}
async function get(url) {
        url = localhost + url;
        let response = await fetch(url,{signal: abortsignal});
        return response.text();
}

async function post(url, data) {
        url = localhost + url;
        // let res = await fetch(url,data)
        const response = await fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        return response.json(); // parses JSON response into native JavaScript objects
}

async function drop(url, data) {
        url = localhost + url;
        // let res = await fetch(url,data)
        const response = await fetch(url, {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        return response.json(); // parses JSON response into native JavaScript objects
}

module.exports = { get, post, localhost, abortFunction,drop };
