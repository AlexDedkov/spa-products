import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/productsSlice';
import { RootState } from '../redux/store';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.products.filter);

  return (
    <div className="filters">
      <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => dispatch(setFilter('favorites'))} disabled={filter === 'favorites'}>
        Favorites
      </button>
    </div>
  );
};

export default Filters;
