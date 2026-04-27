
import './App.css'

function App() {


  return (
    <div>
      <h1 className='text-red-500'>hello devs</h1>
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    </div>
  )
}

export default App
