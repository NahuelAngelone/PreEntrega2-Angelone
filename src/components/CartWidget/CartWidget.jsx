import cart from './Assets/Cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to='/cart' className='d-flex flex-row'>
      <img src={cart} alt="Cart-Widget" height={25} />
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  )
}

export default CartWidget;