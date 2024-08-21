import cart from './Assets/Cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Link to='/cart' className='d-flex align-items-center text-decoration-none'>
        <img src={cart} alt="Cart-Widget" height={35} />
        <span className='text-white ms-2'>
          {cantidad > 0 && cantidad}
        </span>
      </Link>
    </div>

  )
}

export default CartWidget;