import Pic from "../static/images/About_me_photo.jpg";


const WhoWeAre = () => {
    return(<>
      <h1 style={{textAlign:"center", backgroundColor:"#EFEBD6", padding:"30px"}}>Who We Are</h1>
      <div>
      <img style={{ height: "480px", borderRadius: "50%", margin:"30px 30px 30px 100px"}} src={Pic} />
      <h3>Text</h3>
      </div>
    </>);
  }
  
  export default WhoWeAre;