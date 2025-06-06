import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json')
.then(res => res.json());

function App() {

  // const bottles = [
  //   {  id:1, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   {  id:2, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   {  id:3, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   {  id:4, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   {  id:5, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   {  id:6, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  // ]
   

  return (
    <>
       
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback = {<h3>Bottles are loading....</h3>}>
        <Bottles bottlesPromise = {bottlesPromise}>

        </Bottles>
      </Suspense>
       
    </>
  )
}

export default App
