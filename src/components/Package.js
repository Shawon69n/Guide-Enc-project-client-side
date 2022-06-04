import React from 'react';

const Package = () => {
    return (
        <>
            <div id='services' className='mt-20'>
                <h1 className='mb-10 font-thin text-3xl'>Our Packages</h1>
                <div className='grid grid-cols-3 ml-24 '>
                    <div class="card w-96 glass">
                        <figure><img src="https://static.vecteezy.com/system/resources/thumbnails/003/216/573/small_2x/people-explore-and-adventure-the-world-with-maps-free-vector.jpg" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 glass">
                        <figure><img src="https://img.freepik.com/free-vector/guide-excursion-composition-with-characters-guide-group-tourists-top-sightseeing-bus-vector-illustration_1284-66013.jpg?t=st=1654364298~exp=1654364898~hmac=cd88a77639932a5f1b286a9f46746ce14c18b0ec751c50f4f45448a3db9d872d&w=900" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 glass">
                        <figure><img src="https://static.vecteezy.com/system/resources/thumbnails/006/916/278/small_2x/planning-time-and-vacation-destinations-vector.jpg" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Package;