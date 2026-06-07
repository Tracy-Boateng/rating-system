import { useState } from 'react';
import Star from './Star';

function StarRating() {

    const [rating, setRating] = useState(0);

    const messages = [
        '',
        'Poor',
        'Fair',
        'Good',
        'Very Good',
        'Excellent'
    ];

    return (
        <div className="rating-container">

            <div className="stars">

                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        selected={star <= rating}
                        onClick={() => setRating(star)}
                    />
                ))}

            </div>

            <h2>{messages[rating]}</h2>

        </div>
    );
}

export default StarRating;