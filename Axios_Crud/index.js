const axios = require("axios");
const getAll = () => {
    axios.get("https://haseeb-apis.herokuapp.com/api/person")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

const getOne = (id) => {
    axios.get("https://haseeb-apis.herokuapp.com/api/person/" + id)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}
const deleteOne = (id) => {
    axios.delete("https://haseeb-apis.herokuapp.com/api/person/" + id)
        .then((response) => {
            console.log("record deleted");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

const put = (id, data) => {
    axios.put("https://haseeb-apis.herokuapp.com/api/person/" + id, data)
        .then((response) => {
            console.log("record updated");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}


const post = (data) => {
    axios.post("https://haseeb-apis.herokuapp.com/api/person", data)
        .then((response) => {
            console.log("record inserted");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

getAll();
// getOne('62220b6a64ebb66c9938759b');
// deleteOne('62220b6a64ebb66c9938759b');
// put("621f210b5cf997157dc5344f", { name: "updated Haseeb" });
// post({ name: "Rizwan", gender: true, age: 22, city: "Karachi" });