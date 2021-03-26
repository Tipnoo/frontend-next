import SimpleMDE from 'react-simplemde-editor';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PopupImageSize from './popups/Popup-imageSize';

import 'easymde/dist/easymde.min.css';

const AddUpdateOffer = (props) => {
  const change = (e) => {
    props.handleChange(e);
  };

  const fileSelectedHandler = (e) => {
    // console.log(e.target.files[0]);
    props.handleFileChange(e);
  };

  const mdeHandleChangeDesc = (e) => {
    props.mdeHandleChangeDescription(e);
  };

  const mdeHandleChangeReq = (e) => {
    props.mdeHandleChangeRequirements(e);
  };

  const mdeHandleChangeApply = (e) => {
    props.mdeHandleChangeHowToApply(e);
  };

  const closePopup = () => {
    props.closePopup();
  };

  const { errors, handleSubmit } = props;

  return (
    <div>
      <form
        className="w-11/12 mt-6 mx-auto text-center"
        onSubmit={handleSubmit}
        id="formElem"
      >
        <fieldset className="border border-gray-300 rounded p-6 bg-gray-100 shadow-md">
          <legend className="font-extrabold text-center uppercase p-2">
            Offer Headline
          </legend>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="playerPosition">
              Player Position*
            </label>
            <input
              className="form-input"
              type="text"
              name="playerPosition"
              id="playerPosition"
              defaultValue={props.playerPosition}
              onChange={change}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Please specify a single position. If posting multiple roles,
              please create multiple offers.
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="esportsTeam">
              Esports Team*
            </label>
            <input
              className="form-input"
              type="text"
              name="esportsTeam"
              id="esportsTeam"
              defaultValue={props.esportsTeam}
              onChange={change}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Your Esports Team Name
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="teamLogo">
              Team Logo (.JPG OR .PNG)*
            </label>
            <input
              className="form-input bg-white"
              type="file"
              accept="image/jpeg, image/png"
              name="teamLogo"
              id="teamLogo"
              onChange={fileSelectedHandler}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Only JPG/JPEG and PNG formats allowed. Maximum file size 1MB.
            </p>
          </div>
        </fieldset>
        {errors.imgFileSize ? (
          <PopupImageSize
            toggle={closePopup}
            imgActualSize={props.imgActualSize}
          />
        ) : null}

        <fieldset className="border border-gray-300 rounded p-6 bg-gray-100 shadow-md mt-2">
          <legend className="font-extrabold text-center uppercase p-2">
            Position Details
          </legend>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="locationRestricted">
              Location*
            </label>
            <input
              className="form-input"
              type="text"
              name="locationRestricted"
              id="locationRestricted"
              defaultValue={props.locationRestricted}
              onChange={change}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Location this offer is restricted to (e.g. Europe, United States,
              or Korea). If not restricted, leave it as "Worldwide". The less
              restricted this is, the more applicants you will get.
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="primaryGame">
              Primary Game*
            </label>
            <input
              className="form-input"
              type="text"
              name="primaryGame"
              id="primaryGame"
              defaultValue={props.primaryGame}
              onChange={change}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              What's the main game the player should be profficient on?
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="extraGame">
              Extra Game
            </label>
            <input
              className="form-input"
              type="text"
              name="extraGame"
              id="extraGame"
              defaultValue={props.extraGame}
              onChange={change}
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Is there any other game that the player should be good playing?
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="pro">
              Needs to be a Professional Player?
            </label>
            <select
              onChange={change}
              className="w-full text-sm border border-gray-300 rounded my-0 mx-auto py-2 px-3 text-gray-700 leading-tight bg-white mb-4"
              id="pro"
              name="pro"
              value={props.pro}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="positionDescription">
              Position Description*
            </label>
            {errors.positionDescription && (
              <p className="text-left text-sm text-yellow-600 mb-2 font-bold">
                Please fill out this field with a detailed description of what
                you're looking for.
              </p>
            )}
            <SimpleMDE
              className={`${
                errors.positionDescription
                && 'border-4 border-yellow-500 rounded-md mb-4'
              } text-left`}
              name="positionDescription"
              id="positionDescription"
              value={props.positionDescription}
              options={{
                autofocus: true,
                minHeight: '200px',
              }}
              onChange={mdeHandleChangeDesc}
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="positionRequirements">
              Position Requirements
            </label>
            <SimpleMDE
              className="text-left -mb-8"
              name="positionRequirements"
              id="positionRequirements"
              value={props.positionRequirements}
              options={{
                autofocus: true,
                minHeight: '200px',
              }}
              onChange={mdeHandleChangeReq}
            />
            <p className="text-left text-xs text-gray-600 mb-4">Not required</p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="salary">
              Annual Salary (if applicable)
            </label>
            <input
              className="form-input"
              type="number"
              name="salary"
              id="salary"
              defaultValue={props.salary}
              onChange={change}
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Not required. Write it in US DOLLARS PER YEAR as a single number
              (without other text), like 65000. If you pay differently, please
              convert to annual equivalent yourself. If not sure, write an
              indication of the salary.
            </p>
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="howToApply">
              How to Apply?*
            </label>
            {errors.howToApply && (
              <p className="text-left text-sm text-yellow-600 mb-2 font-bold">
                Please fill out this field explaining how someone should apply
                to your offer.
              </p>
            )}
            <SimpleMDE
              className={`${
                errors.howToApply
                && 'border-4 border-yellow-500 rounded-md mb-4'
              } text-left`}
              name="howToApply"
              id="howToApply"
              value={props.howToApply}
              options={{
                autofocus: true,
                minHeight: '200px',
              }}
              onChange={mdeHandleChangeApply}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="form-label" htmlFor="applyURLorEmail">
              Apply URL -or- Apply Email*
            </label>
            <input
              className="form-input"
              type="text"
              name="applyURLorEmail"
              id="applyURLorEmail"
              defaultValue={props.applyURLorEmail}
              onChange={change}
              required
            />
            <p className="text-left text-xs text-gray-600 mb-4">
              Place here the URL or email for people to be able to apply to your
              position. Remember that the email -if specified- will be public.
            </p>
          </div>
        </fieldset>
        {props.invoiceData && (
          <fieldset className="border border-gray-300 rounded p-6 bg-gray-100 shadow-md mt-2">
            <legend className="font-extrabold text-center uppercase p-2">
              Checkout
            </legend>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="email">
                Your Company Email*
              </label>
              <p className="w-full my-0 mx-auto text-left text-sm">
                (Stays Private, for Receipt + Edit Link)
              </p>
              <input
                className="form-input"
                type="email"
                name="email"
                id="email"
                onChange={change}
                required
              />
              <p className="text-left text-xs text-gray-600 mb-4">
                Make sure this email is accessible by you! We use this to send
                the edit / delete link. We can not and do not manually resend
                it!
              </p>
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="paymentmethod">
                Choose your Payment Method*
              </label>
              <div className="flex mt-2 mb-4">
                <label className="flex flex-col flex-1 w-1/3 h-28 items-center mr-2 bg-blue-100 rounded border-4 border-blue-300">
                  <img src="../images/credit-card-icon.png" alt="creditcard" className="h-16 w-16" />
                  <input type="radio" name="paymentmethod" value="creditcard" checked readOnly />
                  <span className="ml-2">Credit Card</span>
                </label>

                <label className="flex flex-col flex-1 w-1/3 h-28 items-center bg-gray-200 rounded border-2 border-gray-300">
                  <img src="../images/paypal-icon.png" alt="creditcard" className="h-11 w-11 my-2.5" />
                  <input type="radio" name="paymentmethod" value="paypal" disabled />
                  <span className="ml-2">Paypal</span>
                </label>

                <label className="flex flex-col flex-1 w-1/3 h-28 items-center ml-2 bg-gray-200 rounded border-2 border-gray-300">
                  <img src="../images/bitcoin-icon.png" alt="creditcard" className="h-11 w-14 my-2.5" />
                  <input type="radio" name="paymentmethod" value="bitcoin" disabled />
                  <span className="ml-2">Bitcoin</span>
                </label>
              </div>
              <p className="text-left text-xs text-gray-600 mb-4">
                We are currently working on adding Paypal and cryptocurrency checkouts! :)
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-200">
              <p>
                No-time-limit, no-questions-asked, money back guarantee
                {' '}
                <span role="img" aria-label="party">
                  🎉
                </span>
              </p>
              <p className="text-xs text-gray-600 mt-2">
                If you don't find your desired player, let us know and we'll
                give you back the total ammount spent, without asking any
                questions.
              </p>
            </div>
          </fieldset>
        )}
        <div
          id="submitBtn"
          className="bg-white fixed bottom-0 w-full left-0 border-2 border-gray-200"
        >
          {((errors.positionDescription) || (errors.howToApply)) && (
            <p className="text-center text-yellow-600 mt-4 mx-10 font-bold">
              <ErrorOutlineIcon />
              {' '}
              Please fill out all the required fields above
              (we have marked them in orange) and then press the button again
            </p>
          )}
          <input
            className="bg-red-600 text-xl text-white border-b-4 hover:border-red-700 border-red-800 font-bold py-3 px-6 rounded w-4/5 my-4 mx-auto cursor-pointer"
            type="submit"
            value={props.submitBtn}
          />
        </div>
      </form>
    </div>
  );
};

export default AddUpdateOffer;
