import Marquee from "react-marquee-slider";
import times from "lodash/times";

export const Marrquee = () => {
  return (
    <div className="newcoll__marqueeContainer">
      <Marquee velocity={50} minScale={0.1}>
        {times(1, Number).map((id) => (
          <p key={id} className="newcoll__marquee">NEW COLLECTION VOSTOK&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION VOSTOK&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION VOSTOK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        ))}
      </Marquee>
    </div>
  )
}