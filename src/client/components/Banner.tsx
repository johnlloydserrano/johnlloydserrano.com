export default function Banner() {
  return (
    <section>
      <div className="headline-wrapper bg-white">
        <div className="container mx-auto py-24">
          <div className="flex">
            <div className="w-1/2 p-12">
              <div className="flex items-center h-full">
                <div className="py-10">
                  <div className="space-y-8 px-4">
                    <img className="h-24" src="/images/serrano.png" alt="johnlloydserrano" />
                    <h1 className="text-5xl leading-tight roboto-regular tracking-wide py-2">Hello! I'm John Lloyd Serrano</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-12">
              <div className="flex items-center flex-wrap h-full px-4 py-10 space-y-6">
                <h2 className="roboto-regular leading-tight text-5xl pr-12">A Web developer from Cebu City, Philippines.</h2>
                <p className="roboto-regular text-lg text-slate-500">
                  A passionate individual who finds deep fulfillment and joy in the journey of crafting meaningful experiences.
                </p>
                <div className="space-x-6">
                  <button className="roboto-medium text-lg bg-primary border border-primary tracking-wide text-white py-2 px-6 rounded-lg">
                    Talk with me
                  </button>
                  <button className="roboto-light text-lg bg-white border rounded-lg py-2 px-6">Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
