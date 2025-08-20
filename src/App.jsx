import './App.css'
import Clock from './components/Clock'
import PunchForm from './components/PunchForm'
import PunchesTable from './components/PunchesTable'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Clock />
        <PunchForm />
        <PunchesTable />
      </div>
    </div>
  )
}

export default App