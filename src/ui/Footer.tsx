import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-main-color text-text-color">
      <Container display="flex flex-col md:flex-row gap-2 justify-between text-sm ">
        <p>
          Created with ❤️ by <span className="uppercase">mostafa</span>
        </p>
        <p>
          Design inspired by{" "}
          <span className="uppercase">jonas schmedtmann</span>
        </p>
        <p>&copy; Copyrights Pizzaco CO.</p>
      </Container>
    </footer>
  );
}

export default Footer;
