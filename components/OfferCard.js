import React, { useState, useEffect } from 'react';

const OfferCard = (props) => {
  const [thereIsOffer, setThereIsOffer] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.offer === undefined) {
      setThereIsOffer(false);
    } else {
      setThereIsOffer(true);
    }
  }, [props.offer]);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const extraGamePrint = (extraGame) => {
    if (extraGame === 'Game 2') {
      return <div></div>;
    }
    return (
      <h4 className="inline-block text-super-xs uppercase font-bold border p-1 rounded-sm border-black">
        {extraGame}
      </h4>
    );
  };

  return (
    <div key={props.index}>
      {thereIsOffer && (
        <div className="flex flex-col hover:bg-yellow-100 cursor-pointer">
          <div
            onClick={onClick}
            className="w-full border-b border-gray-300 p-4 flex "
          >
            <img
              className="h-20 w-20 border border-gray-200 rounded-sm m-2"
              src={props.offer.teamLogo}
              alt={props.offer.esportsTeam}
            />
            <div className="w-4/5 ml-2 text-left mt-2">
              <h4 className="font-extrabold text-lg">
                {props.offer.playerPosition}
              </h4>
              <h4 className="font-light text-sm mb-1">
                {props.offer.esportsTeam}
              </h4>
              <h4 className="inline-block text-super-xs uppercase border p-1 rounded-sm border-black font-bold mr-2">
                {props.offer.primaryGame}
              </h4>
              {extraGamePrint(props.offer.extraGame)}
            </div>
            <h4 className="w-1/5 text-super-xs py-8 text-center">
              {props.offer.timePassed}
            </h4>
          </div>
          {isOpen && <div>{props.children}</div>}
        </div>
      )}
    </div>
  );
};

export default OfferCard;
