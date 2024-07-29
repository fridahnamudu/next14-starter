import Link from "next/link"

const notFound = () =>{
    return (
        <div>
            <h1>Not Found</h1>
            <p>Soory, page not found</p>
            <Link href="/">Return Home</Link>
            </div>
    )

}

export default notFound