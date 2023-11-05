import img from "./img.png" 
function Header(){
    return(
        <header>
        <img className="logo" src={img}></img>
        <h1>My Shop</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}
export default Header