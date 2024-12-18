import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
    liked: boolean;
  };
  onLike: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ product, onLike, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      (event.target as HTMLElement).closest('.like-icon') ||
      (event.target as HTMLElement).closest('.delete-button')
    ) {
      return;
    }
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description.slice(0, 50)}...</p>
      </div>
      <div className="card-actions">
        <div
          className={`like-icon ${product.liked ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
        >
          {product.liked ? '❤️' : '🤍'}
        </div>
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
