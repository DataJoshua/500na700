import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import MenuLink from "../components/MenuLink";
import SimpleLink from "../components/SimpleLink";
import Tag from "../components/Tag";

function Home() {
  return ( <>
    <div style={{background: "#000", height:"100vh"}}>
      <Button label="Sample" isSecondary/>
      <SimpleLink label="hello" path="/dsd"/>
      <MenuLink label="helo"/>
      <Tag label="component"/>
      <Checkbox name="some"/>
      <Input name="hello" placeholder="dasd"/>
    </div>
  </>)
}

export default Home;
