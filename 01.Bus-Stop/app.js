async function getInfo() {
    console.log("TODO...");
    const stopNameElement = document.getElementById("stopId");
    const stopInfo = stopNameElement.value;
    let nameStop = document.getElementById("stopName");
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopInfo}`;
    let busesSchegule = document.getElementById("buses");
    busesSchegule.innerHTML= ""
    stopInfo.value = ""

    try{
    const response = await fetch(url);
    const data = await response.json();

    nameStop.textContent = data.name;
    Object.entries(data.buses).forEach(([busNumb, timeArrive]) => {
        const li = document.createElement("li");
        li.textContent = `Bus ${busNumb} arrives in ${timeArrive} minutes`
        busesSchegule.appendChild(li);
    });

} catch(error){
    nameStop.textContent = "Invalid Stop ID!"
}
    }
    