function submitData(userName = "Bob", userEmail = "Bobo@fred.com"){
    const formData = {
        name: `${userName}`,
        email: `${userEmail}`, 
    };
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(formData), 
    })
    .then(res => res.json())
    .then(data => {
        let p = document.createElement('p')
        p.textContent = data.id
        document.querySelector('body').appendChild(p)
    })
    .catch(function (error) {
        alert("NOPE, not today!");
        let p = document.createElement('p')
        p.textContent = error.messge = ("Unauthorized Access")
        document.querySelector('body').appendChild(p);
    });
 
}
submitData();














