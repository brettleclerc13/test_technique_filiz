import { Link, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <section className="flex justify-between align-middle w-full px-3 lg:px-0 py-5">
      <div className="w-36">
        <Link href="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex lg:hidden items-center">
        <IconButton aria-label="menu" sx={{ color: "#303031" }}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <nav className="hidden lg:flex justify-evenly align-middle gap-3 text-md">
        <ul className="flex gap-10">
          <li className="flex align-middle justify-center">
            <Link
              sx={{
                color: "#303031",
                textDecoration: "none",
                fontSize: "1.35rem",
                alignContent: "center",
              }}
              href="/#nous"
            >
              Qui sommes-nous ?
            </Link>
          </li>
          <li className="flex align-middle justify-center">
            <Link
              sx={{
                color: "#303031",
                textDecoration: "none",
                fontSize: "1.35rem",
                alignContent: "center",
              }}
              href="/#valeurs"
            >
              Nos valeurs
            </Link>
          </li>
          <li className="flex align-middle justify-center">
            <Link
              sx={{
                color: "#303031",
                textDecoration: "none",
                fontSize: "1.35rem",
                alignContent: "center",
              }}
              href="/#reservation"
            >
              Réservez !
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
