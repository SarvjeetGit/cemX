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
                            color: 'red',
                            fontSize: 'larger',
                            fontWeight: 'bolder',
                        }}
                    >
                        <i>{days > 10 ? days : `0${days}`}:</i>
                        <i>{hours > 10 ? hours : `0${hours}`}:</i>
                        <i>{minutes > 10 ? minutes : `0${minutes}`}:</i>
                        <i>{seconds > 10 ? seconds : `0${seconds}`}</i>
                    </div>
                </Fragment>
            );
        }
    };
    var due = info.due;
    var paid = info.paid;
    const data2 = {
        labels: [`paid`, `due`],
        datasets: [
            {
                data: [paid, due],
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
                    Hello,
                    <br />
                    <strong style={{ color: 'gray' }}>{fname[0]}</strong>
                    {'  '}
                    <strong
                        style={{ color: 'rgb(132,31,39)', fontSize: 'larger' }}
                    >
                        {fname[1]}
                    </strong>
                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='card cardimp'>
                            <div className='card-title'>
                                <h2 className='debit'>₹{info.due}</h2>
                            </div>
                            <div className='card-body'>
                                <small>(Amount to be paid)</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card cardimp'>
                            <div className='card-title'>
                                <h2 className='credit'>₹{info.paid}</h2>
                            </div>
                            <div className='card-body'>
                                <small>(Amount already paid)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row ' style={{ position: 'relative' }}>
                    <div
                        className='chartcont col-12'
                        style={{
                            maxHeight: '800px',
                            maxWidth: '800px',
                            paddingLeft: '33.5%',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}
                    >
                        <Countdown date={info.duedate} renderer={renderer} />
                        <div className='countholder'>
                            <strong>dd:hh:mm:ss</strong>
                        </div>
                        <Doughnut
                            data={data2}
                            width={50}
                            height={50}
                            legend={{ display: false }}
                        />
                    </div>
                </div>
                <div
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
                </div>
            </section>
        </Fragment>
    );
}
