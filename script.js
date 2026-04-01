function getData() {
    fetch("https://fakerapi.it/api/v2/addresses?_quantity=1")
        .then(res => res.json())
        .then(data => {
            if (data && data.data && data.data.length > 0) {
                const address = data.data[0];
                document.getElementById("result").innerHTML =
                    `${address.street}, ${address.city}`;
            } else {
                document.getElementById("result").innerHTML = "No data found";
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data";
            console.log(error);
        });
}