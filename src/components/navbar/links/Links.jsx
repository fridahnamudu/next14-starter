import Link from "next/link";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            Path: "/",
        },
        {
            title: "About",
            Path: "/about",
        },
        {
            title: "Contact",
            Path: "/contact",
        },
        {
            title: "Blog",
            Path: "/blog",
        },
       
        
    ];


  return (
    <div>
       {links.map((link=>(
        <Link href={link.Path} key={link.title}>{link.title}</Link>
       )))}
    </div>
  )
}

export default Links
