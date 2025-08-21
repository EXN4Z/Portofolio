import { useEffect, useState } from "react";

function App() {
  const [typingText, setTypingText] = useState("");
  const [descText, setDescText] = useState("");

  useEffect(() => {
    // animasi ngetik
    const texts = ["Frontend Dev", "UI/UX Designer"];
    let i = 0, j = 0;
    let deleting = false;

    const interval = setInterval(() => {
      let current = texts[i];
      if (!deleting) {
        j++;
        if (j === current.length + 1) deleting = true;
      } else {
        j--;
        if (j === 0) {
          deleting = false;
          i = (i + 1) % texts.length;
        }
      }
      setTypingText(current.slice(0, j));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // animasi ngetik
    const textsDesc = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore, iure labore ducimus doloribus nemo ratione repellat sapiente minima, omnis velit dolorem quis debitis libero adipisci minus quod architecto aliquid."
    ];
    let i2 = 0, j2 = 0;

    const interval = setInterval(() => {
      let current = textsDesc[i2];
      if (j2 < current.length) {
        j2++;
        setDescText(current.slice(0, j2));
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">

      <header className="bg-[#1f1f1f]">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Portofolio</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Tools</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className="flex-1 ml-20">
          <p className="text-gray-300 mb-2">Halo, Saya Adalah</p>
          <h1 className="text-5xl font-bold mb-4">Febriyan Arbi</h1>
          <p className="text-xl h-6">{typingText}</p>
          <p className="max-w-xl text-gray-300 mt-4 leading-relaxed">{descText}</p>
        </div>

        <div className="max-w-[300px] bg-[#1f1f1f] rounded-lg mr-20">
          <div className=" max-w-[300px] mx-auto mt-8 px-6">
            <img src="https://ik.imagekit.io/uokigjcjp/3969fc7290150f3491e17020339e70f5111.jpg?updatedAt=1755405944639" alt="profile" className="w-full h-auto" />
            <button onClick={() => window.open("https://github.com/EXN4Z", "_blank")} className="flex justify-center text-white font-bold mt-2 mx-auto px-4 py-1 rounded-md pb-4">EXN4Z</button>
          </div>
        </div>
      </main>


    <div className="container mx-auto px-4 bg-[#1f1f1f] rounded-lg flex items-center gap-8">
      <div className="flex-shrink-0 max-w-[300px]">
        <img
      src="https://ik.imagekit.io/uokigjcjp/407d9107a19e32338236fd28a152e344-removebg-preview.png?updatedAt=1755408734612"
          alt="about"
          className="w-full h-auto"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4 text-gray-300 text-1xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut, ab
          nesciunt, eos, repellendus est labore obcaecati iure fugit ex odio sint
          necessitatibus voluptatibus autem ea harum. Perspiciatis, beatae illum!
        </p>
      </div>
    </div>

      </div>
  );
}

export default App;
