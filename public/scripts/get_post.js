
const auction_name = document.getElementById("auction_name");

const submit = document.getElementById("submit");

submit.addEventListener('click' , setInfo)

const url = 'http://localhost:8383/'
async function getInfo(){

    const res = await fetch(url+"info",
        {
            method: 'GET'
        })

        const data = await res.json();
        console.log(data.info)
}

async function setInfo(){

    const res = await fetch(url,{

        method: 'POST',
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify({
            parcel: auction_name.value
        })
    }
        );
}