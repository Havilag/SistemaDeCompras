

export const ApiProduct = async () => {

    const response = await fetch("https://dummyjson.com/products?limit=0");

    if(!response.ok){
        throw new Error(`Request error: ${response.status}`);
    }

    const data = await response.json();

    const CategoryInclude = [
        "tops",
        "womens-dresses",
        "mens-shirts",
        "womens-shoes",
        "mens-shoes",
        "womens-bags",
        "sunglasses",
        "womens-jewellery",
        "mens-watches",
        "womens-watches",
        "skincare"
    ];
    

    
      const filtered = data.products.filter(product =>
        CategoryInclude.includes(product.category)
    );

      console.log(filtered);
    return filtered.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        description: product.description,
        category: product.category,
    }));

};