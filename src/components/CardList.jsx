export const CardList = ({ title, items }) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-y-8">
          <h2 className="font-semibold text-[32px] ">{title}</h2>

          <div className="flex gap-5">
            {items.map((item) => (
              <a href="#" key={item.id}>
                <div className="flex flex-col gap-y-0.5">
                  <img src={item.img} alt={item.title} className="w-[239px]" />

                  <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold inline-flex">{item.title}</h3>
                    <p className="font-normal text-[14px] text-[#3f51b5]">{item.type}</p>

                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <span>
                          ⭐
                        </span>
                        <p>{item.rating}</p>
                      </div>

                      <div className="flex gap-1">
                        <span>📖</span>
                        <span>🎧</span>
                      </div>
                    </div>

                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
