export const Service = ({ p, number, h3 }) => {
  return (
    <div className='service'>
      <h3 className='n-service'>
        <span className='number'>{number}</span>
        {h3}
      </h3>
      <p>{p}</p>
    </div>
  );
};
