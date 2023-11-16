import Chef from '../../public/img/chef.png'
import Meat from '../../public/img/meat.jpg'
import Catering from '../../public/img/catering.jpg'
import Footer from '../components/footer'
import RicePlate from '../../public/img/riceplate.jpg'
import view from '../../public/img/gren.jpeg';
import IG from '../../public/img/instagram.png'
import FB from '../../public/img/fb.png'
const Home = () => {

    return (
        <div className="flex flex-col pt-14 font-serif">
            <div className="w-full bg-cover bg-center h-96 bg-view">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-60">
                    <div className="text-center">
                        <p className="text-white text-md lg:text-2xl md:text-3xl m-3">Dre Flavors - Restaurant and Catering</p>
                        <p className="text-white text-md lg:text-2xl md:text-3xl m-3">Grenville, Grenada</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center p-8 bg-amber-200'>
                <div className='p-8 pb-10'>
                    <p className='text-gray-700 text-md lg:text-2xl md:text-3xl text-center underline'>For your Dining and catering needs...</p>
                </div>
                <div className='flex flex-row justify-center p-4 pb-10 flex-wrap'>
                    <img className='h-80 rounded-lg border-black m-4' src={Meat} alt="image" />
                    <img className='h-80 rounded-lg border-black m-4' src={Catering} alt="image" />
                    <img className='h-80 rounded-lg border-black m-4' src={RicePlate} alt="image" />
                </div>
            </div>
            <div className='flex flex-col p-6 pt-12 bg-sky-50'>
                <div className='my-4'>
                    <p className='underline text-md lg:text-2xl md:text-3xl text-center'>Hours of service and Location</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center p-4 pt-12'>
                    <div className='flex flex-col items-center justify-center p-4'>
                        <p>Wednesday-Saturday - </p>
                        <p>12pm to 9:30pm</p>
                        <p>Sunday - </p>
                        <p>12pm to 6:30pm</p>
                        <div className='flex my-1'>
                            <a href="https://www.instagram.com/dre_flavors1174/" target='none'><img src={IG} alt="ig" className='h-8 mx-1' /></a>
                            <a href="https://www.facebook.com/profile.php?id=100088988448536" target='none'><img src={FB} alt="fb" className='h-8 mx-1' /></a>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8899.430537341206!2d-61.615180559016316!3d12.131878537235167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381771cc8005d1%3A0x4e9dec3d74ad7b8f!2sDre%20Flavors%20Restaurant%20%26%20Catering%20Services!5e0!3m2!1sen!2snl!4v1697746276349!5m2!1sen!2snl" width="400" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
