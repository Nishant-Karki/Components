import ladies from "./ladies-6-beige-1_396x.webp";
import "./card.scss";

function Cards() {
  return (
    <div>
      <h1>Cards</h1>
      <div className="row">
        {/* card1 */}
        <div className="card1 item">
          <div className="img">
            <img src={ladies} width="270" alt="" />
          </div>
          <div className="product-desc">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
          </div>
        </div>

        {/* card2 */}
        <div className="card2 item">
          <div className="img">
            <img src={ladies} width="270" alt="" />
          </div>
          <div className="product-desc item__overlay">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
            <div className="overlay">
              <h5 className="btn">View</h5>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="card3 item">
          <div className="img"></div>
          <div className="product-desc item__overlay">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5 className="btn">from $119</h5>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Cards;