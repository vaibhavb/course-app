import React, { useEffect, useState } from 'react';

function CourseComponent() {
    const [data, setData] = useState([]);
    const apiUrl = 'http://127.0.0.1:3000/api/user';

    useEffect(() => {
        fetch(`${apiUrl}/1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p>Email: {item.email}</p>
                    <p>Course: {item.course}</p>
                </div>
            ))}
        </div>
    );
}

export default CourseComponent;
