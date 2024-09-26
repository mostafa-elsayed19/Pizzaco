import { useLoaderData } from "react-router-dom";
import Container from "../../ui/Container";
import MenuItem from "./MenuItem";
import { Pizza } from "../../types/pizzaTypes";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <Container>
      <ul className="mx-auto flex flex-col divide-y-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </Container>
  );
}

export default Menu;
