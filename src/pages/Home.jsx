import Button from "../components/Button";
import MenuLink from "../components/MenuLink";
import SimpleLink from "../components/SimpleLink";
import Tag from "../components/Tag";

function Home() {
  return ( <>
    <div style={{background: "#000", height: "100vh"}}>
      <Button label="Sample" isSecondary/>
      <SimpleLink label="hello" path="/dsd"/>
      <MenuLink label="helo"/>
      <Tag label="component"/>
    </div>
  </>)
}

export default Home;