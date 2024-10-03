import CreateUser from "../features/users/CreateUser";
import Container from "./Container";

function Home() {
  return (
    <Container display="text-center">
      <h1 className="mb-8 text-xl font-semibold text-text-color md:text-3xl">
        The best pizza.
        <br />
        <span className="text-accent-color">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </Container>
  );
}

export default Home;
