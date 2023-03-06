import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/MasterCard_Logo.svg.webp';
import './CreditCard.css';

const cardProviderImg = {
  Visa: visa,
  'Master Card': masterCard
}

const CreditCard = ({
  type, number, expirationMonth, expirationYear,
  bank, owner, bgColor, color
}) => {
  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color }}>
      <div className="CreditCard-type">
        <img src={cardProviderImg[type]} />
      </div>
      <div>
        **** **** **** {number.slice(-4)}
      </div>
      <div>
        <div className="CreditCard-cardData">
          <div>
            Expires {expirationMonth}/{expirationYear}
          </div>
          <div>
            {bank}
          </div>
        </div>

        <div>
          {owner}
        </div>
      </div>
    </div>
  )
}

export default CreditCard