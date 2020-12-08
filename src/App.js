import Product from "./Containers/Product"
import Cart from "./Containers/Cart"

export default function App(props) {
    return (
        <fieldset>
            <legend>App</legend>
            <Product />
            <hr />
            <Cart />
        </fieldset>
    )
}