import './AboutSection.scss';
import ButtonAnimation from '../../Utils/ButtonAnimation/ButtonAnimation';

const AboutSection = () => {
  return (
    <section className='about-section' id='about'>
        <h2 className="section-title"><span>ABOUT </span>US</h2>
        <div className="content">
            <div className="image"></div>
            <div className="description">
                <h3 className="title">What makes our coffee special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde doloremque ad obcaecati pariatur voluptatum voluptates deserunt, natus error quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quo? lorem?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <ButtonAnimation title='Learn More'/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection