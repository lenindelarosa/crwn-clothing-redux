import {
    ProductCardContainer, 
    FooterContainer, 
    BackgroundImage,
    AddButton,
    Name, 
    Price, 
    StyledPopup,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalImage,
    ModalClose,
    ModalAction
} from './product-card.styles'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
        //alert(`${product.name} was added to the cart.`);
    };
    
    return(
        <ProductCardContainer>
            <StyledPopup modal nested trigger={<BackgroundImage imageUrl={imageUrl} />}>
            {close => (
                <ModalContainer>
                    <ModalClose onClick={close}>
                    &times;
                    </ModalClose>
                    <ModalHeader> 
                        {name} 
                    </ModalHeader>
                    <ModalImage src={imageUrl} alt={`${name}`}/>
                    <ModalContent>
                        Here you'll have the item description. 
                    </ModalContent>
                    <ModalAction>
                    <button
                        onClick={addProductToCart}
                    >
                        Add to cart
                    </button>
                    </ModalAction>
                </ModalContainer>
                )}
            </StyledPopup>
            <FooterContainer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </FooterContainer>
            <AddButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</AddButton>
        </ProductCardContainer>
)};

export default ProductCard;