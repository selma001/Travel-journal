import Nav from "./nav"
import Card from "./card"
import data from "./data"

function App() {

  
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Nav/>
      <section className="cards-list">
         {cards}  
      </section>
    </div>
  )
}

export default App;
