import './HomeSection.scss';
import ButtonAnimation from '../../Utils/ButtonAnimation/ButtonAnimation';

const HomeSection = () => {
  return (
    <section className="home-section" id="home">
        <div className="inner">
            <h3 className='title'>fresh Coffee in <br />the morning</h3>
            <p className='decription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores tempora adipisci molestiae.</p>
            <ButtonAnimation title='Get it Now'/>
        </div>
    </section>
  )
}

export default HomeSection