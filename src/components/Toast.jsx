export default function Toast({ message }) {
  return (
    <div className="toast">
      <i className="fa-solid fa-circle-check"></i>
      <span>{message}</span>
    </div>
  )
}
