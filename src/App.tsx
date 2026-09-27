import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { ThemeContextProvider } from '../src/contexts/TaskContext/ThemeContext/themeContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/theme.css';
import './assets/styles/global.css';

export function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <MessagesContainer>
          <MainRouter />
        </MessagesContainer>
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}