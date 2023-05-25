import  Card  from "./Components/Card";
import Start  from './Components/Start';


function App() {
  return (
    <div className="App">
       <div className="Start">
         <Start/>
       </div>
       <div className="Card">
         <div className="row">
           <div className="col">
             <Card
            titulo = "card1"
            texto = "With the app,  as a client you can reserve a place to stop or if your are an admnistrator ,you can register a client"
            imagen = 'app.png'
            />
          </div>
          <div className="col">
            <Card
            titulo = "card2"
            texto = "Your datas are protected and is safe"
            imagen = 'seguridad.png'
            />
          </div>
          <div className="col">
            <Card
            titulo = "card3"
            texto = "We offer a special customer service representative"
            imagen = 'mano.JPG'
            />
          </div>
        </div>
      </div>
    </div>
  )
  }
export default App;

