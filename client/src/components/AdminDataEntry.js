import React, { Fragment } from 'react';

const AdminDataEntry = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='card formwala'>
                    <form>
                        <div className='form-group'>
                            <label for='Name of Customer'>
                                Name of Customer
                            </label>
                            <input placeholder='Name of Customer' />
                        </div>
                        <div className='form-group'>
                            <input placeholder='Total due amount' />
                        </div>
                        <div className='form-group'>
                            <input placeholder='Total amount paid' />
                        </div>
                        <div className='form-group'>
                            <input placeholder='Due Date' />
                        </div>
                        <div className='form-group'>
                            <input placeholder={`Customer's name`} />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminDataEntry;
