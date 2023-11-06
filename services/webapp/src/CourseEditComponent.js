import React, { useState } from 'react';

function CourseEditComponent() {
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:5000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, course }),
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Course:
                <input type="text" value={course} onChange={e => setCourse(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CourseEditComponent;