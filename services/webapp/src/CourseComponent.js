import React, { useEffect, useState } from 'react';

function CourseComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/user/1')
            .then(response => response.json())
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
