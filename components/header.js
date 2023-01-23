import NavbarPrincipal from './navbar/navbar_principal';
import NavbarSecundario from './navbar/navbar_secundario';
import Slider from './slider';

export default function header(props) {
  console.log(props.type)
  return (
    <nav>
      {props.type == undefined && <NavbarPrincipal />}
      {props.type != undefined && <NavbarSecundario />}
      {props.type == undefined && <Slider />}
    </nav>
  )
}
