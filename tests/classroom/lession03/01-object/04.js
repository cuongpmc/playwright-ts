let product = {
    product01: {
        "price1": 50,
        "price2": 100,
    }
};
for (let property in product)
    console.log(`Name: ${property}, \n Price: ${product[property]}`);