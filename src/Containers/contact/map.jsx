import React from "react";
import "./map.scss";

const MyMapComponent = () => {
  return (
    <div className="map-style">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.2464983392728!2d62.167453200000004!3d34.376276499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce3005cfcc955%3A0x876514c997270983!2z2LTYsdqp2Kog2KrYrNin2LHYqtuMINin2YHYutin2YYg2YXYs9in2YHYsSDZhNmF2KrbjNivIC0gQWZnaGFuIE1vc2FmZXIgRm9vZHM!5e0!3m2!1sen!2s!4v1701268868678!5m2!1sen!2s"
        width="300"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="fast"
        text-alighn="center"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MyMapComponent;
