async function fetchurl(url){
        let res = await fetch(url)
        return res.text()
}

module.exports = {fetchurl}