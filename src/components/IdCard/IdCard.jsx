import './IdCard.css';

const MemberValuePair = ({ title, value }) => {
  return (
    <p><strong>{title}: </strong>{value}</p>
  )
}

const IdCard = ({ firstName, lastName, gender, birth, height, picture }) => {
  const renderValue = (title, value) => {
    return (
      <p><strong>{title}: </strong>{value}</p>
    )
  }

  return (
    <div className="IdCard">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <MemberValuePair title="First name" value={firstName} />
        {renderValue('Last name', lastName)}
        {renderValue('Gender', gender)}
        {renderValue('Height', height)}
        {renderValue('Birth', birth.toDateString())}
      </div>
    </div>
  )
}

export default IdCard;