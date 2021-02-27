import React, { Fragment } from 'react';
import Countdown from 'react-countdown';
import { Doughnut } from 'react-chartjs-2';

export default function Details(info) {
    console.log(info.name);
    const Completionist = () => (
        <span style={{ color: 'red' }}>Your Payments are due!!</span>
    );
    if (info.name === undefined) {
        return (
            <Fragment>
                <div className='container'>
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
                        style={{
                            color: 'red',
                            fontSize: 'larger',
                            fontWeight: 'bolder',
                        }}
                    >
                        <i> {days} Days</i>
                        <i> {hours} Hours</i>
                        <i> {minutes} Minutes </i>
                        <i> {seconds} Seconds</i>
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
                    'rgba(102, 255, 102, 0.7)',
                    'rgba(255, 102, 102,0.7)',
                ],
                borderColor: ['rgba(0, 179, 0, 1)', 'rgba(255, 0, 0, 1)'],
                hoverBackgroundColor: [
                    'rgb(0, 179, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: '2',
                weight: '1',
            },
        ],
    };
    return (
        <Fragment>
            <section className='container' style={{ paddingBottom: '20px' }}>
                <div>
                    Hello,
                    <br />
                    <strong>{info.name}</strong>
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
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='card-title'></div>
                                        <div className='card-body'>
                                            <div id='chart'>
                                                <Doughnut
                                                    data={data2}
                                                    width={50}
                                                    height={50}
                                                    legend={{ display: false }}
                                                />
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <span className='badge badge-danger'>
                                                Due:{info.due}₹
                                            </span>
                                            <span className='badge badge-success'>
                                                Paid:{info.paid}₹
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card-title payment'>
                                            <strong>Payment Due in:</strong>
                                        </div>
                                        <div className='card-body'>
                                            <Countdown
                                                date={info.duedate}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='row' style={{ paddingTop: '20px' }}>
                    <strong>
                        Download Invoice <i className='fa fa-arrow-right'></i>
                    </strong>
                </div> */}
            </section>
        </Fragment>
    );
}
