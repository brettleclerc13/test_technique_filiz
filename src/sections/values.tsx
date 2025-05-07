import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function Values() {
  return (
    <section
      id="valeurs"
      className="w-full flex mx-0 lg:my-20 my-10 flex-wrap justify-center min-h-[500px]"
    >
      <h2 className="text-[#71A894] mb-10">Nos valeurs</h2>
      <div className="flex gap-5 max-md:flex-wrap p-5">
        <Card
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap: "0.5rem",
            maxWidth: "414px",
          }}
        >
          <div className="flex justify-center">
            <img src="/icons/coffee-icon.svg" alt="coffee mug icon" />
          </div>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h4 className="text-center">Passionné de Café</h4>
            <p className="text-center">
              Notre équipe est passionnée par l'art de préparer le café. Chaque
              grain est soigneusement sélectionné pour offrir une expérience
              gustative exceptionnelle. Nous nous engageons à vous offrir des
              saveurs riches et uniques dans chaque tasse.
            </p>
          </CardContent>
        </Card>
        <Card
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap: "0.5rem",
            maxWidth: "414px",
          }}
        >
          <div className="flex justify-center">
            <img src="/icons/cat-icon.svg" alt="cat icon" />
          </div>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h4 className="text-center">Bien-être des Chats</h4>
            <p className="text-center">
              Le bonheur et le bien-être de nos amis félins sont au cœur de
              notre philosophie. Nous offrons un environnement sûr et
              confortable à nos chats résidents, où ils peuvent interagir avec
              nos clients et recevoir toute l'attention et l'affection qu'ils
              méritent.
            </p>
          </CardContent>
        </Card>
        <Card
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap: "0.5rem",
            maxWidth: "414px",
          }}
        >
          <div className="flex justify-center">
            <img src="/icons/plant-icon.svg" alt="plant icon" />
          </div>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h4 className="text-center">Engagement Environnemental</h4>
            <p className="text-center">
              Nous sommes soucieux de l'impact environnemental de notre
              entreprise. C'est pourquoi nous nous engageons à utiliser des
              produits respectueux de l'environnement et à promouvoir des
              pratiques durables dans tous les aspects de notre activité, de la
              sélection des fournisseurs à la gestion des déchets.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
