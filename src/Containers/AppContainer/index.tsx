import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarComponent from '../../Components/BarComponent';
import HomeScreen from '../../Screens/HomeScreen';
import NotFoundScreen from '../../Screens/NotFoundScreen';
import ItemScreen from '../../Screens/ItemScreen';

const AppContainer = () => {
    return (
        <Router>
            <BarComponent />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/items" element={<ItemScreen />} />
                {/* handle not found page */}
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Router>
    );
};

export default AppContainer;