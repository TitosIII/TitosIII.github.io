import {Route, Routes} from 'react-router-dom';
import Index from './Pages';
import { AudioVisualizer } from './Pages/Components/Audio';


const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Index/>}/>
      <Route path='/' element={<Index/>}/>
    </Routes>
  );
}

export default App;
