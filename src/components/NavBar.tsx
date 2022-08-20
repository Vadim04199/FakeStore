import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export function NavBar() {
   return(
       <Navbar bg="primary" variant="dark" className="fixed h-[50px] w-full flex px-5 bg-blue-500 items-center text-white">
           <Container>
               {/*<Navbar.Brand href="/">FakeShop</Navbar.Brand>*/}
                   <span className="text-2xl">
                       FakeShop
                   </span>
               <span className="fixed right-0 item-center text-white py-2 px-4 bg-blue-500">
                   <Link to="/" className="mr-2"> Каталог </Link>
                   <Link to="/about" className="mr-2"> О магазине </Link>
                   <Link to="/basket"  className="mr-2"> Корзина </Link>
                   {/*<Link to="/registration"> Регистрация </Link>*/}
                   <Link to="/auth"  className="mr-2"> Вход </Link>
               </span>
           </Container>
       </Navbar>
   )
}