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
    if (extraGame === '') {
      return <div />;
    }
    return (
      <h4 className="inline-block text-super-xs xl:text-xs uppercase font-bold border px-2 py-1 rounded-sm border-black">
        {extraGame}
      </h4>
    );
  };

  return (
    <div key={props.index}>
      {thereIsOffer && (
        <div className="flex flex-col hover:bg-yellow-100 cursor-pointer md:w-11/12 lg:w-9/12 xl:w-7/12 md:m-auto md:my-3 md:bg-white md:rounded">
          <div
            onClick={onClick}
            className="w-full border-b md:border border-gray-300 md:rounded-md md:pb-2 p-1 flex h-auto"
          >
            <img
              className="h-16 w-16 rounded-sm m-2"
              src={props.offer.teamLogo}
              alt={props.offer.esportsTeam}
            />
            <div className="w-4/5 ml-2 text-left h-auto pt-2 md:pt-1 md:flex md:justify-between md:my-auto">
              <div>
                <h4 className="font-bold text-md xl:text-xl">
                  {props.offer.playerPosition}
                </h4>
                <h4 className="font-light text-sm xl:text-md mb-1">
                  {props.offer.esportsTeam}
                </h4>
              </div>
              <div className="md:my-auto md:mr-4">
                <h4 className="inline-block text-super-xs xl:text-xs uppercase border px-2 py-1 rounded-sm border-black font-bold mr-2">
                  {props.offer.primaryGame}
                </h4>
                {extraGamePrint(props.offer.extraGame)}
              </div>
            </div>
            <h4 className="w-1/5 text-super-xs xl:text-xs py-8 text-center">
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
