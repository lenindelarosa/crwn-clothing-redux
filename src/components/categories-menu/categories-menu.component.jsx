import { CategoriesContainer } from './categories-menu.styles'
import DirectoryItem from '../directory-item/directory-item.component';
import Hats from '../../assets/images/hats.webp';
import Jackets from '../../assets/images/jackets.webp';
import Sneakers from '../../assets/images/sneakers.webp';
import Womens from '../../assets/images/womens.webp';
import Mens from '../../assets/images/men.webp';

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": Hats
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": Jackets
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": Sneakers
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": Womens
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": Mens
  }
];
const CategoriesMenu = () => {

return(
      <CategoriesContainer>
      { categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </CategoriesContainer>   
)};

export default CategoriesMenu;