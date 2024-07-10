const Card = ({ title, content, icon, borderColor }) => {
  return (
    <div
      className={`text-left p-8 border-t-4 ${borderColor} rounded-lg bg-white shadow-xl max-w-96 hover:scale-110 duration-300`}
    >
      <h2 className="text-3xl font-medium text-very-dark-blue mb-3">{title}</h2>
      <p className="text-grayish-blue mb-16">{content}</p>
      <div className="flex justify-end">
        <img src={icon} />
      </div>
    </div>
  );
};

export { Card };
