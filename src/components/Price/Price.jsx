import React from 'react'
import './Price.scss'
import right from '../../images/gright.png'
import wrong from '../../images/gwrong.png'

const Price = () => {
    return (
        <div className='pricing'>
            <div className='pricing-plan'>Pricing Plan</div>
            <div className='pricing-choose'>Choose your pricing policy</div>
            <div className='pricing-choose-plan'>
                <div className='pricing-choose-month'>Monthly Plan</div>
                <div className='pricing-choose-year'>Annual Plan</div>
            </div>
            <div className='plans'>
                <div className='plan-free '>
                    <div className='free-top'>Free Plan</div>
                    <div className='free-title'>For Small teams or office</div>
                    <div className='free-body'>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Ultimate access to all course, exercises and assessments</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Free acess for all kind of exercise corrections with downloads.</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Total assessment corrections with free download access system</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={wrong} /></span>
                            <span className='free-body-text-worng'>Unlimited download of courses on the mobile app contents</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={wrong} /></span>
                            <span className='free-body-text-worng'>Download and print courses and exercises in PDF</span>
                        </div>
                    </div>
                    <div className='free-button'>Start free trail</div>
                </div>
                <div className='premium-plan'>
                    <div className='plan-recommanded'>Recommended</div>
                    <div className='plan-premium'>
                        <div className='plan-premium-left'>
                            <div className='premium-top'>Premium</div>
                            <div className='premium-title'>For startup enterprise</div>
                        </div>
                        <div className='plan-premium-right '>
                            <div className='plan-range'>Starting from</div>
                            <div className='plan-price-month'>49.99/mo</div>
                        </div>
                    </div>

                    <div className='free-body'>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Ultimate access to all course, exercises and assessments</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Free acess for all kind of exercise corrections with downloads.</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Total assessment corrections with free download access system</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Unlimited download of courses on the mobile app contents</span>
                        </div>
                        <div className='free-body-box'>
                            <span><img className='free-body-img' src={right} /></span>
                            <span className='free-body-text'>Download and print courses and exercises in PDF</span>
                        </div>
                    </div>
                    <div className='free-button'>Start free trail</div>
                </div>

            </div>
        </div>
    )
}

export default Price