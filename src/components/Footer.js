const Footer = function () {
  return (
    <div id="footer">
      <Links />
      <CopyrightInfo />
      <Demo />
    </div>
  );
};

const Links = function () {
  return <div id="links">Links</div>;
};

const CopyrightInfo = function () {
  return <div id="copyrightInfo">@Copyright info</div>;
};

const Demo = function () {
  return <div id="demo">demo</div>;
};

export default Footer;
