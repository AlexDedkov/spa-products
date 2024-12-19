import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейс для одного продукта
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
}

// Состояние продуктов
interface ProductsState {
  items: Product[];
  filter: 'all' | 'favorites'; // Фильтр для отображения всех или избранных продуктов
}

// Начальное состояние
const initialState: ProductsState = {
  items: [],
  filter: 'all',
};

// Создание среза
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      // Объединяем загруженные данные с локальными
      const newItems = action.payload.filter(
        (apiProduct) => !state.items.some((item) => item.id === apiProduct.id)
      );
      state.items = [...state.items, ...newItems];
    },

    // Переключение статуса лайка
    toggleLike(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },

    // Удаление продукта по id
    deleteProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Установка фильтра (все продукты или избранные)
    setFilter(state, action: PayloadAction<'all' | 'favorites'>) {
      state.filter = action.payload;
    },
  },
});

// Экспорт экшенов и редюсера
export const { addProduct, setProducts, toggleLike, deleteProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
