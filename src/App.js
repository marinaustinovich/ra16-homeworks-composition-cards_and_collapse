import { nanoid } from "nanoid";
import "./App.css";

import { cards } from "./data";
import { CardLIst } from "./components/CardList/CardLIst";
import { Card, Collapse } from "./components";

const App = () => (
  <>
    <CardLIst id="cards">
      {cards.map((card) => (
        <Card key={nanoid()} item={card} />
      ))}
    </CardLIst>

    <Collapse collapsedLabel="Развернуть" expandedLabel="Свернуть" />
  </>
);

export default App;
