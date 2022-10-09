import './App.css';
import Image from "./Image"
import Header from "./Header"
import Content from './Content';
import Contact from './Contact'
function App() {
  const imageLink = "https://static01.nyt.com/images/2022/08/25/science/25DogDementia-08/25DogDementia-08-mobileMasterAt3x.jpg"
  const name = "Hai"
  const position = "Developer"
  const websiteUrl = "http://www.nyt.com"
  const contentJson = {
    About: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, iste. Cum nihil alias commodi deserunt tempore praesentium vero eveniet beatae, ducimus odio recusandae.",
    Interests: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta velit aliquam totam explicabo illo saepe, quam ullam excepturi nobis ea."
  }
  return (
    <div className="App">
        <Image imageLink={imageLink}/>
        <Header 
          name={name}
          position={position}
          websiteUrl={websiteUrl}
        />
        <Content 
          contentJson={contentJson}
        />
        <Contact />
    </div>
  )
}

export default App;
