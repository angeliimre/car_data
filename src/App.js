import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {getCars} from "./features/carSlice";
import { megjelenit,elrejt, kiolvas } from './features/carSlice';

function Listbox(){
  const dispatch=useDispatch();
  const tomb=useSelector(state=>state.car.cars);
  const status=useSelector(state=>state.car.status);
  return (
    <div>
        {status=="ok"?<table>
          <th>ID</th>
          <th>Gyártmány</th>
          <th>Model</th>
          <th>Részletek</th>
          {
            tomb.map(function(item,index){
              return <tr>
                <td>{item.id}</td>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td><button onClick={function(){
                  dispatch(kiolvas(item.id));
                  dispatch(megjelenit());
                }}>Részletek</button></td>
              </tr>
            })
          }
          
        </table>:<span></span>}
        <button onClick={function(){dispatch(getCars())}}>Get</button>
    </div>
  );
}

function Detailbox(){
  const vis=useSelector(state=>state.car.visibility);
  const val=useSelector(state=>state.car.value);
  const dispatch=useDispatch();
  return <div onClick={()=>{dispatch(elrejt())}} style={{alignItems:"center",justifyContent:'center',position:"fixed",visibility:vis,left:0,top:0,width:"100%",height:"100vh",display:"inline-flex",background:"rgba(0,0,0,0.5)"}}>
    <div onClick={(e)=>{e.stopPropagation()}} style={{width:'30%',height:"auto",background:"white"}}>
      <h2 style={{textAlign:"center"}}>{val.make+" "+val.model}</h2>
      <p style={{marginLeft:20}}>
        ID: {val.id}<br/>
        Year: {val.year}<br/>
        Make: {val.make}<br/>
        Model: {val.model}<br/>
        Type: {val.type}<br/>
      </p>
      <div style={{textAlign: "center"}}>
      <button onClick={(e)=>{dispatch(elrejt());}}>Bezárás</button>
      </div>
    </div>
  </div>
}

function App() {
  return <>
    <Listbox/>
    <Detailbox/>
  </>
  
}

export default App;
