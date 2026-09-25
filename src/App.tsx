import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/theme.css';
import './assets/styles/global.css';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';



export function App() {
  return (
  <>
  <TaskContextProvider>
    <MessagesContainer>
      <MainRouter/>
    </MessagesContainer>
  </TaskContextProvider>
  </>
  );
}
