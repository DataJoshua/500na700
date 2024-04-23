import Button from "../components/Button";
import MenuLink from "../components/MenuLink";
import SimpleLink from "../components/SimpleLink";

function Home() {
  return ( <>
    <div style={{background: "#000", height: "100vh"}}>
      <Button label="Sample" isSecondary/>
      <SimpleLink label="hello" path="/dsd"/>
      <MenuLink label="helo"/>
    </div>
  </>)
}

export default Home;