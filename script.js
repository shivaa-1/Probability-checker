async function show(){
    const name = document.querySelector("#username").value;
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const object = await res.json();
    console.log(object);

    try {
        alert(`You Are From: ${object.country[0].country_id}   
            Probability: ${object.country[0].probability}`);
        
    } catch (error) {
        alert("Server issue....")
        
    }

}