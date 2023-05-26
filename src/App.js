import { nanoid } from 'nanoid';
import './App.css';
import Card from './components/Card/Card';
import CardLIst from './components/CardList/CardLIst';
import Collapse from './components/Collapse/Collapse';

function App() {
  const cards = [
    {
      title: "Card title",
      url: "https://avatarzo.ru/wp-content/uploads/category_flowers_300x300.jpg",
      nameImg: "beautiful flower",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/"
    }, {
      title: "Special title treatment",
      text: "With supporting text below as a natural lead-in to additional content.",
      link: "https://example.com/"
    }, {
      title: "Card title",
      url: "https://avatarzo.ru/wp-content/uploads/category_flowers_300x300.jpg",
      nameImg: "beautiful flower",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/"
    },
  ]

  return (
    <>
      <CardLIst id="cards" items={cards}>
        {items => items.map((item) => <Card key={nanoid()}>{item}</Card>)}
      </CardLIst>
      
      <Collapse collapsedLabel="Развернуть" expandedLabel="Свернуть" />
    </>
    
  );
}

export default App;
