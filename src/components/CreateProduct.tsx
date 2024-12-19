import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  title: string;
  description: string;
  image: string;
}

const CreateProduct: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newProduct = {
      id: Date.now(), // Генерация уникального ID
      ...data,
      liked: false, // Добавляем начальное значение для свойства liked
    };
    dispatch(addProduct(newProduct));
    navigate('/products'); // Переход на страницу продуктов
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '500px', margin: 'auto' }}>
      <div>
        <label>Название продукта</label>
        <input
          type="text"
          {...register('title', { required: 'Название обязательно' })}
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>
      <div>
        <label>Описание</label>
        <textarea
          {...register('description', { required: 'Описание обязательно' })}
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
      </div>
      <div>
        <label>Ссылка на изображение</label>
        <input
          type="url"
          {...register('image', { required: 'Ссылка на изображение обязательна' })}
        />
        {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
      </div>
      <button type="submit">Создать продукт</button>
    </form>
  );
};

export default CreateProduct;
