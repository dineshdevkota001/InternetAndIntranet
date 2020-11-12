async function fetchurl(url){
        url = "http://localhost:8000"+url
        let res = await fetch(url)
        return res.text()
}

module.exports = {fetchurl}