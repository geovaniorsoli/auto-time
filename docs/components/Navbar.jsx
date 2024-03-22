import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Sobre", url: "#sobre" },
    { name: "Documentação", url: "/docs" },
  ];

  return (
    <> 
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <a href="/" className="font-bold text-inherit">Automação para ponto</a>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="/docs" color="secondary" variant="shadow">
              docs
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
