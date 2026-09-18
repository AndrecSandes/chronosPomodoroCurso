import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import './assets/styles/theme.css';
import './assets/styles/global.css';

export function App() {
  return (
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>
  );
}; 
