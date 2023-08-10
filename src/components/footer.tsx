import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterType = {
  theFund?: string;
  theFundIsTheWorldsFirstNo?: string;
  group25?: string;
  rankings?: string;
  activity?: string;
  showT?: boolean;
  tVisible?: boolean;
  showVentures?: boolean;
  showGrants?: boolean;
  showGroupDiv?: boolean;

  /** Style props */
  footerPosition?: Property.Position;
  footerBackgroundColor?: Property.BackgroundColor;
  footerBackdropFilter?: Property.BackdropFilter;
  footerTop?: Property.Top;
  footerLeft?: Property.Left;
  groupDivHeight?: Property.Height;
  groupDivHeight1?: Property.Height;
  groupDivWidth?: Property.Width;
  groupDivHeight2?: Property.Height;
  theFundColor?: Property.Color;
  theFundIsTheTop?: Property.Top;
  theFundIsTheColor?: Property.Color;
  groupDivWidth1?: Property.Width;
  groupDivHeight3?: Property.Height;
  companyBackground?: Property.Background;
  aboutTop?: Property.Top;
  aboutColor?: Property.Color;
  careersTop?: Property.Top;
  careersColor?: Property.Color;
  venturesTop?: Property.Top;
  venturesColor?: Property.Color;
  grantsTop?: Property.Top;
  grantsColor?: Property.Color;
  groupDivWidth2?: Property.Width;
  helpCenterTop?: Property.Top;
  helpCenterColor?: Property.Color;
  gasFreeMarketplaceTop?: Property.Top;
  gasFreeMarketplaceColor?: Property.Color;
  blogTop?: Property.Top;
  blogColor?: Property.Color;
  newsletterTop?: Property.Top;
  newsletterColor?: Property.Color;
  followUsOnBackground?: Property.Background;
  groupDivWidth3?: Property.Width;
  statsBackground?: Property.Background;
  rankingsTop?: Property.Top;
  rankingsColor?: Property.Color;
  activityTop?: Property.Top;
  activityColor?: Property.Color;
};

const Footer: NextPage<FooterType> = ({
  theFund,
  theFundIsTheWorldsFirstNo,
  group25,
  rankings,
  activity,
  showT,
  tVisible,
  showVentures,
  showGrants,
  showGroupDiv,
  footerPosition,
  footerBackgroundColor,
  footerBackdropFilter,
  footerTop,
  footerLeft,
  groupDivHeight,
  groupDivHeight1,
  groupDivWidth,
  groupDivHeight2,
  theFundColor,
  theFundIsTheTop,
  theFundIsTheColor,
  groupDivWidth1,
  groupDivHeight3,
  companyBackground,
  aboutTop,
  aboutColor,
  careersTop,
  careersColor,
  venturesTop,
  venturesColor,
  grantsTop,
  grantsColor,
  groupDivWidth2,
  helpCenterTop,
  helpCenterColor,
  gasFreeMarketplaceTop,
  gasFreeMarketplaceColor,
  blogTop,
  blogColor,
  newsletterTop,
  newsletterColor,
  followUsOnBackground,
  groupDivWidth3,
  statsBackground,
  rankingsTop,
  rankingsColor,
  activityTop,
  activityColor,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      position: footerPosition,
      backgroundColor: footerBackgroundColor,
      backdropFilter: footerBackdropFilter,
      top: footerTop,
      left: footerLeft,
    };
  }, [
    footerPosition,
    footerBackgroundColor,
    footerBackdropFilter,
    footerTop,
    footerLeft,
  ]);

  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      height: groupDivHeight1,
    };
  }, [groupDivHeight1]);

  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight2,
    };
  }, [groupDivWidth, groupDivHeight2]);

  const theFundStyle: CSS.Properties = useMemo(() => {
    return {
      color: theFundColor,
    };
  }, [theFundColor]);

  const theFundIsTheStyle: CSS.Properties = useMemo(() => {
    return {
      top: theFundIsTheTop,
      color: theFundIsTheColor,
    };
  }, [theFundIsTheTop, theFundIsTheColor]);

  const groupDiv3Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth1,
      height: groupDivHeight3,
    };
  }, [groupDivWidth1, groupDivHeight3]);

  const companyStyle: CSS.Properties = useMemo(() => {
    return {
      background: companyBackground,
    };
  }, [companyBackground]);

  const aboutStyle: CSS.Properties = useMemo(() => {
    return {
      top: aboutTop,
      color: aboutColor,
    };
  }, [aboutTop, aboutColor]);

  const careersStyle: CSS.Properties = useMemo(() => {
    return {
      top: careersTop,
      color: careersColor,
    };
  }, [careersTop, careersColor]);

  const venturesStyle: CSS.Properties = useMemo(() => {
    return {
      top: venturesTop,
      color: venturesColor,
    };
  }, [venturesTop, venturesColor]);

  const grantsStyle: CSS.Properties = useMemo(() => {
    return {
      top: grantsTop,
      color: grantsColor,
    };
  }, [grantsTop, grantsColor]);

  const groupDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth2,
    };
  }, [groupDivWidth2]);

  const helpCenterStyle: CSS.Properties = useMemo(() => {
    return {
      top: helpCenterTop,
      color: helpCenterColor,
    };
  }, [helpCenterTop, helpCenterColor]);

  const gasFreeMarketplaceStyle: CSS.Properties = useMemo(() => {
    return {
      top: gasFreeMarketplaceTop,
      color: gasFreeMarketplaceColor,
    };
  }, [gasFreeMarketplaceTop, gasFreeMarketplaceColor]);

  const blogStyle: CSS.Properties = useMemo(() => {
    return {
      top: blogTop,
      color: blogColor,
    };
  }, [blogTop, blogColor]);

  const newsletterStyle: CSS.Properties = useMemo(() => {
    return {
      top: newsletterTop,
      color: newsletterColor,
    };
  }, [newsletterTop, newsletterColor]);

  const followUsOnStyle: CSS.Properties = useMemo(() => {
    return {
      background: followUsOnBackground,
    };
  }, [followUsOnBackground]);

  const groupDiv5Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth3,
    };
  }, [groupDivWidth3]);

  const statsStyle: CSS.Properties = useMemo(() => {
    return {
      background: statsBackground,
    };
  }, [statsBackground]);

  const rankingsStyle: CSS.Properties = useMemo(() => {
    return {
      top: rankingsTop,
      color: rankingsColor,
    };
  }, [rankingsTop, rankingsColor]);

  const activityStyle: CSS.Properties = useMemo(() => {
    return {
      top: activityTop,
      color: activityColor,
    };
  }, [activityTop, activityColor]);

  return (
    <div
      className="relative bg-gray-1500 [backdrop-filter:blur(4px)] w-[1440px] h-[322px] overflow-hidden text-justify text-sm text-whyte font-acme"
      style={footerStyle}
    >
      <div
        className="absolute top-[31px] left-[120px] w-[1201px] h-[198px]"
        style={groupDivStyle}
      >
        <div
          className="absolute top-[0px] left-[0px] w-[276px] h-[198px] text-left"
          style={groupDiv1Style}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[73px] h-[100px] text-77xl"
            style={groupDiv2Style}
          >
            {showT && (
              <div className="absolute top-[0px] left-[0px] leading-[100px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                t
              </div>
            )}
            {tVisible && (
              <div className="absolute top-[100px] left-[73px] leading-[100px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [transform:_rotate(180deg)] [transform-origin:0_0]">
                t
              </div>
            )}
          </div>
          <div
            className="absolute top-[100px] left-[0px] uppercase"
            style={theFundStyle}
          >
            {theFund}
          </div>
          <div
            className="absolute w-full top-[69.7%] left-[0%] text-justify inline-block"
            style={theFundIsTheStyle}
          >
            {theFundIsTheWorldsFirstNo}
          </div>
        </div>
        <div
          className="absolute top-[42px] left-[513px] w-[65px] h-[156px]"
          style={groupDiv3Style}
        >
          <div
            className="absolute top-[0px] left-[0px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
            style={companyStyle}
          >
            Company
          </div>
          <div className="absolute top-[21.79%] left-[0%]" style={aboutStyle}>
            About
          </div>
          <div className="absolute top-[43.59%] left-[0%]" style={careersStyle}>
            Careers
          </div>
          {showVentures && (
            <div
              className="absolute top-[65.38%] left-[0%]"
              style={venturesStyle}
            >
              Ventures
            </div>
          )}
          {showGrants && (
            <div
              className="absolute top-[87.18%] left-[0%]"
              style={grantsStyle}
            >
              Grants
            </div>
          )}
        </div>
        {showGroupDiv && (
          <div
            className="absolute top-[42px] left-[776px] w-[145px] h-[156px]"
            style={groupDiv4Style}
          >
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Resources
            </div>
            <div
              className="absolute top-[21.79%] left-[0%]"
              style={helpCenterStyle}
            >
              Help Center
            </div>
            <div
              className="absolute top-[43.59%] left-[0%]"
              style={gasFreeMarketplaceStyle}
            >
              Gas-Free Marketplace
            </div>
            <div className="absolute top-[65.38%] left-[0%]" style={blogStyle}>
              Blog
            </div>
            <div
              className="absolute top-[87.18%] left-[0%]"
              style={newsletterStyle}
            >
              Newsletter
            </div>
          </div>
        )}
        <div className="absolute top-[42px] left-[990px] w-[211px] h-[147px] text-left">
          <div
            className="absolute top-[0px] left-[0px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={followUsOnStyle}
          >
            Follow us on
          </div>
          <img
            className="absolute top-[34px] left-[0px] w-[211px] h-[113px]"
            alt=""
            src={group25}
          />
        </div>
        <div
          className="absolute top-[42px] left-[647px] w-[60px] h-[88px]"
          style={groupDiv5Style}
        >
          <div
            className="absolute top-[0px] left-[0px] [background:linear-gradient(90.71deg,_#73e0a9,_#5b68df)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
            style={statsStyle}
          >
            Stats
          </div>
          <div
            className="absolute top-[38.64%] left-[0%]"
            style={rankingsStyle}
          >
            {rankings}
          </div>
          <div
            className="absolute top-[77.27%] left-[0%]"
            style={activityStyle}
          >
            {activity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
