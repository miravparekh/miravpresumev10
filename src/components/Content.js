import frontpageImage from './images/frontpage1.jpg';
function Content () {
    return(
<div className="banner">
  <div className="app-text">
      <h2> Hi, I am</h2>
      <h1>Mirav Parekh.</h1>
      <p1>Developer|Data Enthusiast</p1>
      <p>I'm a Data Analyst based in Boston, US specializing in end-to-end ML piplines, applications, and everything in between.</p>

        <div className="btn">
            <div className="signup-btn">Resume</div>
        </div>
  </div>
    <div className="app-picture"><img alt="" height="635" src={frontpageImage} width="710" /></div>
</div>
    )
}
export default Content;