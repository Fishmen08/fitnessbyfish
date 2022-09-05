import React from "react";
import lingin from '../images/lingin2.jpg';
import yusen from '../images/yusenmock.jpg';

export default function Testimonials() {
    return (
        <div id='testimonials-page' className='block w-screen mt-24 justify-center text-center'>
            <h3 className='font-bold text-2xl mb-8'>Heres what our members are saying</h3>
            <div className='flex-wrap md:flex justify-center w-full'>
                <div className='max-w-lg p-4'>
                    <div className=''>
                        <img src={lingin} alt='client' className='h-96 rounded-xl m-4 mx-auto' />
                    </div>
                    <div className='lg:max-w-2xl m-4 md:max-w-lg max-w-md mx-auto'>
                        <h2 className='font-bold text-xl'>Gina</h2>
                        <p>I am a 75 year old woman who suffers from osteoarthritis. I have started personal training with Adam Fisher about 2 years ago. I have been using PT for the past 18 years. Adam is an EXEPTIONAL trainer. Most trainers are professional and skilled, but Adam has a knack - a talent - an intuitive ability to make the pain go away. Adam plans methodically for the sessions but is flexible with exercising when necessary and monitors every move with hawks-eyes. Although chances are that I will not become an athlete, I have gained strength, flexibility and control and as a result a sense of achievement. I always look forward to my meetings with Adam: he has a sense of humor, he is well spoken, considerate and caring. SESSIONS WITH HIM FLY AWAY TOO FAST.</p>
                    </div>
                </div>
                <div className='max-w-lg p-4'>
                    <div className=''>
                        <img src={lingin} alt='client' className='h-96 rounded-xl m-4 mx-auto' />
                    </div>
                    <div className='lg:max-w-2xl m-4 md:max-w-lg max-w-md mx-auto'>
                        <h2 className='font-bold text-xl'>Linley</h2>
                        <p>I'm a 76 year old business owner with varied interests. I started running-for-fun in my forties, and continue to do so. I've have had few injuries, none serious. I've used a personal trainer for at least 15 years (apart from technical expertise, this provides motivation), and I started with Adam some 3 years ago.</p>
                        <p>Adam provides a considered, structured but varied program to help me attain my goals. Without inducing pain I've improved all personal physical parameters, which of course also helps provide a balanced mental approach.</p>
                        <p>Our regular sessions are both motivating and invigorating. The benefits gained are, to me, immeasurable. During those times when I cannot train because of work travel requirements, I miss the work-outs and on my return am always impatient to resume.</p>
                    </div>
                </div>
                <div className='max-w-lg p-4'>
                    <div className=''>
                        <img src={yusen} alt='client' className='h-96 rounded-xl m-4 mx-auto' />
                    </div>
                    <div className='lg:max-w-2xl m-4 md:max-w-lg max-w-md mx-auto'>
                        <h2 className='font-bold text-xl'>Yusen</h2>
                        <p>I've been training for 3 years and when I came to Adam I had injured my right shoulder. While training together Adam has helped to fix my shoulder and make me stronger than ever. Training with Adam I have learnt how to train for my body, keep myself injury free, lose bodyfat and build muscle. Since starting with Adam I have taken up bouldering and really noticed how our training sessions have helped me to progress so fast that I'm at the level of people who have been climbing years long than me. Our sessions are fun but hard and there is always a good laugh. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}