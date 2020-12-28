import React from 'react';

const List = ({person}) => {
  const {name,image,id,age}=person;
  return (
    <article key={id} className='person'>
      <image src={image} alt={name}>
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </image>
    </article>
  );
};

export default List;
