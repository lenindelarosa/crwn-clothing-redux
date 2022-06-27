import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from '../../components/spinner/spinner.component';

import { CategoryDisplayContainer, Title, ProductContainer} from './category-display.styles';
import ProductCard from '../../components/product-card/product-card.component';

const CategoryDisplay = () => {

const { category } = useParams();
const categoriesMap = useSelector(selectCategoriesMap);
const isLoading = useSelector(selectCategoriesIsLoading);
const products = categoriesMap[category];

// useEffect(() => {
//     setProducts(categoriesMap[category]);
// }, [category, categoriesMap]);

return(
    <CategoryDisplayContainer>
        <Title>{category.toUpperCase()}</Title>
        {
            isLoading ? <Spinner /> : (
                <ProductContainer>    
                    {
                        products && products        //safegard in case products is not loaded yet. 
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))
                    }
                </ProductContainer> 
            )
        }
    </CategoryDisplayContainer>

)};

export default CategoryDisplay;