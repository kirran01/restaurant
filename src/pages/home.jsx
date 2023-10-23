import Chef from '../../public/img/chef.png'
import Meat from '../../public/img/meat.jpg'
import Catering from '../../public/img/catering.jpg'
import RicePlate from '../../public/img/riceplate.jpg'
import view from '../../public/img/view.jpg';
const Home = () => {
    return (
        <div className="flex flex-col pt-16">
            <div className="w-full bg-cover bg-center h-60 bg-view">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <p className="text-white text-md lg:text-2xl md:text-3xl m-3">Dre Flavors - Restaurant and Catering</p>
                        <p className="text-white text-md lg:text-2xl md:text-3xl m-3">Offering Counseling/Therapy services across the Caribbean for all ages</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <img className='h-80 m-2 rounded-lg border-black' src={Meat} alt="meat" />
                <img className='h-80 m-2 rounded-lg border-black' src={Catering} alt="catering" />
                <img className='h-80 m-2 rounded-lg border-black' src={RicePlate} alt="riceplate" />
            </div>
            <div>
                <div>
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8899.430537341206!2d-61.615180559016316!3d12.131878537235167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381771cc8005d1%3A0x4e9dec3d74ad7b8f!2sDre%20Flavors%20Restaurant%20%26%20Catering%20Services!5e0!3m2!1sen!2snl!4v1697746276349!5m2!1sen!2snl" width="400" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
                </div>
            </div>
        </div>
    );
}

export default Home;
