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
        <div className="review-form-container">
            <div className="review-form">
                <h5 className="form-title">Add your review</h5>

                <form onSubmit={submitReview}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>

                    <div className="form-group">
                        <label>Review</label>
                        <textarea name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>

                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>

                    <div className="form-group">
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