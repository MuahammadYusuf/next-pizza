import Basket from "../components/Basket";
import Navbar from "../components/Navbar";
import Empty from "../components/Empty";

export default function BasketPage() {
    return (
        <div className='container'>
            <Navbar/>
            <Basket/>
        </div>
    );
}
