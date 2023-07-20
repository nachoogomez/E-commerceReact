import React from 'react';
import { CardCategoria } from './CategoriasStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Categoria = ({title, category}) => {

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CardCategoria
         whileTap={{ scale: 0.95 }}
         selected={category === selectedCategory}
         onClick={() => dispatch(selectCategory(category)) }
    >
        <h2>{title}</h2>
    </CardCategoria>
  )
}

export default Categoria