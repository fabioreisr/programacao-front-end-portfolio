import imageProfile from '../../assets/images/fabio.jpeg';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className='bg-customBlue'>
            <div className='mx-auto container px-2 sm:px-6 lg:px-8'>
                <div className='flex flex-col justify-center items-center py-4 md:flex-row'>
                    <div className='flex-1 text-justify'>
                        <h1 className='text-4xl font-bold text-customRed mb-2'>Fabio Reis Ribeiro</h1>
                        <h2 className='text-2xl font-semibold text-gray-300 mb-4'>Estudante de ADS</h2>
                        <p className='text-gray-400 mb-4'>
                            Formado em Educação Física (Licenciatura e Bacharelado) pela Universidade Federal de Alagoas (UFAL)
                            Estudante na Universidade Tiradentes (UNIT) no curso Análise e Desenvolvimento de Sistemas (ADS),
                            com foco em desenvolvimento de sistemas.
                        </p>
                        <div className='flex justify-center space-x-4'>
                            <a href="https://github.com/your-github-username" target="_blank" className='text-gray-400 hover:text-white'>
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/fabio-reis-9544a097/" target="_blank" className='text-gray-400 hover:text-white'>
                                <FaLinkedin size={32} />
                            </a>
                            <a href="https://wa.me/your-whatsapp-number" target="_blank" className='text-gray-400 hover:text-white'>
                                <FaWhatsapp size={32} />
                            </a>
                        </div>
                    </div>
                    <div className='flex-1 px-5 mt-10'>
                        <img src={imageProfile} alt="Profile Image" className='img-profile rounded-full border-4 border-gray-700 w-full' />

                    </div>
                </div>
            </div>
        </section>
    );
}