import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{activity.user}</strong>: {activity.activity} ({activity.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
