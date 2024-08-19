import cart from './Assets/Cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  return (
    <Link to='/cart' className='d-flex flex-row'>
      <img src={cart} alt="Cart-Widget" height={25} />
      <p>{cantidadTotal()}</p>
    </Link>
  )
}

export default CartWidget;