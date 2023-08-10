const Projects = () => {
  const FirebaseIcon = () => (
    <div className="flex rounded gap-1 border p-1 cursor-default">
      <svg
        role="img"
        width="20px"
        fill="#ffca28"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Firebase</title>
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
      <span>Firebase</span>

    </div>
  );

  const ReactIcon = () => (
    <div className="flex rounded gap-1 border p-1 cursor-default">
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="20px"
        fill="#61dafb"
        xmlns="http://www.w3.org/2000/svg"
        >
        <title>React</title>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
      <span>ReactJs</span>
    </div>
  );

  const NextJsIcon = () => (
    <div className="flex rounded gap-1 border p-1 cursor-default">
      <svg
      role="img"
      viewBox="0 0 24 24"
      width="20px"
      fill="grey"
      xmlns="http://www.w3.org/2000/svg"
      >
        <title>Next.js</title>
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
      </svg>
      <span>NextJs</span>
    </div>
  );

  return (
    <>
      <div className="projects pt-24" id="work">
        <p className="text-3xl mb-4">Projects</p>
        
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
          {/* Ecommerce */}
          <div className="rounded p-2 border w-72 ">
            <img
                alt="Project Images"
                src="/ecom.png"
                loading="lazy"
                className="rounded hover:scale-150 transition-transform hover:cursor-crosshair"
              />
              <div className="py-2">
                <div className="flex gap-2 text-sm">
                    <ReactIcon />
                    <NextJsIcon />
                </div>
                <p className="font-bold my-2">Ecommerce Store</p>
                <p >
                  This is an Ecommerce Store.
                </p>

                <div className="flex justify-around mt-12">
                  <a href="https://ecom-chirag.vercel.app/"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Link
                  </a>
                  <a href="https://github.com/chiragbairwa/ecommerce"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                  >
                    GitHub Link
                  </a>
                  </div>
                </div>
          </div>  
          {/* Library */}
          <div className="rounded p-2 border w-72">
            <img
                alt="Project Images"
                src="/library-photo.webp"
                loading="lazy"
                className="rounded hover:scale-150 transition-transform hover:cursor-crosshair"

              />
              <div className="py-2">
                <div className="flex justify-between text-sm">
                    <ReactIcon />
                    <NextJsIcon />
                    <FirebaseIcon />
                </div>
                <p className="font-bold my-2">Library Genie</p>
                <p className="">
                  This WebApp can be used to know about your books using the barcode
                </p>

                <div className="flex justify-around mt-2">
                  <a
                    href="https://library-liard.vercel.app/login"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/chiragbairwa/library-college"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                  >
                    GitHub Link
                  </a>
                  </div>
                </div>
          </div>
          {/* Pokemon */}
          <div className="rounded p-2 border w-72 ">
            <img
                alt="Project Images"
                src="/pokedex-photo.webp"
                loading="lazy"
                className="rounded hover:scale-150 transition-transform hover:cursor-crosshair"
              />
              <div className="py-2">
                <div className="flex gap-2 text-sm">
                    <ReactIcon />
                    <NextJsIcon />
                </div>
                <p className="font-bold my-2">Pokédex WebApp</p>
                <p >
                  This WebApp can be used to know about your favourite Pokémon.
                </p>

                <div className="flex justify-around mt-2">
                  <a
                    href="https://pokedex-app-chi.vercel.app/"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Link
                  </a>
                  <a href="https://github.com/chiragbairwa/pokedex-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                  >
                    GitHub Link
                  </a>
                  </div>
                </div>
          </div>  
          {/* Authentication */}
          {/* <div className="rounded p-2 border w-72 ">
            <img
                alt="Project Images"
                src="/auth-photo.webp"
                loading="lazy"
                className="rounded hover:scale-150 transition-transform hover:cursor-crosshair"
            />
              <div className="py-2">
                <div className="flex justify-between text-sm">
                    <ReactIcon />
                    <NextJsIcon />
                    <FirebaseIcon />
                </div>
                <p className="my-2 font-bold">Authentication WebApp</p>
                <p className="">
                  This WebApp can be used to know about your favourite Pokémon.
                </p>

                <div className="flex justify-around mt-2">
                  <a href="https://library-liard.vercel.app/login"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Link
                  </a>
                  <a href="https://github.com/chiragbairwa/library-college"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded border py-2 px-3 hover:border-blue-600 hover:text-blue-600"
                  >
                    GitHub Link
                  </a>
                  </div>
                </div>
          </div>             */}
        </div>
      </div>
    </>
  );
};

export default Projects;
