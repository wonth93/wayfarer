import React from 'react';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

const TripInfoContainer = () => {
  return (
    <section>
      <ActivityList />
      <section>
        <ActivityForm />
      </section>
    </section>
  )
}

export default TripInfoContainer;
