document.getElementById("login - form").addEventListener("submit",loginHandler)






function loginHandler (event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const {email,password} = Object.fromEntries(formData);
    onLogin(email, password);

}


async function onLogin (email, password){
    const url = "http://localhost:3030/users/login";
    const body = {
        email, password
    };
    const header = getHeader("Post", body);
    const response = await fetch(url, header);
    const data = response.json();
    sessionStorage.setItem("userData",{
        email: data.email,
        accesToken: data.accesToken
    });
    return data;
}

function getHeader(method, body){
    return{
        methdod: `${method}`,
       headers:{ 
        "Content - type": "application/json",
    },
        body: JSON.stringify(body)
    }
    };