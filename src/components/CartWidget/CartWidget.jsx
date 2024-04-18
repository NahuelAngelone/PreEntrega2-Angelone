import cart from './Assets/Cart.png'


const CartWidget = () => {
    return (
        <div className='d-flex flex-row'>
            <img src={cart} alt="Cart-Widget" height={25}/>
            <p>0</p>
        </div>
    )
}

export default CartWidget;