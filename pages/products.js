import Layout from "../components/layout";
import Head from "next/head";
import ProdcutBox from "../components/product-box/product-box";
import { useSelector, useDispatch } from "react-redux";
import { addCartAction, deleteCartAction } from "../redux/actions/cartAction";


const products = [
  {
    name: "Apple iPhone 11 Pro Max Smart Phone, 32 GB, Silver",
    id: 1
  },
  {
    name: "Apple iPhone 11 Pro Max Smart Phone, 64 GB, Silver",
    id: 2
  },
  {
    name: "Apple iPhone 11 Pro Max Smart Phone, 128 GB, Silver",
    id: 3
  }, {
    name: "Apple iPhone 11 Pro Max Smart Phone, 256 GB, Silver",
    id: 4
  }
]

export default function Product() {

  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addCartAction(product))
  }

  const handleDeleteCart = (product) => {
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
        gridGap: "20px",
        marginTop: "20px"
      }}>

        {products.map(eachProduct => {
          return <ProdcutBox
            key={eachProduct.id}
            onAdd={() => handleAddCart(eachProduct)}
            onDelete={() => handleDeleteCart(eachProduct)}
            product={eachProduct} />
        })}
      </div>
    </Layout>
  )
}