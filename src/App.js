import Header from './components/Header'
import TipCalculForm from './components/TipCalculForm'
import Card from './components/shared/Card'

function App() {
  return (
    <div className="container">
      <Header />
      <Card>
        <TipCalculForm />
      </Card>
    </div>
  )
}

export default App
