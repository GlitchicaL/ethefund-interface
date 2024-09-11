import NextLink from "next/link";

interface LinkProps {
  text: string;
  link: string;
  box?: boolean;
}

export default function Link({ text, link, box = false }: LinkProps) {
  return (
    <NextLink href={link} className={`p-1 text-center ${box && "block bg-bluewood-300 text-white font-bold w-32 my-2 border-2 border-bluewood-300 rounded hover:bg-mint-300 hover:text-bluewood-300 transition-all"}`}>
      {text}
    </NextLink>
  );
}
