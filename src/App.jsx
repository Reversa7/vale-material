import './App.css'

function App() {

  return (
    <>
      <div>
        <p>Hello World!</p>
      </div>
      <Text display="what up" />
      <Text display="hello" />
    </>
  )
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
