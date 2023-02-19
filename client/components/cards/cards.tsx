import ProgressBar from './progressBar';

const Card = (props: any) => {
  return (
    <div className="rounded-xl min-w-[350px] max-w-[360px] h-full shadow-lg m-4 bg-white text-black">
      <img
        className="w-full rounded-t-xl"
        src={props.src ? props.src : 'https://v1.tailwindcss.com/img/card-top.jpg'}
        alt="Sunset in the mountains"
      />
      <div className="px-5 py-3">
        <div className="font-bold text-lg mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>

      <ProgressBar progress="9" />
    </div>
  );
};

export default Card;
