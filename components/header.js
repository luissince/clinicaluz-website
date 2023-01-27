import NavbarPrincipal from './navbar/navbar_principal';
import NavbarSecundario from './navbar/navbar_secundario';
import NavbarPrueba from './navbar/navbar_pruebal';
import Slider from './slider';

export default function header(props) {
  return (
    <nav>
      {props.type == undefined && <NavbarPrincipal />}
      {/* {props.type == undefined && <NavbarPrueba />} */}
      {props.type != undefined && <NavbarSecundario />}
      {props.type == undefined && <Slider />}
    </nav>
  )
}
