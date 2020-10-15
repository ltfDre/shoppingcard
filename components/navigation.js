import Link from "next/link";
import {useSelector} from "react-redux";

const style = {
  cartProductSpanStyle: {
    width: "auto",
    height: "auto",
    borderRadius: "50%",
    backgroundColor: "#DEDEDE",
    padding: "5px",
    fontSize: "1rem"
  },
  title: {
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#0474bc"
  }
}


export default function Navigation() {

const cart = useSelector(state => state.cart)
  return (
    <nav>
      <div id="navbar">
        <div id="logo">
          <div class="logo"><Link href="/"><h6 style={style.title}>Shopping Card</h6></Link></div>
        </div>
        <div id="links">
        <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/cart">
            <a>Basket <span style={style.cartProductSpanStyle}>{cart.length}</span></a>
          </Link>
        </div>
      </div>
    </nav>
  )
}