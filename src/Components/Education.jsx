import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
        <h2 style={{textAlign: "center"}}>Education</h2>
        <div style={{display: "flex", flexDirection: "row", paddingTop: "3rem", paddingBottom: "2rem", flexWrap: "wrap", justifyContent: "space-around"}}>
            <div style={{maxWidth: "25%", alignSelf: "flex-start"}}>
                <h3>Universidad Autónoma de México</h3>
                <p>Bachelor of Engineering in Software Development and Technologies student</p>
                <p>2022 - 2027</p>
            </div>
            <div style={{maxWidth: "25%", alignSelf: "flex-start"}}>
                <h3>University of the Basque Country</h3>
                <p>Graduated in Computer Engineering</p>
                <p>2015 - 2020</p>
            </div>
            <div style={{maxWidth: "25%", alignSelf: "flex-start"}}>
                <h3>University of the Basque Country</h3>
                <p>Graduated in Computer Engineering</p>
                <p>2015 - 2020</p>
            </div>
        </div>
    </section>
  );
}

export default Education;