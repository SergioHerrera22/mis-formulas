import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="/src/assets/logo.png"
          className="mr-3 h-8 sm:h-22"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Fórmulas</NavbarLink>
        <NavbarLink href="#">Marcas</NavbarLink>
        <NavbarLink href="#">Stock</NavbarLink>
        <NavbarLink href="#">Help</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
