document.getElementById("register-form").addEventListener("submit",getRegister);
document.querySelectorAll("a").forEach((x) => x.classList.remove("active"));
document.getElementById("register").classList.add("active");

function getRegister(event){
    event.preventDefault();
    const errorP = document.querySelector("p.notification")
    const form = event.target;
    const newForm = new FormData(form);
    const {email,password,repeat} = Object.fromEntries(newForm);
    if (password !== repeat){
        errorP.textContent = "Repeat password is not the same as password. Please try again"
    }
    onRegister(email, password);
};

async function onRegister(email, password){
    const url = `http://localhost:3030/users/register`;
    const body = {
        email,
        password
    }
    const header = getHeader("post", body);
    try{const response = await fetch(url, header);
        const data = response.json();}catch(e){
            errorP.textContent = e;
        }
    return data;
};



function getHeader(method, body){
return{
    methdod: `${method}`,
   headers:{ 
    "Content - type": "application/json",
},
    body: JSON.stringify(body)
}
};