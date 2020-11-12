async function get(url){
        url = "http://localhost:8000"+url
        let res = await fetch(url)
        return res.text()
}

async function post(url,data){
        url = "http://localhost:8000"+url
        let res = await fetch(url,data)
        return res.text
}

module.exports = {get,post}