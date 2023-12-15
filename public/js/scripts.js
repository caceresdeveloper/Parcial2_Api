function loadData() {
    return new Promise((resolve, reject) => {
        fetch('https://api-dishes.vercel.app/')
            .then(result => result.json())
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

const deleteDish = () => {
    const idDishValue = document.getElementById('idDish').value;

    const URI = `https://api-dishes.vercel.app/${idDishValue}`;

    fetch(URI, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(result => result.json())
        .then(result => {
            if (result.state) {
                alert('Success!!!!');
            } else {
                alert('Ohh! Algo ha salido mal');
            }
        })
        .catch(err => console.log(err));
};

document.getElementById('btnDelete').addEventListener('click', deleteDish);



const loadFields = () => {
    const idDishValue = document.getElementById('idDish').value;
    const dishNameValue = document.getElementById('dishName').value;
    const caloriesValue = document.getElementById('calories').value;
    const isVegetarianValue = document.getElementById('isVegetarian').checked;
    const valueValue = document.getElementById('value').value;
    const commentsValue = document.getElementById('comments').value;

    console.log(idDishValue)
    console.log(dishNameValue)
    console.log(caloriesValue)
    console.log(isVegetarianValue)
    console.log(valueValue)
    console.log(commentsValue)

    const data = {
        "idDish": idDishValue,
        "dishName": dishNameValue,
        "calories": caloriesValue,
        "isVegetarian": isVegetarianValue,
        "value": valueValue,
        "comments": commentsValue
    }

    return JSON.stringify(data)
}



document.getElementById('btnSend').addEventListener('click', () => {
    const URI = "https://api-dishes.vercel.app/"

    fetch(URI, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: loadFields()
        }).then(result => result.json())
          .then(result => {
            if (result.state) {
                alert('¡Éxito!');
            }else{
                alert('Ohh! Algo ha salido mal');
            }
        })
        .catch(err => console.log(err));
})
