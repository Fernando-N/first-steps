import './button.css'

const Button = ({ Label, toUppercase }) => (
  <button className="btn">{Label}</button>
)

Button.defaultProps = {
  Label: 'Clique aqui'
}

export { Button }
