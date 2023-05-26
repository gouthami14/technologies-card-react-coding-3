// Write your code here.
const CardItem = props => {
  const {sourceObj} = props
  const {title, description, imgUrl, className} = sourceObj

  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="img-card" />
    </li>
  )
}

export default CardItem
