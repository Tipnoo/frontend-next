import React, { Component } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Markdown from 'markdown-to-jsx';

class PreviewOffer extends Component {
  needsToBeProPlayer = (pro) => {
    if (pro === 'true') {
      return (
        <div className="bg-red-300 text-center p-4 mb-4 rounded flex">
          <ErrorOutlineIcon className="self-center" />
          <p className="pl-2">
            You need to be a Professional Player to Apply to this position
          </p>
        </div>
      );
    }
    return (
      <div className="bg-green-300 text-center p-4 mb-4 rounded flex">
        <CheckCircleOutlineIcon className="self-center" />
        <p>
          You don't need to be a Professional Player to Apply to this position
        </p>
      </div>
    );
  };

  render() {
    const paragraph = ({ children, ...props }) => <p {...props}>{children}</p>;
    const heading = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
    const quote = ({ children, ...props }) => (
      <blockquote {...props}>{children}</blockquote>
    );
    const ulist = ({ children, ...props }) => <ul {...props}>{children}</ul>;
    const olist = ({ children, ...props }) => <ol {...props}>{children}</ol>;

    const overridesOptions = {
      p: {
        component: paragraph,
        props: {
          className: 'mb-2',
        },
      },
      h1: {
        component: heading,
        props: {
          className: 'text-2xl font-bold mb-2',
        },
      },
      blockquote: {
        component: quote,
        props: {
          className:
            'relative p-2 text-xl italic border-l-4 text-neutral-600 border-yellow-500 mb-2',
        },
      },
      ul: {
        component: ulist,
        props: {
          className: 'list-disc ml-10 mb-2',
        },
      },
      ol: {
        component: olist,
        props: {
          className: 'list-decimal ml-10 mb-2',
        },
      },
    };

    return (
      <div className={`${this.props.marginBottom} w-11/12 mx-auto mt-2`}>
        <fieldset className="border border-gray-300 rounded pb-6 pt-4 bg-gray-100 shadow-md">
          <legend className="font-extrabold text-center uppercase p-2">
            Preview
          </legend>
          <p className="text-center font-bold mx-4">
            Here's a preview of how your offer will look like
          </p>
          <p className="text-center text-xs mt-2 mx-8">
            Don't worry if it's not perfect the first time: your offer is fully
            editable for free after posting it!
          </p>

          <div className="w-11/12 border border-gray-300 rounded-sm p-4 flex mt-4 mx-auto bg-white">
            <img
              className="h-16 w-16 border border-gray-300 rounded m-2"
              src={this.props.wholeState.file}
              alt="Your Logo"
            />
            <div className="w-4/5 ml-2 text-left">
              <h4 className="font-extrabold text-lg">
                {this.props.wholeState.playerPosition}
              </h4>
              <h4 className="font-light text-sm mb-1">
                {this.props.wholeState.esportsTeam}
              </h4>
              <h4 className="inline-block text-super-xs uppercase border p-1 rounded border-black font-bold mr-2">
                {this.props.wholeState.primaryGame}
              </h4>
              <h4 className="inline-block text-super-xs uppercase font-bold border p-1 rounded border-black">
                {this.props.wholeState.extraGame}
              </h4>
            </div>
            <h4 className="w-1/5 text-super-xs py-8 text-center">1 min ago</h4>
          </div>

          <div className="p-8 bg-yellow-100 text-left w-11/12 mx-auto border border-gray-300 rounded-b-sm">
            <div className="text-sm">
              {this.needsToBeProPlayer(this.props.wholeState.pro)}
              <p className="text-2xl font-bold mb-2">Position Description</p>
              <Markdown
                options={{
                  forceBlock: true,
                  overrides: overridesOptions,
                }}
                className="text-gray-700"
              >
                {this.props.wholeState.positionDescription}
              </Markdown>
              <p className="text-2xl font-bold my-2">Position Requirements</p>
              <Markdown
                options={{
                  forceBlock: true,
                  overrides: overridesOptions,
                }}
                className="text-gray-700"
              >
                {this.props.wholeState.positionRequirements}
              </Markdown>
              <p className="text-2xl font-bold my-2">Location</p>
              <p className="text-gray-700">
                {this.props.wholeState.locationRestricted}
              </p>
              <p className="text-2xl font-bold my-2">Annual Salary</p>
              <p className="text-gray-700 mb-4">
                {this.props.wholeState.salary}
              </p>
              <div className="text-center">
                <p className="text-xl font-bold my-2 border-t border-gray-400 pt-4">
                  How to Apply?
                </p>
                <Markdown
                  options={{
                    forceBlock: true,
                    overrides: overridesOptions,
                  }}
                  className="text-gray-700"
                >
                  {this.props.wholeState.howToApply}
                </Markdown>
                <button className="cursor-not-allowed border border-dashed border-gray-600 text-gray-500 font-bold py-4 px-8 rounded my-4">
                  Apply to this Position
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default PreviewOffer;
