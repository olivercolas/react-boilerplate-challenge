import {Link} from "react-router-dom";

const navlist = [
    {
        path: '/',
        text: 'home'
    },
    {
        path: '/login',
        text: 'login'
    }
]

const Navbar = () => {
    return (
        <header>
            {navlist.map(({path, text}) => (
                <Link key={text} to={path}>{text}</Link>
            ))}
        </header>
    )
}

export default Navbar
