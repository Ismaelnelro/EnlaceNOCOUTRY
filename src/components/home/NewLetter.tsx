const Newsletter: React.FC = () => {
    return (
        <section className=" my-10 flex flex-col md:flex-row p-10 py-14  justify-around items-center gap-10  text-white  bg-grey-900">
            <div className=" h-72 md:w-96  flex flex-col items-center justify-around gap-5">
                <h3 className="text-5xl font-bold">Enlace - ONG</h3>
                <svg width="250" height="100" viewBox="0 0 61 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path
                        d="M24.9616 14.3553C24.9998 15.8855 23.7757 17.1096 22.2456 17.0713C20.7537 17.0713 19.5296 15.8472 19.5296 14.3553C19.5296 6.896 25.5927 0.832903 33.0521 0.832902L46.5936 0.832901C54.053 0.832902 60.1161 6.896 60.1161 14.3553C60.1161 21.8147 54.053 27.8778 46.5936 27.8778L40.8939 27.8778C42.4814 26.3285 43.8012 24.5115 44.7575 22.4841L46.5745 22.465C51.0692 22.4841 54.7033 18.8501 54.6841 14.3553C54.7033 9.86061 51.0692 6.22657 46.5745 6.2457L33.0712 6.2457C28.5765 6.22658 24.9424 9.86061 24.9616 14.3553ZM38.4649 11.6394C39.9567 11.6394 41.1808 12.8635 41.1808 14.3553C41.1808 21.8147 35.1177 27.8778 27.6584 27.8778L14.1168 27.8778C6.65749 27.8778 0.594387 21.8147 0.594388 14.3553C0.594388 6.896 6.65749 0.832902 14.1168 0.832901L19.8165 0.832903C18.229 2.38215 16.9093 4.19916 15.9338 6.2457L14.136 6.2457C9.64122 6.22657 6.00719 9.86061 6.02632 14.3553C6.00719 18.8501 9.64122 22.4841 14.136 22.465L27.6393 22.465C32.134 22.4841 35.768 18.8501 35.7489 14.3553C35.7106 12.8252 36.9347 11.6011 38.4649 11.6394Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className=" h-50 flex flex-col justify-around items-center md:items-start gap-4 ">
                <h3 className="text-5xl font-bold">Newsletter</h3>
                <p className="md:text-2xl font-light">Sé el primero en conocer todas las búsquedas</p>
                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 pl-3 w-full text-sm  
                    bg-grey-900 
                    border-0 border-b-[1px] border-b-white appearance-none 
                    focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="ingresa tu correo electronico"
                    required
                />
                <button type="submit" className="bg-primary  p-3 text-xl  rounded-md w-72 hover:font-bold">
                    Suscribirme
                </button>
            </div>

        </section>
    );
}


export default Newsletter;