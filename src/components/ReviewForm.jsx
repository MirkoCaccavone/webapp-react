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
        <div className="card p-3">
            <h5>Add your review</h5>
            <form onSubmit={submitReview}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={setFieldValue} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Vote</label>
                    <input type="number" min="1" max="5" name="vote" className="form-control" value={formData.vote} onChange={setFieldValue} />
                </div>
                <button type="submit" className="btn btn-success">Send</button>
            </form>
        </div>
    )
}

export default ReviewForm;   