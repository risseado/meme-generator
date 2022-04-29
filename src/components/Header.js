import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="Troll Face" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}