import "./Product.css";
import Price from "./Price";
function Product({title, idx}) {
    let oldPrice=["$100", "$200", "$300","$400"];
    let newPrice=["$90", "$190", "$290", "$390"];
    let description=[["8,000 DPI","5 programable buttons "], ["intuition surface","touch surface"], ["design for the ipad","touch surface"], ["wireless","optical connection"]];
    
    return (
        <div className="Product" >
            <h3>{title}</h3>
            <p>{description[idx][0] }</p>
            <p>{description[idx][1] }</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

       </div>
    )
}


export default Product;