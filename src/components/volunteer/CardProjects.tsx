
export const CardProjects = () => {
  return (
    <div className="w-80 h-72 flex flex-col justify-between">
      <header>
        <img
          className="w-full object-cover rounded-t-lg"
          src="https://images01.nicepagecdn.com/page/44/59/website-design-4459010.jpg"
          alt="position"
        />
      </header>
      <main className="flex flex-col gap-8 p-3  rounded-b-lg text-secondary">
        <section className="flex flex-col  gap-2 text-xs font-roboto  font-light leading-3">
          <h2 className="leading-4 text-sm font-medium">Página hecha en JavaScript y PHP</h2>
          <p>Tecnologías usadas:</p>
          <span>JavaScript, Bootstrap, PHP, HTML, CSS. </span>
        </section>
        <button type="button" className="w-full px-6 py-1 text-xs font-medium leading-5 text-white  rounded-full cursor-pointer bg-primary ">
          Ir al proyecto
        </button>
      </main>
    </div>
  );
};