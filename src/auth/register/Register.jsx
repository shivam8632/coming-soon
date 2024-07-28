import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import SecondaryButton from '../../components/buttons/Buttons';
import { Link } from 'react-router-dom';
import './register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const FormBelow16 = () => {
    return (
        <form action="">
        <div className="input-container">
            <label htmlFor="">Select your Country <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">State <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">City <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">Postcode <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Legal Name <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Surname/Last Name <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Enter your School Name <strong>*</strong> <Link to='/' className='text-black'><small>Why <FontAwesomeIcon icon={faCircleInfo} style={{width: 'fit-content'}} /></small></Link></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Nickname</label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Aadhar Number <strong>*</strong> <Link to='/' className='text-black'><small>Why <FontAwesomeIcon icon={faCircleInfo} style={{width: 'fit-content'}} /></small></Link></label>
            <input type="text" minLength='12' />
        </div>
        <div className="input-container">
            <label htmlFor="">DOB <strong>*</strong></label>
            <input type="date" />
        </div>
        <div className="input-container">
            <label htmlFor="">Mother/Father Name <strong>*</strong> <Link to='/' className='text-black'><small>Why <FontAwesomeIcon icon={faCircleInfo} style={{width: 'fit-content'}} /></small></Link></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Care of Contact Number <strong>*</strong> <Link to='/' className='text-black'><small>Why <FontAwesomeIcon icon={faCircleInfo} style={{width: 'fit-content'}} /></small></Link></label>
            <input type="number" />
        </div>
        <div className="input-container input-id">
            <label htmlFor="">Care of Individual Master ID <strong>*</strong> <Link to='/' className='text-black'><small>Why <FontAwesomeIcon icon={faCircleInfo} style={{width: 'fit-content'}} /></small></Link></label>
            <input type="number" />
            <button>Submit</button>
        </div>
        <div className="input-container">
            <label htmlFor="">Contact Number if User have</label>
            <input type="number" />
        </div>
        <div className="input-container input-check">
            <input type="checkbox" />
            <label htmlFor="">Terms & conditions <strong>*</strong></label>
        </div>
        <div className='w-100 text-center'>
            <SecondaryButton buttonText='Sign Up' buttonClass='mx-auto d-flex mb-3' />
        </div>
    </form>
    );
};

const FormAbove16 = () => {
    const [idAbove18, setIdAbove18] = useState('Aadhar Card');

    const handleIdAbove18 = (event) => {
        setIdAbove18(event.target.value);
      };
     return (
        <form action="">
        <div className="input-container">
            <label htmlFor="">Select your Country <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">State <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">City <strong>*</strong></label>
            <select name="" id="">
                <option value="">Bharat</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">Postcode <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Legal Name <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Surname/Last Name <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">Select ID Proof <strong>*</strong></label>
            <select onChange={(e) => handleIdAbove18(e)}>
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter Card">Voter Card</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="">Nickname</label>
            <input type="text" />
        </div>
        <div className="input-container">
            <label htmlFor="">{idAbove18} <strong>*</strong></label>
            <input type="text" minLength='12' />
        </div>
        <div className="input-container">
            <label htmlFor="">DOB <strong>*</strong></label>
            <input type="date" />
        </div>
        <div className="input-container">
            <label htmlFor="">Email <strong>*</strong></label>
            <input type="email" />
        </div>
        <div className="input-container">
            <label htmlFor="">Phone Number <strong>*</strong></label>
            <input type="number" />
        </div>
        <div className="input-container">
            <label htmlFor="">Local Address <strong>*</strong></label>
            <input type="text" />
        </div>
        <div className='w-100 text-center'>
            <SecondaryButton buttonText='Sign Up' buttonClass='mx-auto d-flex mb-3' />
        </div>
    </form>
    );
};


function Register() {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };
  return (
    <div className='register py-5'>
      <Container>
        <h1 className='text-center mb-5'>Register</h1>
        <div className="row m-0">
            <div className="col-12 col-md-5 col-lg-4 p-md-0">
                <div className="register-content p-3 py-md-5 px-md-4 text-white">
                    <div className="input-container d-flex align-items-center text-dark">
                        <label>I AM <strong>*</strong></label>
                        <select className='text-dark' onChange={handleAgeGroupChange}>
                            <option value="">Select Age Group</option>
                            <option value="below16">Below 16</option>
                            <option value="above16">Above 16</option>
                        </select>
                    </div>

                    <p className='text-uppercase text-danger'>Note this 4 best deal for all</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, consequuntur reprehenderit mollitia eligendi nam quia!</p>
                </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 p-md-0">
                <div className="register-form p-3 d-flex flex-column align-items-center justify-content-center h-100">

                    {selectedAgeGroup === '' && <h3 className='text-center'>Please Select an Age group to fill data.</h3>}
                    {selectedAgeGroup === 'below16' && <FormBelow16 />}
                    {selectedAgeGroup === 'above16' && <FormAbove16 />}
                    <p className='text-center'>Already have an account? <Link to='/'>Login</Link></p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Register