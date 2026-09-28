
const products = ["Laptop", "Smartphone", "Headphones", "Smartwatch"];

function logFirstProduct() {
    console.log(products[0]);
}

function updateProductName(index, newName) {
    products[index] = newName;
}

function removeLastProduct() {
    products.pop();
}
function addProduct(newProduct) {
    products.push(newProduct);
}

try {
    module.exports = { 
        products, 
        logFirstProduct, 
        updateProductName, 
        removeLastProduct,
        addProduct
    };
} catch (e) {
}
