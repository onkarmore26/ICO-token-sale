import React from "react";

const Team = () => {
  const reviews = [
    {
      img: "assets/images/team-lg-3.jpg",
      text: "Joining the RBC token presale was a smart move. The project has strong potential, and I appreciate the transparency of the team.",
      name: "John Doe",
    },
    {
      img: "assets/images/team-lg-2.jpg",
      text: "I feel confident storing my assets with RBC. The security measures are solid, and transactions are lightning-fast.",
      name: "Sarah Smith",
    },
    {
      img: "assets/images/team-lg-1.jpg",
      text: "The CryptoCash platform makes managing my tokens effortless. The mobile app is intuitive, and everything works flawlessly.",
      name: "Michael Brown",
    },
    {
      img: "assets/images/team-lg-7.jpg",
      text: "If you’re looking for a reliable token with real-world utility, RBC is the way to go. Great project with a solid vision!",
      name: "Emily Davis",
    },
  ];

  return (
    <section
      id="team"
      style={styles.section}
      className="ttop_footer bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-img-src="assets/image/footer_bg.png"
    >
      <div style={styles.container}>
        <h2 style={styles.title}>What Our Customers Say</h2>
        <div style={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={styles.reviewCard}
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay={`0.${index + 2}s`}
            >
              <img
                src={review.img}
                alt={`Customer ${index + 1}`}
                style={styles.reviewImg}
              />
              <p style={styles.reviewText}>"{review.text}"</p>
              <h5 style={styles.reviewName}>- {review.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "30px",
  },
  reviewsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  reviewCard: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out",
    width: "380px",
    height: "350px",
    color: "#ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewCardHover: {
    transform: "translateY(-5px)",
  },
  reviewImg: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "5px solid #fff",
  },
  reviewText: {
    fontSize: "17px",
    fontStyle: "italic",
    maxWidth: "90%",
  },
  reviewName: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
  },
};

export default Team;
