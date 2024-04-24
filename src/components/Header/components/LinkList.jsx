import MenuLink from "../../MenuLink";
import SimpleLink from "../../SimpleLink";

function LinkList() {
  return ( 
    <>
      <MenuLink label="Пункт 1">
        <SimpleLink label="О 500на700" path="/some"/>
        <SimpleLink label="Документы" path="/"/>
        <SimpleLink label="Команда" path="/some"/>
        <SimpleLink label="Стратегия" path="/"/>
      </MenuLink>
      <MenuLink label="Пункт 2">
        <SimpleLink label="О 500на700" path="/some"/> 
        <SimpleLink label="Документы" path="/"/>
        <SimpleLink label="Команда" path="/some"/>
        <SimpleLink label="Стратегия" path="/"/>
      </MenuLink>
      <SimpleLink label="Пункт 3"/>
      <SimpleLink label="Пункт 4"/>
      <SimpleLink label="Пункт 5"/>
    </>
  )
}

export default LinkList;