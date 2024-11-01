let count = 1;

const getData = (searchTerm) => {
    console.log("Fetching the data...", count++);
    
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            // Filter the data based on the search term
            const filteredProducts = data.products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            console.log("Filtered Results:", filteredProducts);
        })
        .catch(error => console.error("Error fetching data:", error));
};

const doSomeMagic = (fn, d) => {
    let timer;

    return function (...args) {  // Capture arguments with rest operator
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args); // Pass arguments correctly
        }, d);
    };
};

const bettrFunction = doSomeMagic(getData, 300);
