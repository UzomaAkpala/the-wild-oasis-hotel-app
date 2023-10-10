import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  //background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>;
            <Heading as="h2">Check in and out</Heading>;
            <Button
              variation="primary"
              size="medium"
              onClick={() => alert("Check in")}
            >
              Check in
            </Button>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("Check out")}
            >
              Check out
            </Button>
          </Row>
          <Heading as="h3">Form</Heading>;
          <Row type="vertical">
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
