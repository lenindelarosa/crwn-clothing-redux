import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryDisplay from '../category-display/category-display.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    }, [dispatch]);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path='/:category' element={<CategoryDisplay />}/>
        </Routes>
    );
};

export default Shop;