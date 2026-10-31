import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <>
      <div className="position-relative d-inline-block">
        <AiOutlineShoppingCart style={{ color: "white", fontSize: "2rem" }} />
        <span className="badge text-bg-danger rounded-pill fs-7">3</span>
      </div>
    </>
  );
}
