import React, { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import useSingleLawyer from '../../../Hooks/useSingleLawyer';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';

const SingleLawyerInfo = () => {
    useTitle("Lawyer Profile");
    const [card, refetch] = useSingleLawyer();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleUpdate = (_id) => {
        navigate(`/dashboard/update/${_id}`);
    }

    return (
        <div className='m-2 mt-12 card-actions justify-center  '>
            <div>
                {card.map((cart) => (
                    <div key={cart._id} className="card w-100 shadow-xl">
                        <figure>
                            <img className="w-80 h-80" src={cart.photo} alt="Lawyer" />
                        </figure>

                        <Fade direction="down" >
                            <div className="card-body text-white">

                                <div className='flex gap-10 '>
                                    <p className="card-title">Name:- {cart.name}</p>
                                    <p className="card-title">Category:{cart.category}</p>

                                </div>
                                <div className=' gap-10  '>

                                    <p className='card-title'>Solving:-{cart.cases}cases + </p>
                                    <p className="card-title" >Experience: {cart.experience} years</p>
                                </div>
                                <div className=' gap-10  '>
                                    <p className="card-title" >Price:{cart.price}Tk.</p>
                                    <p className="card-title" >Phone:01423456987
                                    </p>
                                </div>
                                <div className='flex gap-10 text-green-500 '>
                                    <p className="card-title" >Education : {cart.education}</p>
                                    <p className="card-title" >Time: {cart.time}</p>
                                </div>
                                <p className='card-title'>Email:{cart.email}</p>
                                <p className='flex gap-10 text-white' >{cart.details}</p>
                                <div className="card-actions justify-center mt-5">
                                    <button onClick={() => handleUpdate(cart._id)} className="btn btn-outline btn-warning">Update Info</button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SingleLawyerInfo;
