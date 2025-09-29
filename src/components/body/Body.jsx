import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Body.css'

function Body() {
    return (
        <section className="body">
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={1}>
                    <div className='image-parallax'>

                    </div>
                </ParallaxLayer>
            </Parallax>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi quas debitis nam ipsum facilis qui aut consequatur ea quaerat. Provident nostrum a perspiciatis fugit ullam animi similique, recusandae facere!
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, incidunt. Odit maiores eveniet mollitia, repellat excepturi fugiat, iste, suscipit quibusdam cum omnis aperiam non libero? Nemo incidunt expedita quibusdam at.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi quas debitis nam ipsum facilis qui aut consequatur ea quaerat. Provident nostrum a perspiciatis fugit ullam animi similique, recusandae facere!
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, incidunt. Odit maiores eveniet mollitia, repellat excepturi fugiat, iste, suscipit quibusdam cum omnis aperiam non libero? Nemo incidunt expedita quibusdam at.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi quas debitis nam ipsum facilis qui aut consequatur ea quaerat. Provident nostrum a perspiciatis fugit ullam animi similique, recusandae facere!
                </p>
            </div>
        </section>
    )
}

export default Body