
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header/Header';
import Nav from '../Components/Header/Nav';
import LatestNews from '../Components/LatestNews/LatestNews';
import LeftSide from '../Components/Homelayout/LeftSide';
import RightSide from '../Components/Homelayout/RightSide';
import Loader from '../Pages/Loader';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div className='w-11/12 mx-auto '>
            <header >
                <Header></Header>
                <LatestNews></LatestNews>
                <Nav></Nav>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky h-fit top-4 '>
                    <LeftSide></LeftSide>
                </aside>
                <section className='col-span-6'>
                    {state == 'loading' ? <Loader></Loader> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky h-fit top-4 '>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;