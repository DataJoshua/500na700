import MenuLink from "../../MenuLink";
import SimpleLink from "../../SimpleLink";
import { nanoid } from "nanoid";

function LinkList() {
  const menuLink1 = [
    {
      key: nanoid(),
      label: "О 500на700",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Документы",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Команда",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Стратегия",
      path: "#"
    }
  ]

  const menuLink2 = [
    {
      key: nanoid(),
      label: "О 500на700 2",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Документы 2",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Команда 2",
      path: "#"
    },
    {
      key: nanoid(),
      label: "Стратегия 2",
      path: "#"
    }
  ]

  const simpleLinks = [
    {key: nanoid(), label: "Пункт 3", path: "/"},
    {key: nanoid(), label: "Пункт 4", path: "/"},
    {key: nanoid(), label: "Пункт 5", path: "/"}
  ]

  const handleOnHover = (e) => {
    // TODO: complete on hover action
  }

  return ( 
    <>
      <MenuLink label="Пункт 1" handleOnHover={handleOnHover}>
        {menuLink1.map(val=> <SimpleLink {...val} />)}
      </MenuLink>
      <MenuLink label="Пункт 2" handleOnHover={handleOnHover}>
        {menuLink2.map(val=> <SimpleLink {...val} />)}
      </MenuLink>
      {simpleLinks.map(val=> <SimpleLink {...val} />)}
    </>
  )
}

export default LinkList;
