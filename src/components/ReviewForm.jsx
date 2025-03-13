import axios from "axios";

import { useState } from "react";

const ReviewForm = ({ movie_id, reloadReviews }) => {
    const initialValue = { name: "", text: "", vote: 1 }

    const [formData, setFormData] = useState(initialValue);

    // funzione di creazione oggetto valori form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // funzione di invio richiesta al submit del form
    const submitReview = (e) => {
        e.preventDefault();
        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    reloadReviews()
                }
            )
            .catch(err => console.log(err)
            )
    }

    return (
        <div >

            <header>
                <h5>Add your review</h5>
            </header>

            <div>

                <form onSubmit={submitReview}>

                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>

                    <div >
                        <label>Review</label>
                        <textarea name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>

                    <div>
                        <label>Voto</label>
                        <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>

                    <div>
                        <button type="submit">
                            Send
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default ReviewForm;   