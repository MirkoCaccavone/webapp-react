import axios from "axios"

import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
}

const endpointApi = "http://localhost:3000/api/movies";

const CreateMoviePage = () => {

    const navigate = useNavigate();

    const [formDataObj, setFormDataObj] = useState(initialData)


    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }

    // gestione dell'invio del form
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(endpointApi, formDataObj, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(
                () => { navigate("/") }
            )
            .catch(err => console.log(err)
            )

    }


    return (
        <>
            <div className="container mt-5">
                <h1 className="display-4">Add a New Movie</h1>
                <section>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Title:</label>
                            <input
                                name="title"
                                type="text"
                                className="form-control"
                                value={formDataObj.title}
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Director:</label>
                            <input
                                name="director"
                                type="text"
                                className="form-control"
                                value={formDataObj.director}
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image:</label>
                            <input
                                name="image"
                                type="file"
                                className="form-control"
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Abstract:</label>
                            <textarea
                                name="abstract"
                                className="form-control"
                                value={formDataObj.abstract}
                                onChange={setFieldValue}
                                required
                            ></textarea>
                        </div>

                        <div className="d-flex justify-content-between">
                            <Link to="/" className="btn btn-secondary">Back</Link>
                            <button type="submit" className="btn btn-primary">Add Movie</button>
                        </div>

                    </form>
                </section>
            </div>
        </>


    )
}

export default CreateMoviePage