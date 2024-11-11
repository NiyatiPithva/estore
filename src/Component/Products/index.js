import './_products.scss';


const Products = () =>{
    const productData =[
        {
            pName:"Jacket",
            price:45,
            img:"men-s-jackets1.jpg"
        },
        {
            pName:"Purse",
            price:50,
            img:"purse1.jpg"
        },
        {
            pName:"Dress",
            price:30,
            img:"dress.jpg"
        },
        {
            pName:"Denim",
            price:45,
            img:"Denim.jpg"
        },
        {
            pName:"Boots",
            price:65,
            img:"boots.jpg"
        },
        {
            pName:"Bag",
            price:55,
            img:"purse.webp"
        },

    ]
    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div className='mx-5 p-3 product-card'>
                        <div className='product-image-container'>
                            <img src={require('../../Component/assets/images/'+product.img)}/>
                        </div>
                        <div className='product-info'>
                            <h5><a href='#'>{product.pName}</a></h5>
                            <p className='product-price'>${product.price}</p>
                            <div className='product-rating'>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Products;