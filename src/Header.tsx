import React from 'react';

interface HeaderProps {
    onFavoritesClick: () => void;
    onComparisonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFavoritesClick, onComparisonClick }) => {
    return (
        <header>
            <h1>Pockemon's list</h1>
            <button onClick={onFavoritesClick}>Favorites</button>
            <button onClick={onComparisonClick}>Comparison</button>
        </header>
    );
};

export default Header;