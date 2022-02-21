import { BrowserRouter } from 'react-router-dom';
import Layouts from './components/layout/Layouts';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <BrowserRouter>
            <Layouts>
                <AppRoutes />
            </Layouts>
        </BrowserRouter>
    );
}
export default App;
