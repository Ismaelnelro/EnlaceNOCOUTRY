import { OngInterface } from "./home/LastPost";

export default function VolunteerPositionCard({ post }: { post: OngInterface }) {
    return (
        <div key={post.id} className="text-xs   text-secondary opacity-50 hover:opacity-95 transition-all duration-300">
            <section className=" relative  h-[100px] rounded-t-lg">
                <span className="absolute right-2 top-2  px-4 py-[2px] rounded-sm  font-semibold text-white bg-primary">
                    {post.modality}
                </span>
                <img className="w-full h-full object-cover rounded-t-lg" src={post.img} alt="ONG brand" />
            </section>

            <section className="min-h-[150px] p-4 bg-white  rounded-b-lg relative">
                <div className="font-medium font-lato flex flex-col gap-1">
                    <h2 className=" text-base">{post.title}</h2>
                    <p className="mt-3">
                        Ubicación: <span >{post.location}</span>
                    </p>
                    <p>
                        Duración: <span >{post.duration}</span>
                    </p>
                </div>
                <div className="absolute bottom-2 right-2">
                    <span className="text-xs">{post.published}</span>
                </div>
            </section>
        </div>
    );
}