
const Stats = ({ numbers }) => {
  return (
    <div className="bg-darkerBlue stats">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly gap-y-24">
          {numbers.map(({ name, value }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-8xl text-lightRed font-bold tracking-tighter mb-12">
                  {value}+
                </div>
                <h3 className="text-white">{name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
