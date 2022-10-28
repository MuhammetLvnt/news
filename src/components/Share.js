import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function Share(props) {
  const { url } = props;
  return (
    <div className="container">
      <div>
        <h3>Share</h3>
      </div>
      <div className="flex">
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>

        <WhatsappShareButton url={url}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Share;
