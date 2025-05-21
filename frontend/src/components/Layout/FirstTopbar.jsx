const FirstTopbar = () => {
    return (
      <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-gray-100 overflow-hidden py-2">
        <div className="relative w-full h-6">
          <div className="absolute top-0 left-0 flex animate-marquee gap-16">
            <div className="flex gap-16 whitespace-nowrap">
              {Array(10).fill(null).map((_, i) => (
                <p key={i} className="flex items-center gap-2 leading-tight tracking-tight font-thin mx-4">
                   Welcome to SimoShopExpress Store Online 🛍️
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FirstTopbar;
  