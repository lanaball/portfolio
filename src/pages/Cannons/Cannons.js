// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_cannons.scss';

// IMAGES
import cannonsImage from '../../assets/images/cannons/CannonsMock.png'

export default function Cannons() {

    const pageTitle = "Cannons For Sale"

    return (
        <>
            <div className='main-page'>
                <BackButton pageTitle={pageTitle} />

                <main className='main-page__body'>
                    <div>
                        <img className='main-page__image' src={cannonsImage} alt="" />
                    </div>

                    <div className='content'>
                        <div>
                            <h2></h2>

                            <section>
                                <h2>Coming Soon</h2>
                        
                          
                            </section>

                        

                            <div className='content__box'>
                           
                               
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};