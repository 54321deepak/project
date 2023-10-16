import React from 'react'
import world from '../../images/world.jpg'
import image1 from '../../images/image1.png'
import eye from '../../images/eye.png'
import image2 from '../../images/image2.png'
import right from '../../images/right.png'
import ellipse from '../../images/Ellipse.png'
import play from '../../images/play-button.png'


import './Tutorial.scss'
const Tutorial = () => {
    return (
        <div className='tutorial'>
            <div className='tutorial-left'>
                <div className='tutorial-left-box'><img className='tutorial-left-img1' src={world} /></div>

                <div className='tutorial-left-box1'>
                    <div>
                        <img className='tutorial-left-img2' src={image1} />
                        <div className='tutorial-left-title'>Create multiple artboard by using figma prototyping tools development</div>
                    </div>
                    <div className='tutorial-left-view'>
                        <span><img className='tutorial-left-view-img' src={eye} /></span>
                        <span className='tutorial-left-view-views'>3,532 students watched</span>
                    </div>
                </div>

                <div className='tutorial-left-box2'>
                    <div>
                        <img className='tutorial-left-img3' src={image2} />

                        <div className='tutorial-left-star-box'>
                            <span className='tutorial-left-star'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                            <span className='tutorial-left-star-data'>5.0 (392 reviews)</span>
                        </div>

                    </div>

                    <div className='tutorial-left-box2-title'>Convert your web layout theming easily with sketch zeplin extension</div>

                    <div className='tutorial-left-view'>
                        <span><img className='tutorial-left-view-img' src={eye} /></span>
                        <span className='tutorial-left-view-views'>3,532 students watched</span>
                    </div>
                </div>

                <div className='tutorial-left-box3'>
                    <span ><img className='tutorial-left-box3-image' src={right} /></span>
                    <span className='tutorial-left-box3-title'>Free tutorial</span>
                </div>

                <div className='tutorial-left-box4'>
                    <img className='tutorial-left-img-ellipse' src={ellipse} />
                    <img className='tutorial-left-img-play ' src={play} />
                </div>

            </div>
            <div className='tutorial-right'>
                <div className='tutorial-right-start'>Free tutorial</div>
                <div className='tutorial-right-middle-1'>More than  thousand of free tutorial upload every weeks</div>
                <div className='tutorial-right-middle-2'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</div>
                <div className='tutorial-right-end'>Explore details</div>
            </div>
        </div>
    )
}

export default Tutorial