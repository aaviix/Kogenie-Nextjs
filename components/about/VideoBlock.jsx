"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from 'next/image'; // Add this import

const VideoBlock = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="fancy-feature-fiftyTwo mt-130 lg-mt-100">
        <div className="container">
          <div className="video-banner d-flex align-items-center justify-content-center">
            <button
              className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
            >
              <Image
                src="/images/icon/icon_140.svg"
                alt="icon"
                className="lazy-img"
                width={50}  // You need to provide width
                height={50} // And height for the image
              />
            </button>
          </div>
          {/* /.video-banner */}
        </div>
      </div>
    </>
  );
};

export default VideoBlock;
