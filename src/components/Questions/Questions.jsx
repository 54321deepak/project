import React from 'react'
import plus from '../../images/plus.jpg'
import minus from '../../images/minus.png'
import './Questions.scss'
const Questions = () => {
    return (
        <div className='questions'>
            <div className='questions-top'>Frequent Question</div>
            <div className='questions-title'>Do you have any question</div>
            <div className='questions-descriptions'>
                <div className='questions-box '>
                    <span ><img className='questions-logo' src={plus} /></span>
                    <span className='questions-question'>How to contact with riders emergency ?</span>
                </div>
                {/* <div className='questions-divider'></div> */}
                <div className='questions-box '>
                    <span ><img className='questions-logo' src={plus} /></span>
                    <span className='questions-question'>App installation failed, how to update system information?</span>
                </div>
                {/* <div className='questions-divider'></div> */}
                <div className='questions-box-ans '>
                    <div>
                        <span><img className='question-logo' src={minus} /></span>
                        <span className='questions-question'>Website reponse taking time, how to improve?</span>
                    </div>
                    <div className='questions-answer'>An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</div>
                </div>
                {/* <div className='questions-divider'></div> */}
                <div className='questions-box '>
                    <span><img className='question-logo' src={plus} /></span>
                    <span className='questions-question'>New update fixed all bug and issues</span>
                </div>
                {/* <div className='questions-divider'></div> */}
            </div>
        </div>
    )
}

export default Questions