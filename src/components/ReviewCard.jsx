const ReviewCard = ({ reviewProp }) => {

    // destrutturiamo la prop
    const { name, vote, text } = reviewProp
    return (
        <div className="col-md-10 col-lg-8 mb-4">
            <div className="card mb-3">
                <div className="card-body">
                    <p className="card-text">{text}</p>
                    <strong className="d-block mb-2">Rating: {vote}/5</strong>
                    <p className="text-muted">By {name}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard