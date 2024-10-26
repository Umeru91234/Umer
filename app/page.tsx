import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
    return (
        <div className='bg-gradient-to-r from-yellow-500 via-green-500 to-blue-300 p-5 text-white shadow-lg'>
            <Header />
            <h1 className='text-1xl m-5 font-bold transition-transform duration-500 ease-in-out'><center>Creative Hero Section</center></h1>
            <Footer />
        </div>
    );
}