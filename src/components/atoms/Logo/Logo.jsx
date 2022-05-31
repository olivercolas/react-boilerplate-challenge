import logo from '../../../assets/logo.png'

const Logo = ({width = "128", height = "128"}) => (
    <img src={logo} alt='Primer logo' width={width} height={height} />
)

export default Logo