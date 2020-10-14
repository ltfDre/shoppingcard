import Link from "next/link";
import {useSelector} from "react-redux";

const cartProductSpanStyle = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#DEDEDE",
  padding: "5px",
  fontSize: "0.7rem"
}
export default function Navigation() {

const cart = useSelector(state => state.cart)
  return (
    <nav>
      <div id="navbar">
        <div id="logo">
          <div class="logo"><h6>Shopping Card</h6></div>
        </div>
        <div id="links">
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
          <Link href="/products">
            <a>Ürünler</a>
          </Link>
          <Link href="/cart">
            <a>Sepet <span style={cartProductSpanStyle}>{cart.length}</span></a>
          </Link>
        </div>
      </div>
    </nav>
  )
}