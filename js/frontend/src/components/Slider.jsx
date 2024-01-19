import { useEffect } from "react";
import "../../style/slider.css";
import { useUserContext } from "../context/UserContext";

const product = [
  {
    id: 1,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  {
    id: 2,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  {
    id: 3,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  {
    id: 4,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  {
    id: 5,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  {
    id: 6,
    title: "Curl Expressioncurls reviver leav-in.",
    image:
      "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  },
  //   {
  //     id: 7,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
  //   {
  //     id: 8,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
  //   {
  //     id: 9,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
  //   {
  //     id: 10,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
  //   {
  //     id: 11,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
  //   {
  //     id: 12,
  //     title: "Curl Expressioncurls reviver leav-in.",
  //     image:
  //       "https://img01.ztat.net/article/spp-media-p1/cc63c6ac71484805ad197d9442280000/4fe79f223d2747a7a98a7cc497cf2c53.jpg?imwidth=1800&filter=packshot",
  //   },
];
function Slider() {
  const { getProposition, calculateAge, suggestions, user } = useUserContext();
  useEffect(() => {
    getProposition({ Age: Math.floor(Math.random() * 40 + 20), profession: user.profession, ville: user.city.toLowerCase() });
  }, [])
  return (
    <div className="suggestion-make-up container">
      <div className="statement">
        <h3 className="sub-title">Découvrir</h3>
        <h2 className="title">L'Oréal à de l'élégence.</h2>
        <p className="description">
          Découvrez les réalisations, les engagements et les aspirations qui
          inspirent L'Oréal depuis plus de 100 ans.
        </p>
      </div>
      <div className="slide-make-up">
        {suggestions.map((product, index) => (
          <div key={index} className="card-make-up">
            <img src={product.image_url} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
