import './button.css'

const Button = ({ label, clickAlert }) => (
  <button className="btn" onClick={() => clickAlert(label)}>
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Clique aqui'
}

export { Button }
