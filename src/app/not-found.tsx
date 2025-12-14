import Link from "next/link";

export default function NotFound() {
    return (
        <div className={"flex flex-col items-center mt-52 h-screen text-center"}>
            <h2 className={"text-2xl"}>
                Erreur <span className={"text-primary"}>404</span>
            </h2>
            <p>La page ou l&#39;élément que vous essayez d&#39;atteindre n&#39;a pas été trouvé</p>
            <Link
                href="/"
                className={"bg-primary hover:bg-secondary text-white px-3 py-1 rounded mt-4"}
                aria-label={"Lien vers l'accueil du site"}
            >
                Revenir a l&#39;accueil
            </Link>
        </div>
    );
}
