import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
const handleFavoritesClick = () => {
  console.log('Favorites clicked');
};

const handleComparisonClick = () => {
  console.log('Comparison clicked');

};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Header onFavoritesClick={handleFavoritesClick} 
                onComparisonClick={handleComparisonClick}  /> 
  </StrictMode>,
)
