import React from 'react'
import './History3.css';

import tor1 from './Img/tor1.png';
import rect4 from './Img/rect4.png';
import frame7 from './Img/frame7.png';

const History3 = () => {
  return (
    <div className='history3'>
        <div className='history3col1'>
            <h2>Info</h2>
            <button><img src={tor1}/><p>Save as CSS</p></button>
        </div>
        <div className='history3col2'>
            <p>USD-M</p>
            <p>COIN-M</p>
        </div>
        <div className='history3col3'>
            <p>Real-Time Funding Rate</p>
            <p>Funding Rate History</p>
            <p>Insurance Fund History</p>
            <p>Index</p>
            <p>Trading Data</p>
            <p>Funding Rate Arbitrage</p>
        </div>
        <div className='history3col4'>
            <div>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> BTCUSDT Perpetual </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <p><a href='#'>Learn more about funding rate</a></p>
        </div>
        <div className='history3col5'>
            <p>Funding Rate: 0.010000%</p>
            <div className='history3col2'>
                <p>Last 7 days</p>
                <p>Last 14 days</p>
            </div>
        </div>
        <img src={frame7} className='history3col6'/>
        <div className='history3col7'>
            <div>
                <p>Favourites</p>
                <p>Spot Markets</p>
                <p>New Listing</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div>
                <p>2022-08-11 01:00:00</p>
                <p className='history3margin'>8h</p>
                <p>0.010000%</p>
            </div>
            <div className='stat3col2'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <img src={rect4}/>
                </div>
        </div>
    </div>
  )
}

export default History3