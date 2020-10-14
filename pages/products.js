import Layout from "../components/layout";
import Head from "next/head";
import ProdcutBox from "../components/product-box/product-box";
import {useSelector, useDispatch} from "react-redux";
import { addCartAction, deleteCartAction } from "../redux/actions/cartAction";


const products = [
  {
    name: "Pro 1",
    id: 1
  },
  {
    name: "Pro 2",
    id: 2
  },
  {
    name: "Pro 3",
    id: 3
  },{
    name: "Pro 4",
    id: 4
  }
]

export default function Product(){

  const dispatch = useDispatch();

  const handleAddCart = (product)=>{
    dispatch(addCartAction(product))
  }

  const handleDeleteCart = (product)=>{
    dispatch(deleteCartAction(product))
  }

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridGap:"20px",
        marginTop:"20px"
      }}>

        {products.map(eachProduct=>{
            return  <ProdcutBox 
                      key={eachProduct.id} 
                      onAdd={()=>handleAddCart(eachProduct)} 
                      onDelete={()=>handleDeleteCart(eachProduct)} 
                      product={eachProduct}/>
        })}
      </div>
    </Layout>
  )
}