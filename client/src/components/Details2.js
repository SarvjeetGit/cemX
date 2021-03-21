import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Doughnut } from 'react-chartjs-2';
import Moment from 'react-moment';

export default function Details2(info) {
    console.log(info.name);
    const Completionist = () => (
        <span style={{ color: 'red' }}>Your Payments are due!!</span>
    );
    if (info.name === undefined) {
        return (
            <Fragment>
                <div className='container' style={{ height: '100%' }}>
                    <div
                        className='card '
                        style={{
                            border: 'none',
                            fontSize: '25px',
                        }}
                    >
                        <strong>
                            Sorry, we could not find your number :({' '}
                        </strong>
                    </div>
                </div>
            </Fragment>
        );
    }
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <Fragment>
                    <div
                        className='counter'
                        style={{
                            color: '#841f27',
                            fontSize: '27px',
                            fontWeight: 'bolder',
                        }}
                    >
                        <i>{days >= 10 ? days : `0${days}`}:</i>
                        <i>{hours >= 10 ? hours : `0${hours}`}:</i>
                        <i>{minutes >= 10 ? minutes : `0${minutes}`}:</i>
                        <i>{seconds >= 10 ? seconds : `0${seconds}`}</i>
                    </div>
                </Fragment>
            );
        }
    };
    var due = info.due;
    var paid = info.paid;
    const data2 = {
        labels: [`due`, `paid`],
        datasets: [
            {
                data: [due, paid],
                backgroundColor: [
                    'rgba(132,31,39, 0.8)',
                    'rgba(151,140,149,0.5)',
                ],
                borderColor: ['rgba(132,31,39,1)', 'rgba(151,140,149,1)'],
                hoverBackgroundColor: [
                    'rgba(132,31,39,1)',
                    'rgba(169,169,169,1)',
                ],
                borderWidth: '2',
                weight: '1',
            },
        ],
    };
    let fname = info.name.split(' ');
    return (
        <Fragment>
            <section className='container' style={{ paddingBottom: '20px' }}>
                <div>
                    <strong style={{ color: 'gray' }}>Hello,</strong>
                    <br />
                    <strong style={{ color: 'gray', fontSize: '20px' }}>
                        {fname[0]}
                    </strong>
                    {'  '}
                    <strong
                        style={{ color: 'rgb(132,31,39)', fontSize: '24px' }}
                    >
                        {fname[1]}
                    </strong>
                </div>
            </section>
            <section className='container'>
                <div className='row ' style={{ position: 'relative' }}>
                    <div className='chartcont col-12'>
                        <Countdown date={info.duedate} renderer={renderer} />
                        <div className='countholder'>
                            <strong
                                style={{
                                    color: 'gray',
                                    fontSize: '24px',
                                    fontStyle: 'italic',
                                }}
                            >
                                dd:hh:mm:ss
                            </strong>
                        </div>
                        <Doughnut
                            data={data2}
                            width={50}
                            height={50}
                            legend={{ display: false }}
                        />
                    </div>
                </div>
                {/* <div
                    className='card-footer'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span className='badge badge-danger'>Due:{info.due}₹</span>
                    <span className='badge badge-success'>
                        Paid:{info.paid}₹
                    </span>
                </div>
                <div className='row' style={{ paddingTop: '20px' }}>
                    <strong>
                        Due Date :{' '}
                        <Moment date={info.duedate} format='DD/MM/YYYY' />
                    </strong>
                </div> */}
                <div className='row'>
                    <div className='col-6'>
                        <div className='card cardimp'>
                            <div className='card-title'>
                                <h2 className='debit'>₹{info.paid}</h2>
                            </div>
                            <div className='card-body'>
                                <small style={{ color: 'gray' }}>
                                    (Amount already paid)
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card cardimp'>
                            <div className='card-title'>
                                <h2 className='credit'>₹{info.due}</h2>
                            </div>
                            <div className='card-body'>
                                <small style={{ color: '#841f27' }}>
                                    (Amount to be paid)
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
