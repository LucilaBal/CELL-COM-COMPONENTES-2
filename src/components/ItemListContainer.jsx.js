import { Wrapper } from "./Home.jsx"

const ItemListContainer = ({greeting}) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;