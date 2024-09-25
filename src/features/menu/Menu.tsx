import { useDataFetch } from "../../hooks/useDataFetch";
import { getMenu } from "../../services/apiRestaurant";
import Container from "../../ui/Container";
import Loader from "../../ui/Loader";
import MenuItem from "./MenuItem";

function Menu() {
  const { data: menu, loading } = useDataFetch(getMenu);
  console.log(menu, loading);

  if (loading) return <Loader />;

  return (
    <Container>
      <ul className="mx-auto flex flex-col divide-y-2">
        {menu?.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
      </ul>
    </Container>
  );
}

export default Menu;
