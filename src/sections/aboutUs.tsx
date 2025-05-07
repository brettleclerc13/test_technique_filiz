export default function AboutUs() {
  return (
    <section
      id="nous"
      className="w-full flex mx-0 my-10 px-10 py-20 gap-10 lg:gap-0 lg:px-0 flex-wrap bg-[#F3F0EA] min-h-[500px] align-middle"
    >
      <div className="flex-1/2 flex align-middle lg:p-20">
        <img src="/images/image-about-us.png" alt="about us image - cat mug" />
      </div>
      <div className="flex-1/2 flex flex-col align-middle justify-center pl-0 pr-0 lg:pr-20 gap-6">
        <h2 className="text-center lg:text-left">Qui sommes-nous ?</h2>
        <p className="text-base">
          Bienvenue chez Café Neko, l'endroit où le café et les chats se
          rencontrent pour créer une expérience unique en son genre.
          <br />
          <br />
          Chez Café Neko, nous sommes passionnés par deux choses : le café de
          qualité et le bien-être des chats. Fondé par des amoureux des félins
          et des aficionados du café, Café Neko est bien plus qu'un simple café.
          C'est un refuge pour les amoureux des chats, un havre de paix où l'on
          peut savourer une bonne tasse de café tout en câlinant nos adorables
          résidents à quatre pattes.
        </p>
      </div>
    </section>
  );
}
