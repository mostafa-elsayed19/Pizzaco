import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

function Home() {
  const user = true;
  return (
    <Container display="text-center">
      <h1 className="mb-8 text-xl font-semibold text-text-color md:text-3xl">
        The best pizza.
        <br />
        <span className="text-accent-color">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user ? (
        <Button type="primary" to={"/menu"}>
          Start Ordering
        </Button>
      ) : (
        <Input type="text" placeholder="Your full name" />
      )}
    </Container>
  );
}

export default Home;
