import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


function AboutPage() {
  return (
    <>
      <div className="card mb-3 mx-auto w-50 border-light mt-4" id="about" >
        <h3 className="card-header w-100">Silvi Rodriguez</h3>
        <div className="card-body">
          <h5 className="card-title">Frontend Engineer</h5>
          <h6 className="card-subtitle text-muted">Fullstack Developer MERN</h6>
        </div>
        <div className="card-body">
          <Navbar />
          <p className="card-text">
            I build accessible, inclusive products and digital experiences for the web.
          </p>
          <p className="card-text">
            With a combination of technical expertise, a passion for learning, and a zest for life, I am eager to contribute my skills and enthusiasm to exciting projects and make a 
            lasting impact in the world of web development.
          </p>
        </div>
      </div>
      <Footer />
  </>
  )
}

export default AboutPage