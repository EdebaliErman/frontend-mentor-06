import Card from "./Components/Card/Card";
import { data } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Card
        head={data.head}
        headIn={data.headIn}
        paragraph={data.paragraph}
        component={data.table.component}
        queries={data.table.queries}
        templates={data.table.templates}
        img={data.img}
      />
    </div>
  );
}

export default App;
