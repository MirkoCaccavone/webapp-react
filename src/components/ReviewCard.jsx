const ReviewCard = ({ reviewProp }) => {

    // destrutturiamo la prop
    const { name, vote, text } = reviewProp
    return (
        <div className="review-card">
            <div>
                <p>
                    {text}
                </p>
                <strong>
                    Vote: {vote}
                </strong>
                <address>
                    <i>
                        By {name}
                    </i>
                </address>
            </div>
        </div>
    )
}

export default ReviewCard