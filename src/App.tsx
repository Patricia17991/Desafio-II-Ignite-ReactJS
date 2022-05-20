import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return ( //componentes filhos (sidebar e content)
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>   
      <Content/>  
    </div>
  )
}
//o App é o pai comum dos dois componentes
//os estados vão ficar dentro do App.tsx
