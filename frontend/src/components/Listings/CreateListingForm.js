import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addListing } from '../../store/listings';

const CreateListingForm = () => {

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [cost, setCost] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newListing = {
            userId: sessionUser.id,
            name,
            state,
            country,
            cost,
            img1,
            img2,
            img3,
            img4
        };

        dispatch(addListing(newListing)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });

        if (errors.length > 0) {
            history.push('/');
        };
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Name:</label>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <label>State:</label>
                <input value={state} onChange={e => setState(e.target.value)}></input>
                <label>Country:</label>
                <input value={country} onChange={e => setCountry(e.target.value)}></input>
                <label>Cost Per Night:</label>
                <input value={cost} onChange={e => setCost(e.target.value)}></input>
                <label>Image 1:</label>
                <input value={img1} onChange={e => setImg1(e.target.value)}></input>
                <label>Image 2:</label>
                <input value={img2} onChange={e => setImg2(e.target.value)}></input>
                <label>Image 3:</label>
                <input value={img3} onChange={e => setImg3(e.target.value)}></input>
                <label>Image 4:</label>
                <input value={img4} onChange={e => setImg4(e.target.value)}></input>
                <button>Submit Listing</button>
            </form>
        </div>
    )
}

export default CreateListingForm;