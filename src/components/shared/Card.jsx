function Card({ children, version }) {
  return <div className={`card card-${version}`}>{children}</div>
}

export default Card
